function setVH() {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
}
setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', () => setTimeout(setVH, 100));

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('mmcoe_theme', isLight ? 'light' : 'dark');
  showToast(isLight ? '☀️ Light mode on' : '🌙 Dark mode on');
}

(function () {
  const saved = localStorage.getItem('mmcoe_theme');
  if (saved === 'light') document.documentElement.classList.add('light');
})();

// Client-side cache of MMCOE Knowledge Base for instant access and offline fallback
const LOCAL_KB = {
  about: `<div class="rs"><span class="rt">🏛️ About MMCOE, Pune</span><ul class="rl">
<li><span class="hl">Full Name:</span> Marathwada Mitra Mandal's College of Engineering (MMCOE)</li>
<li><span class="hl">Trust:</span> Marathwada Mitra Mandal, founded in 1967 by Late Shri Shankarraoji Chavan (Former Home Minister, Govt. of India)</li>
<li><span class="hl">Location:</span> Sr. No. 18, Plot 5/3, CTS 205, Vadar Vasti Rd, behind Vandevi Temple, Karve Nagar, Pune, Maharashtra - 411 052</li>
<li><span class="hl">Established:</span> 2006</li>
<li><span class="hl">Principal:</span> Dr. Sachin R. Sakhare</li>
<li><span class="hl">Status:</span> UGC Autonomous Engineering College</li>
<li><span class="hl">Affiliation:</span> Savitribai Phule Pune University (SPPU)</li>
<li><span class="hl">Accreditation:</span> NAAC Grade 'A++' (Highest Grade with CGPA 3.53+) | NBA Accredited Branches</li>
<li><span class="hl">DTE Code:</span> EN6156 (Institute Code: 06156)</li>
<li><span class="hl">Official Website:</span> <a href="https://mmcoe.edu.in" target="_blank" style="color:var(--gold-bright);">www.mmcoe.edu.in</a></li>
</ul></div>`,

  faculty: `<div class="rs"><span class="rt">👨‍🏫 MMCOE Leadership & Heads of Departments (HODs)</span>
<table class="rtb">
<tr><th>Department</th><th>HOD Name</th><th>Designation</th></tr>
<tr><td>College Principal</td><td><strong>Dr. Sachin R. Sakhare</strong></td><td>Principal & Professor</td></tr>
<tr><td>Computer Engineering</td><td><strong>Dr. Kalpana S. Thakre</strong></td><td>Associate Professor & HOD</td></tr>
<tr><td>Information Technology</td><td><strong>Dr. Rupali M. Chopade</strong></td><td>Associate Professor & HOD</td></tr>
<tr><td>AI & Data Science</td><td><strong>Dr. Araddhana A. Deshmukh</strong></td><td>Associate Professor & HOD</td></tr>
<tr><td>Electronics & Telecom (E&TC)</td><td><strong>Dr. G. S. Gawande</strong></td><td>Associate Professor & HOD</td></tr>
<tr><td>Mechanical Engineering</td><td><strong>Dr. Vikas R. Deulgaonkar</strong></td><td>Professor & HOD</td></tr>
<tr><td>Electrical Engineering</td><td><strong>Dr. Haripriya H. Kulkarni</strong></td><td>Associate Professor & HOD</td></tr>
<tr><td>First Year (FE Sciences)</td><td><strong>Dr. V. N. Patil</strong></td><td>Associate Professor & Head FE</td></tr>
<tr><td>MBA Department</td><td><strong>Dr. Roopa G. Kulkarni</strong></td><td>Associate Professor & Head MBA</td></tr>
</table></div>
<div class="note">💡 Tip: Ask for <em>"Computer faculty"</em>, <em>"IT teachers"</em>, or <em>"Mechanical faculty"</em> to see individual department faculty rosters!</div>`,

  faculty_comp: `<div class="rs"><span class="rt">💻 Computer Engineering Faculty Roster</span><ul class="rl">
<li><span class="hl">Dr. Kalpana S. Thakre</span> - Associate Professor & HOD (Ph.D., M.Tech)</li>
<li><span class="hl">Dr. Sankirti S. Shiravale</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Dr. Smita Chaudhary</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Dr. A. A. Deshmukh</span> - Associate Professor (Ph.D.)</li>
<li><span class="hl">Ms. Aishwarya S. Mane</span> - Assistant Professor (M.Tech)</li>
<li><span class="hl">Ms. Hema R. Karande</span> - Assistant Professor (M.E.)</li>
<li><span class="hl">Ms. Mayuri Shelke</span> - Assistant Professor (M.Tech)</li>
<li><span class="hl">Mr. P. B. Kamble</span> - Assistant Professor (M.E.)</li>
<li><span class="hl">Ms. P. S. Joshi</span> - Assistant Professor (M.Tech)</li>
<li><span class="hl">Ms. N. A. Kulkarni</span> - Assistant Professor (M.E.)</li>
</ul></div>`,

  faculty_it: `<div class="rs"><span class="rt">🖥️ Information Technology Faculty Roster</span><ul class="rl">
<li><span class="hl">Dr. Rupali M. Chopade</span> - Associate Professor & HOD (Ph.D., M.E.)</li>
<li><span class="hl">Dr. Bharati P. Vasgi</span> - Associate Professor (Ph.D., M.Tech)</li>
<li><span class="hl">Dr. V. S. Bidve</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Mr. Nikhil Dhavase</span> - Assistant Professor (M.Tech)</li>
<li><span class="hl">Ms. P. D. Shinde</span> - Assistant Professor (M.E.)</li>
<li><span class="hl">Ms. S. K. Patil</span> - Assistant Professor (M.Tech)</li>
<li><span class="hl">Mr. R. G. Patil</span> - Assistant Professor (M.E.)</li>
</ul></div>`,

  faculty_aids: `<div class="rs"><span class="rt">🤖 AI & Data Science Faculty Roster</span><ul class="rl">
<li><span class="hl">Dr. Araddhana A. Deshmukh</span> - Associate Professor & HOD (Ph.D., M.E.)</li>
<li><span class="hl">Dr. Vina M. Lomte</span> - Associate Professor (Ph.D., M.Tech)</li>
<li><span class="hl">Dr. Mandar Mokashi</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Dr. Sinu Nambiar</span> - Assistant Professor (Ph.D., M.Tech)</li>
<li><span class="hl">Ms. Sonali Potdar</span> - Assistant Professor (M.E.)</li>
<li><span class="hl">Mr. Rishikesh Yeolekar</span> - Assistant Professor (M.Tech)</li>
<li><span class="hl">Mrs. Snehal Khajurgi</span> - Assistant Professor (M.E.)</li>
</ul></div>`,

  faculty_entc: `<div class="rs"><span class="rt">📡 Electronics & Telecom (E&TC) Faculty</span><ul class="rl">
<li><span class="hl">Dr. G. S. Gawande</span> - Associate Professor & HOD (Ph.D., M.E.)</li>
<li><span class="hl">Dr. Archana B. Kanwade</span> - Associate Professor (Ph.D., M.Tech)</li>
<li><span class="hl">Dr. A. M. Bhatlawande</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Ms. H. N. Burande</span> - Assistant Professor (M.E.)</li>
<li><span class="hl">Ms. M. R. Shinde</span> - Assistant Professor (M.Tech)</li>
<li><span class="hl">Mr. S. P. Pawar</span> - Assistant Professor (M.E.)</li>
<li><span class="hl">Mr. V. D. Jadhav</span> - Assistant Professor (M.Tech)</li>
</ul></div>`,

  faculty_mech: `<div class="rs"><span class="rt">⚙️ Mechanical Engineering Faculty</span><ul class="rl">
<li><span class="hl">Dr. Vikas R. Deulgaonkar</span> - Professor & HOD (Ph.D., M.E.)</li>
<li><span class="hl">Dr. P. K. Katare</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Dr. A. B. Gholap</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Dr. V. W. Bhatkar</span> - Associate Professor (Ph.D., M.Tech)</li>
<li><span class="hl">Dr. R. S. Yadav</span> - Assistant Professor (Ph.D.)</li>
<li><span class="hl">Dr. R. N. Todkar</span> - Assistant Professor (Ph.D.)</li>
<li><span class="hl">Dr. S. S. Lahane</span> - Assistant Professor (Ph.D.)</li>
<li><span class="hl">Dr. S. S. Kirpekar</span> - Assistant Professor (Ph.D.)</li>
<li><span class="hl">Dr. M. D. Joshi</span> - Assistant Professor (Ph.D.)</li>
</ul></div>`,

  faculty_elect: `<div class="rs"><span class="rt">⚡ Electrical Engineering Faculty</span><ul class="rl">
<li><span class="hl">Dr. Haripriya H. Kulkarni</span> - Associate Professor & HOD (Ph.D., M.E.)</li>
<li><span class="hl">Dr. Anand V. Satpute</span> - Associate Professor (Ph.D., M.Tech)</li>
<li><span class="hl">Dr. Vilas S. Bugade</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Dr. A. R. Soman</span> - Associate Professor (Ph.D., M.E.)</li>
<li><span class="hl">Dr. V. N. Gohokar</span> - Professor (Ph.D., M.E.)</li>
<li><span class="hl">Ms. Sunita A. Upasani</span> - Assistant Professor (M.E.)</li>
<li><span class="hl">Mr. Akshay M. Suryawanshi</span> - Assistant Professor (M.Tech)</li>
<li><span class="hl">Ms. Christina P. Thottan</span> - Assistant Professor (M.E.)</li>
<li><span class="hl">Mr. Ajay K. Lohate</span> - Assistant Professor (M.Tech)</li>
</ul></div>`,

  faculty_fe: `<div class="rs"><span class="rt">📐 First Year (Engineering Sciences) Faculty</span><ul class="rl">
<li><span class="hl">Dr. V. N. Patil</span> - Head of First Year Department (Chemistry)</li>
<li><span class="hl">Physics:</span> Ms. M. S. Taware, Mr. A. N. Bochare, Dr. K. S. Dhabekar, Dr. Dipmala Sali, Mrs. Uma Thakur</li>
<li><span class="hl">Chemistry:</span> Dr. K. N. Handore, Mr. P. P. Yenare, Dr. Poonam Kaswan, Ms. D. M. Kulkarni</li>
<li><span class="hl">Mathematics:</span> Ms. A. G. Joshi, Ms. D. S. Sisodia, Ms. V. Y. Shinde, Mr. A. S. Shinde, Ms. D. R. Sangpal</li>
<li><span class="hl">Civil & Mechanics:</span> Mr. S. L. Karche, Mr. R. B. Kamble, Ms. S. A. Mashalkar, Ms. S. D. Kar</li>
</ul></div>`,

  courses: `<div class="rs"><span class="rt">📚 Degree Programs Offered at MMCOE</span>
<table class="rtb">
<tr><th>Course / Branch</th><th>Duration</th><th>Intake</th><th>Status</th></tr>
<tr><td>Computer Engineering (B.Tech)</td><td>4 Years</td><td>120</td><td>NBA Accredited</td></tr>
<tr><td>Information Technology (B.Tech)</td><td>4 Years</td><td>120</td><td>NBA Accredited</td></tr>
<tr><td>AI &amp; Data Science (B.Tech)</td><td>4 Years</td><td>120</td><td>Autonomous</td></tr>
<tr><td>Electronics &amp; Telecom (B.Tech)</td><td>4 Years</td><td>120</td><td>NBA Accredited</td></tr>
<tr><td>Electrical Engineering (B.Tech)</td><td>4 Years</td><td>60</td><td>NBA Accredited</td></tr>
<tr><td>Mechanical Engineering (B.Tech)</td><td>4 Years</td><td>60</td><td>NBA Accredited</td></tr>
<tr><td>MBA (Master of Business Admin)</td><td>2 Years</td><td>60</td><td>SPPU Affiliated</td></tr>
<tr><td>M.Tech Computer Engineering</td><td>2 Years</td><td>18</td><td>SPPU Affiliated</td></tr>
</table></div>`,

  fees: `<div class="rs"><span class="rt">💰 B.Tech Fee Structure for AY 2026-27</span>
<table class="rtb"><tr><th>Category</th><th>Tuition Fee</th><th>Development Fee</th><th>Total Annual (Approx)</th></tr>
<tr><td>Open / General</td><td>Rs. 1,27,826</td><td>Rs. 17,674</td><td>Rs. 1,45,500</td></tr>
<tr><td>OBC / EWS / SEBC</td><td>Rs. 63,913</td><td>Rs. 17,674</td><td>Rs. 81,587</td></tr>
<tr><td>VJ / NT / SBC / TFWS</td><td>Rs. 0 (100% Free)</td><td>Rs. 17,674</td><td>Rs. 17,674</td></tr>
<tr><td>SC / ST Category</td><td>Rs. 0 (Waived)</td><td>Rs. 0 (Waived)</td><td>Rs. 4,500 - 5,000</td></tr>
<tr><td>J&amp;K PMSSS Quota</td><td>Govt Quota</td><td>Nominal</td><td>Rs. 34,000</td></tr>
</table></div>
<div class="note">Hostel + Mess Fee: ~Rs. 1.07 Lakhs / year. Verify exact details at: <strong>020-25479811</strong></div>`,

  cutoff: `<div class="rs"><span class="rt">📊 MHT-CET Cutoff Percentiles (CAP Round IV)</span>
<table class="rtb"><tr><th>Branch</th><th>Open (GOPEN)</th><th>OBC (GOBC)</th><th>TFWS</th><th>JEE Main</th></tr>
<tr><td>Computer Engineering</td><td>98.83 %ile</td><td>95.23 %ile</td><td>98.92 %ile</td><td>89.75 %ile</td></tr>
<tr><td>Information Technology</td><td>95.50 %ile</td><td>94.34 %ile</td><td>96.80 %ile</td><td>88.53 %ile</td></tr>
<tr><td>AI &amp; Data Science</td><td>96.22 %ile</td><td>94.09 %ile</td><td>96.45 %ile</td><td>88.06 %ile</td></tr>
<tr><td>E&amp;TC Engineering</td><td>95.62 %ile</td><td>93.10 %ile</td><td>95.12 %ile</td><td>85.96 %ile</td></tr>
<tr><td>Electrical Engineering</td><td>93.27 %ile</td><td>87.92 %ile</td><td>91.80 %ile</td><td>80.45 %ile</td></tr>
<tr><td>Mechanical Engineering</td><td>95.07 %ile</td><td>86.34 %ile</td><td>90.40 %ile</td><td>75.71 %ile</td></tr>
</table></div>`,

  admission: `<div class="rs"><span class="rt">📋 Admission Process for B.Tech</span><ul class="rl">
<li><span class="hl">Entrance:</span> MHT-CET or JEE Main score</li>
<li><span class="hl">Process:</span> Centralized Admission Process (CAP) rounds 1-4 via State CET Cell</li>
<li><span class="hl">Register at:</span> cetcell.mahacet.org</li>
<li><span class="hl">Institute Code:</span> EN6156</li>
<li><span class="hl">Lateral Entry:</span> Direct 2nd Year for Engineering Diploma holders (DSY)</li>
<li><span class="hl">Eligibility:</span> Minimum 45% aggregate in 12th PCM (40% for Reserved categories from Maharashtra)</li>
</ul></div>`,

  placements: `<div class="rs"><span class="rt">💼 MMCOE Placements</span><ul class="rl">
<li><span class="hl">Highest International Package:</span> Rs. 25 LPA</li>
<li><span class="hl">Highest Domestic Package:</span> Rs. 10.5 - 12 LPA</li>
<li><span class="hl">Average Package:</span> Rs. 4.0 - 5.0 LPA</li>
<li><span class="hl">Companies Visiting:</span> 200+ recruiters per year</li>
<li><span class="hl">Top Recruiters:</span> TCS, Infosys, Wipro, Cognizant, Capgemini, Persistent Systems, L&amp;T, Tech Mahindra, Mercedes-Benz R&amp;D, Cummins, Bharat Forge, Veritas</li>
</ul></div>`,

  scholarships: `<div class="rs"><span class="rt">🎓 Scholarships at MMCOE</span><ul class="rl">
<li><span class="hl">Rajarshi Shahu Maharaj (EBC):</span> 50% Tuition Fee Concession for Open with income &lt; 8 Lakhs</li>
<li><span class="hl">TFWS Scheme:</span> 100% Tuition Fee waived for top meritorious CAP rankers</li>
<li><span class="hl">SC / ST / OBC / VJ / NT Scholarships:</span> Full or partial fee waiver via Social Welfare Dept</li>
<li><span class="hl">Dr. Panjabrao Deshmukh Hostel Allowance:</span> Rs. 30,000/year for rural students</li>
</ul></div>`,

  hostel: `<div class="rs"><span class="rt">🏡 Hostel &amp; Accommodation</span><ul class="rl">
<li><span class="hl">Girls Hostel:</span> Situated safely inside the campus</li>
<li><span class="hl">Boys Hostel:</span> One block on-campus, second wing in close proximity</li>
<li><span class="hl">Annual Fee:</span> ~Rs. 1,07,000/year (Includes 4-time mess, electricity, Wi-Fi, 24/7 security)</li>
<li><span class="hl">Amenities:</span> Study desks, hot water, biometric security, laundry, sports</li>
</ul></div>`,

  facilities: `<div class="rs"><span class="rt">🏢 Campus Infrastructure</span><ul class="rl">
<li>Air-conditioned Smart Classrooms &amp; Projector setups</li>
<li>Central Library with 30,000+ volumes, IEEE &amp; DELNET e-journals, 24/7 reading hall</li>
<li>1000+ high-end computers with Gigabit optical fiber Wi-Fi</li>
<li>800-seater modern auditorium and seminar halls</li>
<li>Technology Business Incubator (TBI) &amp; EDC cell for student startups</li>
<li>Sports complex: cricket ground, basketball, volleyball, table tennis, gymnasium</li>
<li>Hygienic multi-cuisine cafeteria</li>
</ul></div>`,

  events: `<div class="rs"><span class="rt">🎉 Student Clubs &amp; Fests</span><ul class="rl">
<li><span class="hl">Ensemble:</span> Annual College Cultural Fest</li>
<li><span class="hl">Technotsav / Udaan:</span> National Level Project &amp; Technical Competition</li>
<li><span class="hl">Robocon Club:</span> National ABU Asia-Pacific robotics team</li>
<li><span class="hl">GDSC:</span> Google Developer Student Club</li>
<li><span class="hl">ACM Chapter &amp; IEEE Branch:</span> Global tech society chapters</li>
<li><span class="hl">BAJA &amp; SUPRA:</span> Formula Student racing teams</li>
<li><span class="hl">Antrix &amp; Drona:</span> Satellite and Drone design clubs</li>
<li><span class="hl">NSS &amp; NCC:</span> Social service and national cadets</li>
</ul></div>`,

  contact: `<div class="rs"><span class="rt">📞 MMCOE Contact &amp; Location</span><ul class="rl">
<li><span class="hl">Address:</span> Sr. No. 18, Plot 5/3, CTS 205, Vadar Vasti Road, behind Vandevi Temple, Karve Nagar, Pune, Maharashtra - 411 052</li>
<li><span class="hl">Phone:</span> 020-25479811 | 020-25479812</li>
<li><span class="hl">Helpline:</span> 7720097780 / 7720097781</li>
<li><span class="hl">Email:</span> principal@mmcoe.edu.in | admissions@mmcoe.edu.in</li>
<li><span class="hl">Website:</span> https://mmcoe.edu.in</li>
<li><span class="hl">DTE Code:</span> EN6156</li>
</ul></div>`
};

