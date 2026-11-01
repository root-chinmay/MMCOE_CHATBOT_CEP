const { matchCollegeKnowledge, KB_RESPONSES } = require('../lib/knowledgeBase');
const { askGemini } = require('../lib/gemini');

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
    const { message, clientApiKey } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, message: 'Message content is required.' });
    }

    const cleanInput = message.trim();
    const lower = cleanInput.toLowerCase();

    // Check direct key access (e.g. 'about', 'courses', 'fees', 'placements')
    if (KB_RESPONSES[lower]) {
      return res.status(200).json({
        success: true,
        source: 'college_kb',
        title: lower.toUpperCase(),
        html: KB_RESPONSES[lower]
      });
    }

    // 1. Try matching against the hard-coded MMCOE knowledge base
    const collegeMatch = matchCollegeKnowledge(cleanInput);
    if (collegeMatch) {
      return res.status(200).json({
        success: true,
        source: 'college_kb',
        title: collegeMatch.title,
        html: collegeMatch.html
      });
    }

    // 2. Greetings handling
    const greetings = ['hi', 'hello', 'hey', 'namaste', 'good morning', 'good evening', 'good afternoon', 'hii', 'helo', 'hai', 'hola'];
    if (greetings.some(g => lower === g || lower.startsWith(g + ' ') || lower.startsWith(g + '!'))) {
      return res.status(200).json({
        success: true,
        source: 'greeting',
        title: 'Welcome',
        html: `
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
        `
      });
    }

    // 3. For any question outside MMCOE domain: Call Gemini API!
    const geminiResult = await askGemini(cleanInput, clientApiKey);

    return res.status(200).json({
      success: true,
      source: 'gemini_ai',
      isAi: true,
      html: geminiResult.html
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
