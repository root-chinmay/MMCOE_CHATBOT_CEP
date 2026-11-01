const { matchCollegeKnowledge, KB_RESPONSES } = require('../lib/knowledgeBase');
const { askGemini } = require('../lib/gemini');
const { recordQueryLog } = require('../lib/models/ChatLog');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { message, clientApiKey, userEmail, userName, userBranch, userYear, sessionId } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, message: 'Message content is required.' });
    }

    const cleanInput = message.trim();
    const lower = cleanInput.toLowerCase();

    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0].trim() : (req.socket?.remoteAddress || req.ip || 'Unknown');
    const userAgent = req.headers['user-agent'] || 'Unknown';

    let resultHtml = '';
    let resultSource = 'college_kb';
    let resultTitle = '';

    // Check direct key access (e.g. 'about', 'courses', 'fees', 'placements')
    if (KB_RESPONSES[lower]) {
      resultHtml = KB_RESPONSES[lower];
      resultTitle = lower.toUpperCase();
      resultSource = 'college_kb';
    } else {
      // 1. Try matching against the hard-coded MMCOE knowledge base
      const collegeMatch = matchCollegeKnowledge(cleanInput);
      if (collegeMatch) {
        resultHtml = collegeMatch.html;
        resultTitle = collegeMatch.title;
        resultSource = 'college_kb';
      } else {
        // 2. Greetings handling
        const greetings = ['hi', 'hello', 'hey', 'namaste', 'good morning', 'good evening', 'good afternoon', 'hii', 'helo', 'hai', 'hola'];
        if (greetings.some(g => lower === g || lower.startsWith(g + ' ') || lower.startsWith(g + '!'))) {
          resultHtml = `
            <div class="rs"><span class="rt">👋 Hello! Welcome to MMCOE AI ChatBot</span>
            <p style="color:var(--text-sub);font-size:.9rem;line-height:1.7;">
              I am the official intelligent AI Assistant for <span class="hl">Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune</span>.
              <br><br>
              I can answer anything about:
              <br>• <strong>Faculty &amp; HODs</strong> across all engineering departments
              <br>• <strong>B.Tech / MBA Courses &amp; Intakes</strong>
              <br>• <strong>MHT-CET &amp; JEE Cutoffs</strong>
              <br>• <strong>Fee Structures &amp; Scholarships</strong> (EBC, TFWS, MahaDBT)
              <br>• <strong>Placements &amp; Top Recruiters</strong>
              <br>• <strong>Hostel Facilities &amp; Campus Amenities</strong>
              <br><br>
              <em>💡 You can also ask me any general knowledge, engineering, coding, or science questions powered by Google Gemini AI!</em>
            </p></div>
          `;
          resultTitle = 'Welcome';
          resultSource = 'greeting';
        } else {
          // 3. For any question outside MMCOE domain: Call Gemini API!
          const geminiResult = await askGemini(cleanInput, clientApiKey);
          resultHtml = geminiResult.html;
          resultTitle = 'Gemini AI Response';
          resultSource = 'gemini_ai';
        }
      }
    }

    // Persist user search / query to database
    try {
      await recordQueryLog({
        userEmail: userEmail || 'guest',
        userName: userName || 'Guest User',
        userBranch: userBranch || 'N/A',
        userYear: userYear || 'N/A',
        query: cleanInput,
        responseSummary: resultHtml.replace(/<[^>]+>/g, ' ').substring(0, 150).trim(),
        source: resultSource,
        ip,
        userAgent,
        sessionId: sessionId || ''
      });
    } catch (logErr) {
      console.warn('[ChatLog] Non-blocking log write warning:', logErr.message);
    }

    return res.status(200).json({
      success: true,
      source: resultSource,
      title: resultTitle,
      html: resultHtml
    });

  } catch (error) {
    console.error('[Chat API Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Error processing chat query: ' + error.message,
      html: `<div class="rs"><span class="rt">⚠️ Error</span><p>An unexpected error occurred while processing your query.</p></div>`
    });
  }
};