const LABELS = {
  about: "Tell me about MMCOE college",
  faculty: "Who are the HODs and faculty members at MMCOE?",
  faculty_comp: "Show Computer Engineering faculty list",
  faculty_it: "Show Information Technology faculty list",
  faculty_aids: "Show AI & Data Science faculty list",
  faculty_entc: "Show E&TC Engineering faculty list",
  faculty_mech: "Show Mechanical Engineering faculty list",
  faculty_elect: "Show Electrical Engineering faculty list",
  faculty_fe: "Show First Year faculty list",
  courses: "What courses and branches are offered at MMCOE?",
  fees: "What is the fee structure at MMCOE?",
  admission: "How to apply for admission at MMCOE?",
  cutoff: "What are the cutoff marks for MMCOE?",
  placements: "Tell me about MMCOE placements",
  scholarships: "What scholarships are available at MMCOE?",
  facilities: "What facilities does MMCOE have?",
  hostel: "Tell me about MMCOE hostel and mess charges",
  contact: "MMCOE contact information and address",
  events: "Events and clubs at MMCOE"
};

const DB = {
  getHistory() {
    try { return JSON.parse(localStorage.getItem('mmcoe_history') || '[]'); } catch { return []; }
  },
  saveHistory(h) {
    localStorage.setItem('mmcoe_history', JSON.stringify(h));
  },
  getSession() {
    try { return JSON.parse(localStorage.getItem('mmcoe_session') || 'null'); } catch { return null; }
  },
  saveSession(s) {
    localStorage.setItem('mmcoe_session', JSON.stringify(s));
  },
  clearSession() {
    localStorage.removeItem('mmcoe_session');
  },
  getCustomGeminiKey() {
    return localStorage.getItem('mmcoe_gemini_key') || '';
  },
  saveCustomGeminiKey(key) {
    localStorage.setItem('mmcoe_gemini_key', key.trim());
  }
};

let state = {
  user: null,
  isGuest: false,
  messages: [],
  guestMsgCount: 0,
  sessionId: null,
  cachedAdminUsers: []
};

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach((b, i) =>
    b.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'register'))
  );
  document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('auth-msg').innerHTML = '';
}

function showAuthMsg(msg, type = 'error') {
  document.getElementById('auth-msg').innerHTML = `<div class="msg-box msg-${type}">${msg}</div>`;
}

// BACKEND API AUTHENTICATION: LOGIN
async function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-pass').value;

  if (!email || !password) return showAuthMsg('Please fill in both email and password.');

  const btn = document.getElementById('login-btn');
  btn.disabled = true;
  btn.innerHTML = 'Signing In...';

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      showAuthMsg(data.message || 'Invalid credentials.');
      btn.disabled = false;
      btn.innerHTML = 'Sign In &rarr;';
      return;
    }

    loginUser(data.user);
  } catch (err) {
    console.warn('Backend login fallback:', err);
    // Offline / direct admin check
    if (email === 'admin@mmcoe.edu.in' && password === 'mmcoe@admin2024') {
      loginUser({ name: 'MMCOE Admin', email, role: 'admin', branch: 'Admin', year: 'Staff' });
    } else {
      showAuthMsg('Network error connecting to backend. ' + err.message);
    }
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Sign In &rarr;';
  }
}

// BACKEND API AUTHENTICATION: REGISTER
async function handleRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-pass').value;
  const branch = document.getElementById('reg-branch').value;
  const year = document.getElementById('reg-year').value;
  const phone = document.getElementById('reg-phone').value.trim();

  if (!name || !email || !password) return showAuthMsg('Please fill in name, email, and password.');
  if (password.length < 6) return showAuthMsg('Password must be at least 6 characters.');
  if (!/\S+@\S+\.\S+/.test(email)) return showAuthMsg('Enter a valid email address.');

  const btn = document.getElementById('reg-btn');
  btn.disabled = true;
  btn.innerHTML = 'Creating Account...';

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, branch, year, phone })
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      showAuthMsg(data.message || 'Failed creating account.');
      btn.disabled = false;
      btn.innerHTML = 'Create Account &rarr;';
      return;
    }

    showAuthMsg('Account created and saved to database! Signing in...', 'success');
    setTimeout(() => loginUser(data.user), 800);
  } catch (err) {
    console.warn('Backend register error:', err);
    showAuthMsg('Network error connecting to backend. ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Create Account &rarr;';
  }
}

function loginUser(user) {
  state.user = user;
  state.isGuest = false;
  DB.saveSession(user);
  initChatScreen();
}

function guestLogin() {
  const existing = parseInt(sessionStorage.getItem('mmcoe_guest_used') || '0');
  if (existing >= 5) {
    showAuthMsg('You have used all 5 guest messages. Please sign in to continue.', 'error');
    return;
  }
  state.user = { name: 'Guest', email: 'guest', role: 'guest' };
  state.isGuest = true;
  state.guestMsgCount = existing;
  initChatScreen();
}

function logout() {
  showLogoutModal();
}
function showLogoutModal() {
  document.getElementById('logout-modal').classList.add('show');
}
function closeLogoutModal() {
  document.getElementById('logout-modal').classList.remove('show');
}
function confirmLogout() {
  closeLogoutModal();
  DB.clearSession();
  state = { user: null, isGuest: false, messages: [], guestMsgCount: 0, sessionId: null, cachedAdminUsers: [] };
  document.getElementById('messages-area').innerHTML = mkWelcome('Welcome to MMCOE AI', 'Your intelligent guide for Marathwada Mitra Mandal\'s College of Engineering.');
  document.getElementById('auth-screen').classList.add('active');
  document.getElementById('chat-screen').classList.remove('active');
  document.getElementById('login-gate').style.display = 'none';
  document.getElementById('msg-count-bar').style.display = 'none';
  showToast('Signed out successfully');
}

function showAuth() {
  document.getElementById('auth-screen').classList.add('active');
  document.getElementById('chat-screen').classList.remove('active');
}

function isAdmin() {
  return !!(state.user && !state.isGuest && (state.user.role === 'admin' || state.user.email === 'admin@mmcoe.edu.in'));
}

function mkWelcome(title, desc) {
  return `<div id="welcome-banner" class="welcome-banner">
  <div class="welcome-icon">&#127891;</div>
  <div class="welcome-title">${title}</div>
  <div class="welcome-desc">${desc}</div>
  <div class="quick-chips">
    <span class="chip" onclick="sendQuick('about')">&#127963;&#65039; About MMCOE</span>
    <span class="chip" onclick="sendQuick('faculty')">👨‍🏫 Faculty &amp; HODs</span>
    <span class="chip" onclick="sendQuick('courses')">&#128218; Branches &amp; Intake</span>
    <span class="chip" onclick="sendQuick('fees')">&#128176; Fees Structure</span>
    <span class="chip" onclick="sendQuick('cutoff')">📊 Cutoffs</span>
    <span class="chip" onclick="sendQuick('placements')">&#128188; Placements</span>
    <span class="chip" onclick="sendQuick('hostel')">🏡 Hostel</span>
    <span class="chip" onclick="sendQuick('contact')">📞 Contact</span>
  </div></div>`;
}

function initChatScreen() {
  document.getElementById('auth-screen').classList.remove('active');
  document.getElementById('chat-screen').classList.add('active');
  document.getElementById('nav-name').textContent = isAdmin() ? 'Admin (' + (state.user.name || 'Admin') + ')' : state.user.name;
  document.getElementById('nav-email').textContent = state.isGuest ? 'Guest Mode' : state.user.email;
  document.getElementById('nav-avatar').textContent = (state.user.name || 'U').charAt(0).toUpperCase();
  document.getElementById('admin-btn').style.display = isAdmin() ? 'flex' : 'none';
  state.sessionId = 'session_' + Date.now();
  state.messages = [];
  updateGuestBar();
  loadSidebarHistory();
}

function updateGuestBar() {
  const bar = document.getElementById('msg-count-bar');
  if (state.isGuest) {
    const r = 5 - state.guestMsgCount;
    bar.style.display = 'block';
    bar.textContent = r > 0 ? `${r} free message${r !== 1 ? 's' : ''} remaining` : 'Guest message limit reached';
  } else {
    bar.style.display = 'none';
  }
}

// BACKEND API CHAT (With Gemini AI + MMCOE Knowledge Base)
async function fetchBotResponse(prompt) {
  const customKey = DB.getCustomGeminiKey();

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: prompt,
        clientApiKey: customKey || undefined,
        userEmail: state.user?.email || 'guest',
        userName: state.user?.name || 'Guest User',
        userBranch: state.user?.branch || 'N/A',
        userYear: state.user?.year || 'N/A',
        sessionId: state.sessionId
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.html) return data.html;
    }
  } catch (err) {
    console.warn('Backend chat unreachable, checking local fallback:', err);
  }

  // Local Fallback if server is temporarily unreachable
  const q = prompt.toLowerCase().trim();
  if (LOCAL_KB[q]) return LOCAL_KB[q];
  for (const [key, val] of Object.entries(LOCAL_KB)) {
    if (q.includes(key.replace('_', ' '))) return val;
  }
  return LOCAL_KB.about;
}

async function sendMessage(textArg) {
  const input = document.getElementById('chat-input');
  const userText = textArg || input.value.trim();
  if (!userText) return;

  if (state.isGuest && state.guestMsgCount >= 5) {
    document.getElementById('login-gate').style.display = 'block';
    return;
  }

  input.value = '';
  autoResize(input);
  closeMobileSidebar();

  const wb = document.getElementById('welcome-banner');
  if (wb) wb.remove();

  appendMessage('user', userText);
  state.messages.push({ role: 'user', content: userText });

  if (state.isGuest) {
    state.guestMsgCount++;
    sessionStorage.setItem('mmcoe_guest_used', state.guestMsgCount);
    updateGuestBar();
    if (state.guestMsgCount >= 5) {
      setTimeout(() => { document.getElementById('login-gate').style.display = 'block'; }, 300);
    }
  }

  showTyping();
  document.getElementById('send-btn').disabled = true;

  try {
    const responseHtml = await fetchBotResponse(userText);
    hideTyping();
    appendMessage('bot', responseHtml);
    state.messages.push({ role: 'bot', content: responseHtml });
    saveSession(userText);
    loadSidebarHistory();
  } catch (err) {
    hideTyping();
    appendMessage('bot', `<div class="rs"><span class="rt">⚠️ Error</span><p>Failed to get response: ${err.message}</p></div>`);
  } finally {
    document.getElementById('send-btn').disabled = false;
    document.getElementById('chat-input').focus();
  }
}

async function sendQuick(key) {
  closeMobileSidebar();
  if (state.isGuest && state.guestMsgCount >= 5) {
    document.getElementById('login-gate').style.display = 'block';
    return;
  }

  const wb = document.getElementById('welcome-banner');
  if (wb) wb.remove();

  const label = LABELS[key] || key;
  appendMessage('user', label);
  state.messages.push({ role: 'user', content: label });

  if (state.isGuest) {
    state.guestMsgCount++;
    sessionStorage.setItem('mmcoe_guest_used', state.guestMsgCount);
    updateGuestBar();
    if (state.guestMsgCount >= 5) {
      setTimeout(() => { document.getElementById('login-gate').style.display = 'block'; }, 300);
    }
  }

  showTyping();
  document.getElementById('send-btn').disabled = true;

  try {
    const responseHtml = await fetchBotResponse(key);
    hideTyping();
    appendMessage('bot', responseHtml);
    state.messages.push({ role: 'bot', content: responseHtml });
    saveSession(label);
    loadSidebarHistory();
  } catch (err) {
    hideTyping();
    appendMessage('bot', `<div class="rs"><span class="rt">⚠️ Error</span><p>Failed to get response.</p></div>`);
  } finally {
    document.getElementById('send-btn').disabled = false;
  }
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 140) + 'px';
}

function appendMessage(role, content) {
  const area = document.getElementById('messages-area');
  const time = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const isBot = role === 'bot';
  const row = document.createElement('div');
  row.className = 'msg-row' + (isBot ? '' : ' user');
  const av = document.createElement('div');
  av.className = 'msg-avatar ' + (isBot ? 'bot' : 'user-av');
  av.textContent = isBot ? 'G' : (state.user?.name?.charAt(0).toUpperCase() || 'U');
  const bub = document.createElement('div');
  bub.className = 'msg-bubble ' + (isBot ? 'bot' : 'user-b');
  bub.innerHTML = isBot ? content : esc(content);
  const t = document.createElement('div');
  t.className = 'msg-time';
  t.textContent = time;
  const w = document.createElement('div');
  w.appendChild(bub);
  w.appendChild(t);
  row.appendChild(av);
  row.appendChild(w);
  area.appendChild(row);
  area.scrollTop = area.scrollHeight;
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function showTyping() {
  const area = document.getElementById('messages-area');
  const el = document.createElement('div');
  el.className = 'typing-row';
  el.id = 'typing-indicator';
  el.innerHTML = '<div class="msg-avatar bot">G</div><div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  area.appendChild(el);
  area.scrollTop = area.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

function saveSession(lastMsg) {
  if (!state.user || state.isGuest || state.messages.length < 2) return;
  const history = DB.getHistory();
  const idx = history.findIndex(h => h.sessionId === state.sessionId);
  const entry = {
    sessionId: state.sessionId,
    userEmail: state.user.email,
    title: lastMsg.length > 45 ? lastMsg.substring(0, 45) + '...' : lastMsg,
    preview: state.messages[state.messages.length - 1]?.content?.replace(/<[^>]+>/g, '').substring(0, 80) + '...',
    messages: state.messages,
    timestamp: Date.now(),
    count: state.messages.filter(m => m.role === 'user').length
  };
  if (idx >= 0) history[idx] = entry;
  else history.unshift(entry);
  DB.saveHistory(history.slice(0, 100));
}

function loadSidebarHistory() {
  if (!state.user || state.isGuest) {
    document.getElementById('sidebar-history').innerHTML = '<div style="padding:6px 10px;font-size:.78rem;color:var(--text-sub);">Sign in to save history</div>';
    return;
  }
  const history = DB.getHistory().filter(h => h.userEmail === state.user.email).slice(0, 6);
  const el = document.getElementById('sidebar-history');
  el.innerHTML = history.length
    ? history.map(h => `<button class="history-item" onclick="loadSession('${h.sessionId}')"><span class="history-item-dot"></span><span class="history-item-text">${h.title}</span></button>`).join('')
    : '<div style="padding:6px 10px;font-size:.78rem;color:var(--text-sub);">No history yet</div>';
}

function loadSession(sid) {
  const s = DB.getHistory().find(h => h.sessionId === sid);
  if (!s) return;
  const area = document.getElementById('messages-area');
  area.innerHTML = '';
  state.messages = [];
  s.messages.forEach(m => {
    appendMessage(m.role === 'user' ? 'user' : 'bot', m.content);
    state.messages.push(m);
  });
  state.sessionId = s.sessionId;
  showToast('Session loaded');
  closeHistory();
}

function openHistory() {
  if (!state.user || state.isGuest) {
    showToast('Sign in to view history');
    return;
  }
  renderHistoryPanel();
  document.getElementById('history-panel').classList.add('open');
  document.getElementById('backdrop').classList.add('show');
}
function closeHistory() {
  document.getElementById('history-panel').classList.remove('open');
  document.getElementById('backdrop').classList.remove('show');
}

function renderHistoryPanel(filter = '') {
  const history = DB.getHistory().filter(h => h.userEmail === state.user?.email);
  const filtered = filter ? history.filter(h => h.title.toLowerCase().includes(filter.toLowerCase())) : history;
  const el = document.getElementById('panel-list');
  if (!filtered.length) {
    el.innerHTML = `<div class="panel-empty"><div class="panel-empty-icon">&#128172;</div>${filter ? 'No results found' : 'No chat history yet.'}</div>`;
    return;
  }
  el.innerHTML = filtered.map(h => {
    const d = new Date(h.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    return `<div class="history-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;min-width:0;" onclick="loadSession('${h.sessionId}')">
          <div class="history-card-title">${h.title}</div>
          <div class="history-card-preview">${h.preview || ''}</div>
          <div class="history-card-meta"><span class="history-card-date">${d}</span><span class="history-card-count">${h.count} msgs</span></div>
        </div>
        <button onclick="deleteSession('${h.sessionId}')" style="background:none;border:none;color:var(--text-sub);cursor:pointer;font-size:1rem;padding:4px;flex-shrink:0;opacity:.6;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='.6'">&#128465;</button>
      </div>
    </div>`;
  }).join('');
}

function deleteSession(sid) {
  DB.saveHistory(DB.getHistory().filter(h => h.sessionId !== sid));
  renderHistoryPanel(document.getElementById('history-search').value);
  loadSidebarHistory();
  showToast('Chat deleted');
}

function filterHistory(v) {
  renderHistoryPanel(v);
}

function newChat() {
  document.getElementById('messages-area').innerHTML = mkWelcome('New Conversation', 'Ask me anything about MMCOE or any general topic!');
  state.messages = [];
  state.sessionId = 'session_' + Date.now();
  showToast('New chat started');
}

function clearChat() {
  if (state.messages.length === 0) return;
  if (confirm('Clear this conversation?')) newChat();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function toggleMobileSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  if (sb.classList.contains('mobile-open')) {
    sb.classList.remove('mobile-open');
    ov.classList.remove('show');
  } else {
    sb.classList.add('mobile-open');
    ov.classList.add('show');
  }
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('sidebar-overlay').classList.remove('show');
}

// GEMINI MODAL
function openGeminiModal() {
  const keyInput = document.getElementById('custom-gemini-key');
  keyInput.value = DB.getCustomGeminiKey();
  document.getElementById('gemini-modal').classList.add('show');
  document.getElementById('backdrop').classList.add('show');
}
function closeGeminiModal() {
  document.getElementById('gemini-modal').classList.remove('show');
  document.getElementById('backdrop').classList.remove('show');
}
function saveGeminiKey() {
  const key = document.getElementById('custom-gemini-key').value.trim();
  DB.saveCustomGeminiKey(key);
  showToast(key ? 'Custom Gemini key saved!' : 'Custom key cleared (using server key)');
  closeGeminiModal();
}

// ADMIN PANEL: CONNECTED TO BACKEND DATABASE
async function openAdminPanel() {
  if (!isAdmin()) {
    showToast('Access denied. Administrator only.');
    return;
  }
  document.getElementById('admin-panel').classList.add('open');
  document.getElementById('backdrop').classList.add('show');
  await fetchAndRenderAdminData();
}

function closeAdminPanel() {
  document.getElementById('admin-panel').classList.remove('open');
  document.getElementById('backdrop').classList.remove('show');
}

function switchAdminTab(tab) {
  state.adminActiveTab = tab;
  document.getElementById('admin-tab-users').classList.toggle('active', tab === 'users');
  document.getElementById('admin-tab-searches').classList.toggle('active', tab === 'searches');
  const input = document.getElementById('admin-search-input');
  input.placeholder = tab === 'users' ? 'Search by name, email, branch...' : 'Search queries by keyword, email, name...';
  renderAdminContent(input.value);
}

async function fetchAndRenderAdminData(filter = '') {
  const listEl = document.getElementById('admin-list');
  if (!filter && state.cachedAdminUsers.length === 0) {
    listEl.innerHTML = '<div style="text-align:center;padding:30px;color:var(--text-sub);">Loading data from database...</div>';
  }

  try {
    const res = await fetch('/api/admin/users');
    if (res.ok) {
      const data = await res.json();
      state.cachedAdminUsers = data.users || [];
      state.cachedAdminSearches = data.searchLogs || [];

      document.getElementById('stat-total').textContent = data.stats?.totalUsers || state.cachedAdminUsers.length;
      document.getElementById('stat-searches').textContent = data.stats?.totalSearches || state.cachedAdminSearches.length;
      document.getElementById('stat-active').textContent = data.stats?.activeLogins || 0;
      document.getElementById('tab-count-users').textContent = state.cachedAdminUsers.length;
      document.getElementById('tab-count-searches').textContent = state.cachedAdminSearches.length;
    }
  } catch (err) {
    console.warn('Could not fetch /api/admin/users:', err);
  }

  renderAdminContent(filter);
}

function renderAdminContent(filter = '') {
  if (state.adminActiveTab === 'searches') {
    renderAdminSearches(filter);
  } else {
    renderAdminUserList(filter);
  }
}

function renderAdminUserList(filter = '') {
  const el = document.getElementById('admin-list');
  const allUsers = state.cachedAdminUsers || [];

  const filtered = filter
    ? allUsers.filter(u =>
        (u.name && u.name.toLowerCase().includes(filter.toLowerCase())) ||
        (u.email && u.email.toLowerCase().includes(filter.toLowerCase())) ||
        (u.branch && u.branch.toLowerCase().includes(filter.toLowerCase())) ||
        (u.year && u.year.toLowerCase().includes(filter.toLowerCase()))
      )
    : allUsers;

  if (!filtered.length) {
    el.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text-sub);">${filter ? 'No users match filter.' : 'No registered users in database yet.'}</div>`;
    return;
  }

  el.innerHTML = filtered.map(u => {
    const joined = u.createdAt
      ? new Date(u.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      : 'N/A';
    const initials = (u.name || 'User').split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    const ip = u.signupIp || 'Unknown';
    const branch = u.branch || 'General';
    const year = u.year || 'Student';
    const phone = u.phone || 'N/A';
    const logins = u.loginCount || 1;

    return `<div style="background:rgba(255,255,255,0.04);border:1px solid var(--glass-border);border-radius:14px;padding:14px;margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,var(--gold),#e8a800);display:flex;align-items:center;justify-content:center;font-size:1.05rem;font-weight:700;color:#fff;flex-shrink:0;">${initials}</div>
        <div style="min-width:0;flex:1;">
          <div style="font-size:.95rem;font-weight:600;color:var(--text-main);display:flex;align-items:center;gap:6px;">
            ${u.name}
            <span style="font-size:.65rem;background:rgba(200,150,12,0.18);border:1px solid rgba(200,150,12,0.3);color:var(--gold-bright);padding:1px 6px;border-radius:4px;">${u.role || 'user'}</span>
          </div>
          <div style="font-size:.72rem;color:var(--text-sub);">Registered: ${joined}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <div style="grid-column:1/-1;background:rgba(255,255,255,0.04);border-radius:8px;padding:7px 10px;">
          <div style="font-size:.64rem;text-transform:uppercase;color:var(--text-sub);">EMAIL</div>
          <div style="font-size:.82rem;color:var(--gold-bright);word-break:break-all;">${u.email}</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:7px 10px;">
          <div style="font-size:.64rem;text-transform:uppercase;color:var(--text-sub);">BRANCH</div>
          <div style="font-size:.82rem;color:var(--text-main);">${branch}</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:7px 10px;">
          <div style="font-size:.64rem;text-transform:uppercase;color:var(--text-sub);">YEAR</div>
          <div style="font-size:.82rem;color:var(--text-main);">${year}</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:7px 10px;">
          <div style="font-size:.64rem;text-transform:uppercase;color:var(--text-sub);">PHONE</div>
          <div style="font-size:.82rem;color:var(--text-main);">${phone}</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:7px 10px;">
          <div style="font-size:.64rem;text-transform:uppercase;color:var(--text-sub);">LOGINS / IP</div>
          <div style="font-size:.78rem;color:var(--text-main);">${logins} logins &bull; ${ip}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderAdminSearches(filter = '') {
  const el = document.getElementById('admin-list');
  const allSearches = state.cachedAdminSearches || [];

  const filtered = filter
    ? allSearches.filter(s =>
        (s.query && s.query.toLowerCase().includes(filter.toLowerCase())) ||
        (s.userEmail && s.userEmail.toLowerCase().includes(filter.toLowerCase())) ||
        (s.userName && s.userName.toLowerCase().includes(filter.toLowerCase())) ||
        (s.source && s.source.toLowerCase().includes(filter.toLowerCase()))
      )
    : allSearches;

  if (!filtered.length) {
    el.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text-sub);">${filter ? 'No queries match filter.' : 'No user searches recorded in database yet.'}</div>`;
    return;
  }

  el.innerHTML = filtered.map(s => {
    const time = s.createdAt
      ? new Date(s.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
      : 'Just now';
    const sourceTag = s.source === 'gemini_ai'
      ? '<span style="font-size:.65rem;background:rgba(200,150,12,0.2);color:var(--gold-bright);border:1px solid rgba(200,150,12,0.4);padding:1px 6px;border-radius:4px;">✨ Gemini AI</span>'
      : '<span style="font-size:.65rem;background:rgba(72,187,120,0.18);color:#68D391;border:1px solid rgba(72,187,120,0.3);padding:1px 6px;border-radius:4px;">🏛️ MMCOE KB</span>';

    return `<div style="background:rgba(255,255,255,0.04);border:1px solid var(--glass-border);border-radius:12px;padding:12px;margin-bottom:10px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
        <div style="font-size:.76rem;color:var(--gold-bright);font-weight:600;">${esc(s.userName || 'Guest')} (${esc(s.userEmail || 'guest')})</div>
        <div style="font-size:.7rem;color:var(--text-sub);">${time}</div>
      </div>
      <div style="font-size:.88rem;color:var(--text-main);font-weight:500;margin-bottom:6px;word-break:break-word;">
        💬 "${esc(s.query)}"
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;font-size:.72rem;color:var(--text-sub);">
        <span>Branch: ${esc(s.userBranch || 'N/A')} &bull; ${esc(s.ip || 'Unknown')}</span>
        ${sourceTag}
      </div>
    </div>`;
  }).join('');
}

function filterAdminContent(val) {
  renderAdminContent(val);
}

// EXPORT TO CSV
function exportAdminData() {
  if (state.adminActiveTab === 'searches') {
    exportSearchesCSV();
  } else {
    exportUsersCSV();
  }
}

function exportUsersCSV() {
  if (!state.cachedAdminUsers || state.cachedAdminUsers.length === 0) {
    showToast('No user data to export');
    return;
  }
  const headers = ['ID', 'Full Name', 'Email', 'Role', 'Branch', 'Year', 'Phone', 'Signup IP', 'Login Count', 'Created At'];
  const rows = state.cachedAdminUsers.map(u => [
    u._id || '',
    `"${(u.name || '').replace(/"/g, '""')}"`,
    `"${(u.email || '').replace(/"/g, '""')}"`,
    u.role || 'user',
    `"${(u.branch || '').replace(/"/g, '""')}"`,
    `"${(u.year || '').replace(/"/g, '""')}"`,
    `"${(u.phone || '').replace(/"/g, '""')}"`,
    u.signupIp || '',
    u.loginCount || 1,
    u.createdAt ? new Date(u.createdAt).toISOString() : ''
  ]);

  downloadCSV(`mmcoe_users_${Date.now()}.csv`, headers, rows);
  showToast('Users exported to CSV');
}

function exportSearchesCSV() {
  if (!state.cachedAdminSearches || state.cachedAdminSearches.length === 0) {
    showToast('No search query data to export');
    return;
  }
  const headers = ['Timestamp', 'User Name', 'User Email', 'Branch', 'Year', 'Query Search', 'Response Source', 'IP Address'];
  const rows = state.cachedAdminSearches.map(s => [
    s.createdAt ? new Date(s.createdAt).toISOString() : '',
    `"${(s.userName || '').replace(/"/g, '""')}"`,
    `"${(s.userEmail || '').replace(/"/g, '""')}"`,
    `"${(s.userBranch || '').replace(/"/g, '""')}"`,
    `"${(s.userYear || '').replace(/"/g, '""')}"`,
    `"${(s.query || '').replace(/"/g, '""')}"`,
    s.source || '',
    s.ip || ''
  ]);

  downloadCSV(`mmcoe_search_queries_${Date.now()}.csv`, headers, rows);
  showToast('Search queries exported to CSV');
}

function downloadCSV(filename, headers, rows) {
  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Auto-restore session on page load
(function () {
  const s = DB.getSession();
  if (s && s.email && s.email !== 'guest') {
    state.user = s;
    state.isGuest = false;
    initChatScreen();
  }
})();
