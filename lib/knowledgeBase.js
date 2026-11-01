// Complete Hard-Coded Knowledge Base for MMCOE Pune (Extracted from https://mmcoe.edu.in)

const MMCOE_DATA = {
  college_overview: {
    fullName: "Marathwada Mitra Mandal's College of Engineering (MMCOE)",
    motto: "Yethe Bahutanche Hit (Welfare of the Masses)",
    trust: "Marathwada Mitra Mandal (Established in 1967 by Late Shri Shankarraoji Chavan, Former Home Minister, Govt. of India)",
    established: 2006,
    type: "Private Autonomous Engineering College",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    approvals: "AICTE New Delhi & DTE Maharashtra",
    dteCode: "EN6156 (Institute Code: 06156)",
    accreditation: "NAAC 'A++' Grade (Highest Grade in India with CGPA 3.53+) | NBA Accredited Branches",
    status: "UGC Autonomous Institute",
    campusArea: "Karve Nagar, Pune - 411052 (Green eco-friendly scenic hill campus)",
    principal: "Dr. Sachin R. Sakhare (Ph.D., M.E., B.E., Renowned Academician & Researcher)",
    president: "Shri Shivajirao Ganage",
    secretary: "Dr. N. V. Biradar",
    contact: {
      phone: ["020-25479811", "020-25479812"],
      helpline: ["7720097780", "7720097781"],
      email: ["principal@mmcoe.edu.in", "admissions@mmcoe.edu.in", "mmcoe@mmcoe.edu.in"],
      website: "https://mmcoe.edu.in",
      address: "Sr. No. 18, Plot No. 5/3, CTS No. 205, Vadar Vasti Road, Behind Vandevi Temple, Karve Nagar, Pune, Maharashtra - 411 052"
    }
  },

  departments: [
    {
      name: "Computer Engineering",
      code: "COMP",
      degree: "B.Tech, M.Tech, Ph.D.",
      intake: 120,
      hod: "Dr. Kalpana S. Thakre",
      hodDesignation: "Associate Professor & Head of Department",
      faculty: [
        { name: "Dr. Kalpana S. Thakre", designation: "Associate Professor & HOD", qualification: "Ph.D., M.Tech" },
        { name: "Dr. Sankirti S. Shiravale", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Dr. Smita Chaudhary", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Ms. Aishwarya S. Mane", designation: "Assistant Professor", qualification: "M.Tech" },
        { name: "Ms. Hema R. Karande", designation: "Assistant Professor", qualification: "M.E." },
        { name: "Ms. Mayuri Shelke", designation: "Assistant Professor", qualification: "M.Tech" },
        { name: "Dr. A. A. Deshmukh", designation: "Associate Professor", qualification: "Ph.D." },
        { name: "Mr. P. B. Kamble", designation: "Assistant Professor", qualification: "M.E." },
        { name: "Ms. P. S. Joshi", designation: "Assistant Professor", qualification: "M.Tech" },
        { name: "Ms. N. A. Kulkarni", designation: "Assistant Professor", qualification: "M.E." }
      ],
      labs: [
        "Artificial Intelligence & Machine Learning Lab",
        "High Performance & Cloud Computing Lab",
        "Data Analytics & Big Data Lab",
        "Software Engineering & Project Lab",
        "Operating Systems & Network Lab",
        "Cyber Security & Cryptography Lab"
      ],
      clubs: ["ACM Student Chapter", "Google Developer Student Club (GDSC)", "C-Cube Coding Club"]
    },
    {
      name: "Information Technology",
      code: "IT",
      degree: "B.Tech",
      intake: 120,
      hod: "Dr. Rupali M. Chopade",
      hodDesignation: "Associate Professor & Head of Department",
      faculty: [
        { name: "Dr. Rupali M. Chopade", designation: "Associate Professor & HOD", qualification: "Ph.D., M.E." },
        { name: "Dr. Bharati P. Vasgi", designation: "Associate Professor", qualification: "Ph.D., M.Tech" },
        { name: "Dr. V. S. Bidve", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Mr. Nikhil Dhavase", designation: "Assistant Professor", qualification: "M.Tech" },
        { name: "Ms. P. D. Shinde", designation: "Assistant Professor", qualification: "M.E." },
        { name: "Ms. S. K. Patil", designation: "Assistant Professor", qualification: "M.Tech" },
        { name: "Mr. R. G. Patil", designation: "Assistant Professor", qualification: "M.E." }
      ],
      labs: [
        "Full Stack Web Development Lab",
        "Information & Network Security Lab",
        "Cloud & DevOps Computing Lab",
        "Database Management Systems Lab",
        "Multimedia & Open Source Lab"
      ],
      clubs: ["ITSA (Information Technology Students Association)", "MSOC Open Source Club"]
    },
    {
      name: "Artificial Intelligence & Data Science",
      code: "AI&DS",
      degree: "B.Tech",
      intake: 120,
      hod: "Dr. Araddhana A. Deshmukh",
      hodDesignation: "Associate Professor & Head of Department",
      faculty: [
        { name: "Dr. Araddhana A. Deshmukh", designation: "Associate Professor & HOD", qualification: "Ph.D., M.E." },
        { name: "Dr. Vina M. Lomte", designation: "Associate Professor", qualification: "Ph.D., M.Tech" },
        { name: "Dr. Mandar Mokashi", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Dr. Sinu Nambiar", designation: "Assistant Professor", qualification: "Ph.D., M.Tech" },
        { name: "Ms. Sonali Potdar", designation: "Assistant Professor", qualification: "M.E." },
        { name: "Mr. Rishikesh Yeolekar", designation: "Assistant Professor", qualification: "M.Tech" },
        { name: "Mrs. Snehal Khajurgi", designation: "Assistant Professor", qualification: "M.E." }
      ],
      labs: [
        "Deep Learning & Neural Networks Lab",
        "Generative AI & Natural Language Processing Lab",
        "Computer Vision & Edge Computing Lab",
        "Data Science & Predictive Modeling Lab"
      ],
      clubs: ["AI Student Innovators Club", "DataX Society"]
    },
    {
      name: "Electronics & Telecommunication Engineering",
      code: "E&TC",
      degree: "B.Tech",
      intake: 120,
      hod: "Dr. G. S. Gawande",
      hodDesignation: "Associate Professor & Head of Department",
      faculty: [
        { name: "Dr. G. S. Gawande", designation: "Associate Professor & HOD", qualification: "Ph.D., M.E." },
        { name: "Dr. Archana B. Kanwade", designation: "Associate Professor", qualification: "Ph.D., M.Tech" },
        { name: "Dr. A. M. Bhatlawande", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Ms. H. N. Burande", designation: "Assistant Professor", qualification: "M.E." },
        { name: "Ms. M. R. Shinde", designation: "Assistant Professor", qualification: "M.Tech" },
        { name: "Mr. S. P. Pawar", designation: "Assistant Professor", qualification: "M.E." },
        { name: "Mr. V. D. Jadhav", designation: "Assistant Professor", qualification: "M.Tech" }
      ],
      labs: [
        "VLSI Design & Cadence Lab",
        "Embedded Systems, ARM & IoT Lab",
        "Microwave, Antenna & RF Engineering Lab",
        "Robotics, Automation & Drone System Lab",
        "Digital Signal Processing & Communication Lab"
      ],
      clubs: ["IEEE Student Branch", "Antrix Satellite & Electronics Club", "Robocon Club", "Drona Club"]
    },
    {
      name: "Mechanical Engineering",
      code: "MECH",
      degree: "B.Tech, Ph.D. Research Centre",
      intake: 60,
      hod: "Dr. Vikas R. Deulgaonkar",
      hodDesignation: "Professor & Head of Department",
      faculty: [
        { name: "Dr. Vikas R. Deulgaonkar", designation: "Professor & HOD", qualification: "Ph.D., M.E." },
        { name: "Dr. P. K. Katare", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Dr. A. B. Gholap", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Dr. V. W. Bhatkar", designation: "Associate Professor", qualification: "Ph.D., M.Tech" },
        { name: "Dr. R. S. Yadav", designation: "Assistant Professor", qualification: "Ph.D." },
        { name: "Dr. R. N. Todkar", designation: "Assistant Professor", qualification: "Ph.D." },
        { name: "Dr. S. S. Lahane", designation: "Assistant Professor", qualification: "Ph.D." },
        { name: "Dr. S. S. Kirpekar", designation: "Assistant Professor", qualification: "Ph.D." },
        { name: "Dr. M. D. Joshi", designation: "Assistant Professor", qualification: "Ph.D." }
      ],
      labs: [
        "Center of Excellence CAD/CAM/CAE (SolidWorks, ANSYS, Siemens NX)",
        "Mechatronics & Industrial Robotics Lab",
        "3D Printing & Additive Manufacturing Facility",
        "IC Engines & Electric Vehicle (EV) Testing Lab",
        "Fluid Mechanics & Heat Transfer Lab",
        "Advanced CNC Workshop & Metrology Lab"
      ],
      clubs: ["Baja SAE India Club", "Supra SAE Formula Racing", "MESA (Mechanical Engineering Students Association)"]
    },
    {
      name: "Electrical Engineering",
      code: "ELECT",
      degree: "B.Tech",
      intake: 60,
      hod: "Dr. Haripriya H. Kulkarni",
      hodDesignation: "Associate Professor & Head of Department",
      faculty: [
        { name: "Dr. Haripriya H. Kulkarni", designation: "Associate Professor & HOD", qualification: "Ph.D., M.E." },
        { name: "Dr. Anand V. Satpute", designation: "Associate Professor", qualification: "Ph.D., M.Tech" },
        { name: "Dr. Vilas S. Bugade", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Dr. A. R. Soman", designation: "Associate Professor", qualification: "Ph.D., M.E." },
        { name: "Dr. V. N. Gohokar", designation: "Professor", qualification: "Ph.D., M.E." },
        { name: "Ms. Sunita A. Upasani", designation: "Assistant Professor", qualification: "M.E." },
        { name: "Mr. Akshay M. Suryawanshi", designation: "Assistant Professor", qualification: "M.Tech" },
        { name: "Ms. Christina P. Thottan", designation: "Assistant Professor", qualification: "M.E." },
        { name: "Mr. Ajay K. Lohate", designation: "Assistant Professor", qualification: "M.Tech" }
      ],
      labs: [
        "Electric Vehicle Technology & Battery Management Lab",
        "Power Electronics & Smart Grid Lab",
        "Renewable Energy & Solar Photovoltaic Lab",
        "Industrial Automation, PLC & SCADA Lab",
        "Electrical Machines & High Voltage Lab"
      ],
      clubs: ["EESA (Electrical Engineering Students Association)", "Energy Conservation Club"]
    },
    {
      name: "Department of Engineering Sciences & Humanities (First Year / FE)",
      code: "FE",
      degree: "Foundational First Year B.Tech",
      intake: 600,
      hod: "Dr. V. N. Patil",
      hodDesignation: "Associate Professor & Head of FE Department",
      faculty: [
        { name: "Dr. V. N. Patil", designation: "Associate Professor & Head", subject: "Engineering Chemistry" },
        { name: "Ms. M. S. Taware", designation: "Assistant Professor", subject: "Engineering Physics" },
        { name: "Mr. A. N. Bochare", designation: "Assistant Professor", subject: "Engineering Physics" },
        { name: "Dr. K. S. Dhabekar", designation: "Assistant Professor", subject: "Engineering Physics" },
        { name: "Dr. Dipmala Sali", designation: "Assistant Professor", subject: "Engineering Physics" },
        { name: "Mrs. Uma Thakur", designation: "Assistant Professor", subject: "Engineering Physics" },
        { name: "Dr. K. N. Handore", designation: "Assistant Professor", subject: "Engineering Chemistry" },
        { name: "Mr. P. P. Yenare", designation: "Assistant Professor", subject: "Engineering Chemistry" },
        { name: "Dr. Poonam Kaswan", designation: "Assistant Professor", subject: "Engineering Chemistry" },
        { name: "Ms. D. M. Kulkarni", designation: "Assistant Professor", subject: "Engineering Chemistry" },
        { name: "Ms. A. G. Joshi", designation: "Assistant Professor", subject: "Engineering Mathematics" },
        { name: "Ms. D. S. Sisodia", designation: "Assistant Professor", subject: "Engineering Mathematics" },
        { name: "Ms. V. Y. Shinde", designation: "Assistant Professor", subject: "Engineering Mathematics" },
        { name: "Mr. A. S. Shinde", designation: "Assistant Professor", subject: "Engineering Mathematics" },
        { name: "Ms. D. R. Sangpal", designation: "Assistant Professor", subject: "Engineering Mathematics" },
        { name: "Mr. S. L. Karche", designation: "Assistant Professor", subject: "Engineering Mechanics / Civil" },
        { name: "Mr. R. B. Kamble", designation: "Assistant Professor", subject: "Engineering Mechanics / Civil" },
        { name: "Ms. S. A. Mashalkar", designation: "Assistant Professor", subject: "Engineering Mechanics / Civil" },
        { name: "Ms. S. D. Kar", designation: "Assistant Professor", subject: "Engineering Mechanics / Civil" }
      ],
      labs: [
        "Engineering Physics Lab",
        "Engineering Chemistry Lab",
        "Basic Electrical & Electronics Lab",
        "Engineering Mechanics Lab",
        "Language & Communication Skills Lab",
        "Central Computing Center"
      ]
    },
    {
      name: "Master of Business Administration (MBA)",
      code: "MBA",
      degree: "Postgraduate MBA (2 Years Full-Time)",
      intake: 60,
      hod: "Dr. Roopa G. Kulkarni",
      hodDesignation: "HOD & Associate Professor (Management Studies)",
      faculty: [
        { name: "Dr. Roopa G. Kulkarni", designation: "Associate Professor & Head", qualification: "Ph.D., MBA" },
        { name: "Dr. P. S. Joshi", designation: "Assistant Professor", qualification: "Ph.D., MBA" },
        { name: "Mr. A. M. Deshpande", designation: "Assistant Professor", qualification: "MBA" }
      ],
      specializations: ["Marketing Management", "Financial Management", "Human Resource Management", "Operations & Supply Chain", "Business Analytics"],
      intakeFees: "Total fees approx Rs. 1.08 Lakhs - 1.25 Lakhs / year"
    }
  ]
};

// Render helpers for generating comprehensive answers
const KB_RESPONSES = {
  about: `
    <div class="rs"><span class="rt">🏛️ About MMCOE, Pune</span>
    <ul class="rl">
      <li><span class="hl">Full Name:</span> Marathwada Mitra Mandal's College of Engineering (MMCOE)</li>
      <li><span class="hl">Trust:</span> Marathwada Mitra Mandal, founded in 1967 by Late Shri Shankarraoji Chavan (Former Home Minister, Govt. of India). Motto: <em>"Yethe Bahutanche Hit"</em> (Welfare of the Masses)</li>
      <li><span class="hl">Location:</span> Sr. No. 18, Plot 5/3, CTS 205, Vadar Vasti Rd, behind Vandevi Temple, Karve Nagar, Pune, Maharashtra - 411 052</li>
      <li><span class="hl">Established:</span> 2006</li>
      <li><span class="hl">Principal:</span> Dr. Sachin R. Sakhare</li>
      <li><span class="hl">Status:</span> UGC Autonomous Engineering College</li>
      <li><span class="hl">Affiliation:</span> Savitribai Phule Pune University (SPPU)</li>
      <li><span class="hl">Accreditation:</span> NAAC Grade 'A++' (Highest Grade in India with CGPA 3.53+) | NBA Accredited Branches</li>
      <li><span class="hl">Approvals:</span> AICTE New Delhi & DTE Maharashtra (Institute Code: 06156 / EN6156)</li>
      <li><span class="hl">Official Website:</span> <a href="https://mmcoe.edu.in" target="_blank" style="color:var(--gold-bright);text-decoration:underline;">mmcoe.edu.in</a></li>
    </ul></div>
    <div class="note">⭐ MMCOE is recognized as one of the premier autonomous engineering institutions in Maharashtra, renowned for excellent academic rigor, cutting-edge research, and top-tier placements.</div>
  `,

  faculty: `
    <div class="rs"><span class="rt">👨‍🏫 MMCOE Leadership & Heads of Departments (HODs)</span>
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
    <div class="note">💡 Tip: You can ask specifically about any branch (e.g. <em>"Computer faculty"</em>, <em>"IT teachers"</em>, <em>"Mechanical faculty"</em>) to see the full list of professors!</div>
  `,

  faculty_comp: `
    <div class="rs"><span class="rt">💻 Computer Engineering Faculty Roster</span>
    <ul class="rl">
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
    </ul></div>
    <div class="note">Intake: 120 B.Tech seats + 18 M.Tech seats + Ph.D. Research Center. Advanced labs in AI/ML, Cloud Computing, and Cybersecurity.</div>
  `,

  faculty_it: `
    <div class="rs"><span class="rt">🖥️ Information Technology Faculty Roster</span>
    <ul class="rl">
      <li><span class="hl">Dr. Rupali M. Chopade</span> - Associate Professor & HOD (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. Bharati P. Vasgi</span> - Associate Professor (Ph.D., M.Tech)</li>
      <li><span class="hl">Dr. V. S. Bidve</span> - Associate Professor (Ph.D., M.E.)</li>
      <li><span class="hl">Mr. Nikhil Dhavase</span> - Assistant Professor (M.Tech)</li>
      <li><span class="hl">Ms. P. D. Shinde</span> - Assistant Professor (M.E.)</li>
      <li><span class="hl">Ms. S. K. Patil</span> - Assistant Professor (M.Tech)</li>
      <li><span class="hl">Mr. R. G. Patil</span> - Assistant Professor (M.E.)</li>
    </ul></div>
    <div class="note">Intake: 120 B.Tech seats. Key focus on Full-Stack Development, Cyber Security, Cloud Computing, and DevOps.</div>
  `,

  faculty_aids: `
    <div class="rs"><span class="rt">🤖 AI & Data Science Faculty Roster</span>
    <ul class="rl">
      <li><span class="hl">Dr. Araddhana A. Deshmukh</span> - Associate Professor & HOD (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. Vina M. Lomte</span> - Associate Professor (Ph.D., M.Tech)</li>
      <li><span class="hl">Dr. Mandar Mokashi</span> - Associate Professor (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. Sinu Nambiar</span> - Assistant Professor (Ph.D., M.Tech)</li>
      <li><span class="hl">Ms. Sonali Potdar</span> - Assistant Professor (M.E.)</li>
      <li><span class="hl">Mr. Rishikesh Yeolekar</span> - Assistant Professor (M.Tech)</li>
      <li><span class="hl">Mrs. Snehal Khajurgi</span> - Assistant Professor (M.E.)</li>
    </ul></div>
    <div class="note">Intake: 120 B.Tech seats. Specialization in Deep Learning, Large Language Models (LLMs), Computer Vision, and Predictive Analytics.</div>
  `,

  faculty_entc: `
    <div class="rs"><span class="rt">📡 Electronics & Telecommunication (E&TC) Faculty Roster</span>
    <ul class="rl">
      <li><span class="hl">Dr. G. S. Gawande</span> - Associate Professor & HOD (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. Archana B. Kanwade</span> - Associate Professor (Ph.D., M.Tech)</li>
      <li><span class="hl">Dr. A. M. Bhatlawande</span> - Associate Professor (Ph.D., M.E.)</li>
      <li><span class="hl">Ms. H. N. Burande</span> - Assistant Professor (M.E.)</li>
      <li><span class="hl">Ms. M. R. Shinde</span> - Assistant Professor (M.Tech)</li>
      <li><span class="hl">Mr. S. P. Pawar</span> - Assistant Professor (M.E.)</li>
      <li><span class="hl">Mr. V. D. Jadhav</span> - Assistant Professor (M.Tech)</li>
    </ul></div>
    <div class="note">Intake: 120 B.Tech seats. Advanced labs in VLSI design, Embedded Systems & IoT, Microwave Antenna, and Robotics.</div>
  `,

  faculty_mech: `
    <div class="rs"><span class="rt">⚙️ Mechanical Engineering Faculty Roster</span>
    <ul class="rl">
      <li><span class="hl">Dr. Vikas R. Deulgaonkar</span> - Professor & HOD (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. P. K. Katare</span> - Associate Professor (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. A. B. Gholap</span> - Associate Professor (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. V. W. Bhatkar</span> - Associate Professor (Ph.D., M.Tech)</li>
      <li><span class="hl">Dr. R. S. Yadav</span> - Assistant Professor (Ph.D.)</li>
      <li><span class="hl">Dr. R. N. Todkar</span> - Assistant Professor (Ph.D.)</li>
      <li><span class="hl">Dr. S. S. Lahane</span> - Assistant Professor (Ph.D.)</li>
      <li><span class="hl">Dr. S. S. Kirpekar</span> - Assistant Professor (Ph.D.)</li>
      <li><span class="hl">Dr. M. D. Joshi</span> - Assistant Professor (Ph.D.)</li>
    </ul></div>
    <div class="note">Intake: 60 B.Tech seats + Ph.D. Research Center. Centers of Excellence in CAD/CAM/CAE, 3D Printing, EV Testing, and Industrial Robotics. Home to BAJA & SUPRA racing teams.</div>
  `,

  faculty_elect: `
    <div class="rs"><span class="rt">⚡ Electrical Engineering Faculty Roster</span>
    <ul class="rl">
      <li><span class="hl">Dr. Haripriya H. Kulkarni</span> - Associate Professor & HOD (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. Anand V. Satpute</span> - Associate Professor (Ph.D., M.Tech)</li>
      <li><span class="hl">Dr. Vilas S. Bugade</span> - Associate Professor (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. A. R. Soman</span> - Associate Professor (Ph.D., M.E.)</li>
      <li><span class="hl">Dr. V. N. Gohokar</span> - Professor (Ph.D., M.E.)</li>
      <li><span class="hl">Ms. Sunita A. Upasani</span> - Assistant Professor (M.E.)</li>
      <li><span class="hl">Mr. Akshay M. Suryawanshi</span> - Assistant Professor (M.Tech)</li>
      <li><span class="hl">Ms. Christina P. Thottan</span> - Assistant Professor (M.E.)</li>
      <li><span class="hl">Mr. Ajay K. Lohate</span> - Assistant Professor (M.Tech)</li>
    </ul></div>
    <div class="note">Intake: 60 B.Tech seats. Cutting-edge labs in Electric Vehicle (EV) Powertrains, Solar Energy, Power Electronics, and PLC/SCADA Automation.</div>
  `,

  faculty_fe: `
    <div class="rs"><span class="rt">📐 First Year (Engineering Sciences & Humanities) Faculty</span>
    <ul class="rl">
      <li><span class="hl">Dr. V. N. Patil</span> - Associate Professor & Head of Department (Chemistry)</li>
      <li><span class="hl">Physics Faculty:</span> Ms. M. S. Taware, Mr. A. N. Bochare, Dr. K. S. Dhabekar, Dr. Dipmala Sali, Mrs. Uma Thakur</li>
      <li><span class="hl">Chemistry Faculty:</span> Dr. K. N. Handore, Mr. P. P. Yenare, Dr. Poonam Kaswan, Ms. D. M. Kulkarni</li>
      <li><span class="hl">Mathematics Faculty:</span> Ms. A. G. Joshi, Ms. D. S. Sisodia, Ms. V. Y. Shinde, Mr. A. S. Shinde, Ms. D. R. Sangpal</li>
      <li><span class="hl">Civil & Mechanics Faculty:</span> Mr. S. L. Karche, Mr. R. B. Kamble, Ms. S. A. Mashalkar, Ms. S. D. Kar</li>
    </ul></div>
    <div class="note">Equipped with dedicated physics, chemistry, basic electrical, and mechanics labs, plus soft skills language training laboratories.</div>
  `,

  courses: `
    <div class="rs"><span class="rt">📚 Degree Programs Offered at MMCOE</span>
    <table class="rtb">
      <tr><th>Course / Branch</th><th>Duration</th><th>Intake</th><th>Status</th></tr>
      <tr><td>Computer Engineering (B.Tech)</td><td>4 Years</td><td>120</td><td>NBA Accredited</td></tr>
      <tr><td>Information Technology (B.Tech)</td><td>4 Years</td><td>120</td><td>NBA Accredited</td></tr>
      <tr><td>AI & Data Science (B.Tech)</td><td>4 Years</td><td>120</td><td>Autonomous</td></tr>
      <tr><td>Electronics & Telecom (B.Tech)</td><td>4 Years</td><td>120</td><td>NBA Accredited</td></tr>
      <tr><td>Electrical Engineering (B.Tech)</td><td>4 Years</td><td>60</td><td>NBA Accredited</td></tr>
      <tr><td>Mechanical Engineering (B.Tech)</td><td>4 Years</td><td>60</td><td>NBA Accredited</td></tr>
      <tr><td>MBA (Master of Business Admin)</td><td>2 Years</td><td>60</td><td>AICTE / SPPU</td></tr>
      <tr><td>M.Tech in Computer Engineering</td><td>2 Years</td><td>18</td><td>SPPU Affiliated</td></tr>
      <tr><td>Ph.D. Research Centers</td><td>3-5 Years</td><td>Research</td><td>Comp & Mech</td></tr>
    </table></div>
    <div class="note">📌 Total Undergraduate Intake: 600 seats. Direct Second Year (DSY) lateral entry available for Diploma holders.</div>
  `,

  fees: `
    <div class="rs"><span class="rt">💰 B.Tech Fee Structure for AY 2026-27 (Approved by FRA)</span>
    <table class="rtb">
      <tr><th>Category</th><th>Tuition Fee</th><th>Dev Fee</th><th>Total Annual Fee (Approx)</th></tr>
      <tr><td><strong>Open / General Category</strong></td><td>Rs. 1,27,826</td><td>Rs. 17,674</td><td><strong>Rs. 1,45,500</strong></td></tr>
      <tr><td><strong>OBC / EWS / SEBC Category</strong></td><td>Rs. 63,913</td><td>Rs. 17,674</td><td><strong>Rs. 81,587</strong></td></tr>
      <tr><td><strong>VJ / NT / SBC / TFWS</strong></td><td>Rs. 0 (100% Free)</td><td>Rs. 17,674</td><td><strong>Rs. 17,674</strong></td></tr>
      <tr><td><strong>SC / ST Category</strong></td><td>Rs. 0 (Fully Waived)</td><td>Rs. 0 (Waived)</td><td><strong>Rs. 4,500 - 5,000 (Misc)</strong></td></tr>
      <tr><td><strong>J&K / North-East PMSSS</strong></td><td>Govt Quota</td><td>Nominal</td><td><strong>Rs. 34,000</strong></td></tr>
    </table></div>
    <div class="rs"><span class="rt">🏨 Hostel & Mess Charges</span>
    <ul class="rl">
      <li><strong>Annual Hostel Fee:</strong> ~Rs. 1,07,000/year (including 3-time mess, breakfast, Wi-Fi, electricity, 24/7 security)</li>
      <li><strong>Refundable Caution Deposit:</strong> Rs. 10,000 (One-time)</li>
    </ul></div>
    <div class="note">⚠️ Fee concessions are subject to submission of valid income/caste certificates on MahaDBT portal. College Helpline: <strong>020-25479811</strong></div>
  `,

  admission: `
    <div class="rs"><span class="rt">📋 Admission Process for MMCOE B.Tech</span>
    <ul class="rl">
      <li><span class="hl">Entrance Exams:</span> MHT-CET (Maharashtra Candidates) or JEE Main (All India Seats)</li>
      <li><span class="hl">Counseling Authority:</span> State Common Entrance Test Cell (State CET Cell Maharashtra)</li>
      <li><span class="hl">Official Portal:</span> <a href="https://cetcell.mahacet.org" target="_blank" style="color:var(--gold-bright);">cetcell.mahacet.org</a></li>
      <li><span class="hl">Institute Code:</span> <strong>EN6156 / 06156</strong></li>
      <li><span class="hl">Process:</span> Centralized Admission Process (CAP) Rounds 1, 2, 3, 4 followed by institutional spot rounds</li>
      <li><span class="hl">Direct 2nd Year (DSY):</span> Available for Diploma in Engineering holders via CAP DSY portal</li>
    </ul></div>
    <div class="rs"><span class="rt">✅ Eligibility Criteria</span>
    <ul class="rl">
      <li>HSC (12th Science) passed with Physics and Mathematics along with Chemistry / Biotechnology / Biology / Technical Vocational</li>
      <li>Minimum <strong>45% marks</strong> in PCM for General Category (<strong>40% marks</strong> for Reserved categories from Maharashtra)</li>
      <li>Non-zero positive score in MHT-CET or JEE Main Paper 1</li>
    </ul></div>
    <div class="note">📞 MMCOE Admission Counseling Desk: <strong>020-25479811 / 7720097780</strong></div>
  `,

  cutoff: `
    <div class="rs"><span class="rt">📊 MHT-CET Cutoff Percentiles (CAP Round IV Final)</span>
    <table class="rtb">
      <tr><th>Branch</th><th>Open (GOPEN)</th><th>OBC (GOBC)</th><th>TFWS</th><th>JEE Main</th></tr>
      <tr><td>Computer Engineering</td><td>98.83 %ile</td><td>95.23 %ile</td><td>98.92 %ile</td><td>89.75 %ile</td></tr>
      <tr><td>Information Technology</td><td>95.50 %ile</td><td>94.34 %ile</td><td>96.80 %ile</td><td>88.53 %ile</td></tr>
      <tr><td>AI & Data Science</td><td>96.22 %ile</td><td>94.09 %ile</td><td>96.45 %ile</td><td>88.06 %ile</td></tr>
      <tr><td>Electronics & Telecom (E&TC)</td><td>95.62 %ile</td><td>93.10 %ile</td><td>95.12 %ile</td><td>85.96 %ile</td></tr>
      <tr><td>Electrical Engineering</td><td>93.27 %ile</td><td>87.92 %ile</td><td>91.80 %ile</td><td>80.45 %ile</td></tr>
      <tr><td>Mechanical Engineering</td><td>95.07 %ile</td><td>86.34 %ile</td><td>90.40 %ile</td><td>75.71 %ile</td></tr>
    </table></div>
    <div class="note">⚠️ Cutoff marks fluctuate slightly each year based on applicant pool and seat vacancies. Check live CAP cutoffs on cetcell.mahacet.org.</div>
  `,

  placements: `
    <div class="rs"><span class="rt">💼 MMCOE Placement Statistics & Highlights</span>
    <ul class="rl">
      <li><span class="hl">Highest International Package:</span> <strong>Rs. 25 LPA</strong></li>
      <li><span class="hl">Highest Domestic Package:</span> <strong>Rs. 10.5 LPA - 12 LPA</strong></li>
      <li><span class="hl">Average Package:</span> <strong>Rs. 4.0 - 5.0 LPA</strong></li>
      <li><span class="hl">Recruiting Companies:</span> 200+ top multinational and core engineering companies visit annually</li>
      <li><span class="hl">Placement Support:</span> Dedicated Training & Placement Cell (T&P), aptitude workshops, mock technical interviews, hackathons, and corporate mentorship</li>
    </ul></div>
    <div class="rs"><span class="rt">🏆 Top Recruiters</span>
    <div>
      <span class="bdg">TCS</span><span class="bdg">Infosys</span><span class="bdg">Wipro</span><span class="bdg">Cognizant</span>
      <span class="bdg">Capgemini</span><span class="bdg">Persistent Systems</span><span class="bdg">L&T Infotech</span>
      <span class="bdg">Tech Mahindra</span><span class="bdg">Mercedes-Benz R&D</span><span class="bdg">Cummins India</span>
      <span class="bdg">Bharat Forge</span><span class="bdg">Veritas Technologies</span><span class="bdg">FIS</span>
      <span class="bdg">Zensar</span><span class="bdg">Hexaware</span><span class="bdg">KPIT Technologies</span><span class="bdg">Accenture</span>
    </div></div>
  `,

  scholarships: `
    <div class="rs"><span class="rt">🎓 Scholarships & Financial Aid at MMCOE</span>
    <ul class="rl">
      <li><span class="hl">Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC):</span> 50% Tuition Fee Concession for Open/General students with annual family income &lt; Rs. 8 Lakhs.</li>
      <li><span class="hl">TFWS (Tuition Fee Waiver Scheme):</span> 100% Tuition Fee waived for meritorious students under CAP quota.</li>
      <li><span class="hl">OBC / VJ / NT / SBC Scholarships:</span> 50% to 100% tuition concession through Maharashtra Govt.</li>
      <li><span class="hl">SC / ST Post-Matric Scholarship:</span> 100% tuition and examination fee covered by Social Welfare Dept.</li>
      <li><span class="hl">Dr. Panjabrao Deshmukh Hostel Allowance:</span> Rs. 30,000/year hostel assistance for rural/farmer children.</li>
      <li><span class="hl">Minority Scholarship:</span> For Muslim, Christian, Buddhist, Jain, Sikh, Parsi students.</li>
    </ul></div>
    <div class="note">📌 Apply via the official Maharashtra Government Portal: <a href="https://mahadbt.maharashtra.gov.in" target="_blank" style="color:var(--gold-bright);">mahadbt.maharashtra.gov.in</a></div>
  `,

  facilities: `
    <div class="rs"><span class="rt">🏢 Campus Infrastructure & Facilities</span>
    <ul class="rl">
      <li><span class="hl">Smart Classrooms:</span> Fully air-conditioned, multimedia projectors, interactive smart boards, audio systems</li>
      <li><span class="hl">Central Library:</span> Over 30,000+ books, IEEE Xplore, ScienceDirect, DELNET e-journals, 24/7 air-conditioned reading hall</li>
      <li><span class="hl">Computing & Wi-Fi:</span> 1000+ high-end computers, gigabit campus-wide optical fiber Wi-Fi</li>
      <li><span class="hl">Auditorium & Halls:</span> 800+ seater acoustically designed auditorium and multiple seminar halls</li>
      <li><span class="hl">Innovation & TBI:</span> Technology Business Incubator (TBI) & Entrepreneurship Development Cell (EDC) to fund student startups</li>
      <li><span class="hl">Sports & Gym:</span> Cricket ground, basketball court, volleyball court, table tennis, badminton, chess, well-equipped gymnasium</li>
      <li><span class="hl">Cafeteria:</span> Clean and hygienic multi-cuisine canteen serving nutritious meals, snacks, and beverages</li>
      <li><span class="hl">Medical & ATM:</span> On-campus primary health dispensary and 24/7 ATM facility</li>
    </ul></div>
  `,

  hostel: `
    <div class="rs"><span class="rt">🏡 MMCOE Hostel & Accommodation</span>
    <ul class="rl">
      <li><span class="hl">Girls Hostel:</span> Situated safely inside the college campus with biometric security</li>
      <li><span class="hl">Boys Hostel:</span> One block situated on-campus, second wing in close walking proximity to campus</li>
      <li><span class="hl">Capacity:</span> Accommodates over 450+ students</li>
      <li><span class="hl">Annual Fees:</span> Approx Rs. 1,07,000 per academic year (includes lodging, electricity, hot water, and 4-time hygienic mess meals)</li>
      <li><span class="hl">Security & Amenities:</span> 24/7 CCTV surveillance, warden supervision, high-speed Wi-Fi, study tables, laundry service, purified RO drinking water</li>
    </ul></div>
    <div class="note">For room reservations and availability queries: Contact Rector Office at <strong>020-25479811</strong></div>
  `,

  clubs_events: `
    <div class="rs"><span class="rt">🎉 Student Clubs, Fests & Extracurriculars</span>
    <ul class="rl">
      <li><span class="hl">Annual Cultural Fest:</span> <strong>Ensemble</strong> (Inter-college dance, music, drama, fashion show, celebrity night)</li>
      <li><span class="hl">National Technical Fest:</span> <strong>Technotsav / Udaan</strong> (State-level mega project competition & paper presentation)</li>
      <li><span class="hl">Robocon Club:</span> Competitive national robotics team participating in ABU Asia-Pacific Robot Contest</li>
      <li><span class="hl">Google Developer Student Club (GDSC):</span> Student tech community organizing workshops on Android, Cloud, AI</li>
      <li><span class="hl">ACM Student Chapter:</span> Association for Computing Machinery student body hosting global coding competitions</li>
      <li><span class="hl">IEEE Student Branch:</span> International professional society for electronics and electrical engineering research</li>
      <li><span class="hl">Antrix Club:</span> Satellite building, astronomy, and advanced electronics</li>
      <li><span class="hl">BAJA & SUPRA Racing:</span> Formula student motorsport engineering teams building all-terrain and race vehicles</li>
      <li><span class="hl">Drona Club:</span> Drone design, aerial photography, and UAV research</li>
      <li><span class="hl">NSS & NCC:</span> National Service Scheme & National Cadet Corps fostering social service and leadership</li>
    </ul></div>
  `,

  documents: `
    <div class="rs"><span class="rt">📑 Documents Required for MMCOE B.Tech Admission</span>
    <ul class="rl">
      <li>SSC (10th) Marksheet & Passing Certificate</li>
      <li>HSC (12th) Marksheet & Passing Certificate</li>
      <li>MHT-CET or JEE Main Official Scorecard</li>
      <li>School / College Leaving Certificate (Transfer Certificate / LC)</li>
      <li>Indian Nationality and Domicile Certificate of Maharashtra</li>
      <li>Caste Certificate (For SC / ST / VJ / NT / OBC / SBC candidates)</li>
      <li>Caste Validity Certificate (Mandatory for reserved category admission)</li>
      <li>Non-Creamy Layer Certificate (Valid for current AY for OBC, NT, SBC candidates)</li>
      <li>Income Certificate issued by Tahsildar (For EBC, TFWS, and scholarship applicants)</li>
      <li>EWS Eligibility Certificate (If admitted under Economically Weaker Section)</li>
      <li>Aadhar Card & PAN Card photocopy</li>
      <li>Passport size color photographs (8 copies)</li>
      <li>Migration Certificate & Gap Certificate (If applicable)</li>
    </ul></div>
    <div class="note">⚠️ Bring 1 original set + 3 sets of self-attested photocopies during physical admission verification.</div>
  `,

  contact: `
    <div class="rs"><span class="rt">📞 MMCOE Contact Information & Directions</span>
    <ul class="rl">
      <li><span class="hl">Address:</span> Sr. No. 18, Plot No. 5/3, CTS No. 205, Vadar Vasti Road, Behind Vandevi Temple, Karve Nagar, Pune, Maharashtra - 411 052</li>
      <li><span class="hl">Landmark:</span> Near Vandevi Temple & Cummins College Road, Karve Nagar</li>
      <li><span class="hl">Phone Numbers:</span> 020-25479811, 020-25479812</li>
      <li><span class="hl">Mobile Helpline:</span> 7720097780 / 7720097781</li>
      <li><span class="hl">Principal Email:</span> <a href="mailto:principal@mmcoe.edu.in" style="color:var(--gold-bright);">principal@mmcoe.edu.in</a></li>
      <li><span class="hl">Admission Email:</span> <a href="mailto:admissions@mmcoe.edu.in" style="color:var(--gold-bright);">admissions@mmcoe.edu.in</a></li>
      <li><span class="hl">Official Website:</span> <a href="https://mmcoe.edu.in" target="_blank" style="color:var(--gold-bright);">https://mmcoe.edu.in</a></li>
      <li><span class="hl">DTE Code:</span> EN6156</li>
      <li><span class="hl">Office Working Hours:</span> Monday to Saturday: 9:00 AM – 5:30 PM (Sunday closed)</li>
      <li><span class="hl">How to Reach:</span>
        <br>&bull; Pune Railway Station: ~11 km (PMPML buses & autorickshaws available)
        <br>&bull; Shivajinagar Bus Stand: ~9 km
        <br>&bull; Swargate Bus Stand: ~7 km
        <br>&bull; Pune Metro: Accessible via Vanaz / Ideal Colony Metro Stations (~3.5 km)
      </li>
    </ul></div>
  `,

  naac: `
    <div class="rs"><span class="rt">🏅 Accreditation, Autonomous Status & Rankings</span>
    <ul class="rl">
      <li><span class="hl">NAAC Accreditation:</span> <strong>Grade A++</strong> (Highest grade awarded by National Assessment and Accreditation Council, score 3.53/4.0)</li>
      <li><span class="hl">NBA Accreditation:</span> Programs in Computer, IT, E&TC, Electrical, and Mechanical are accredited by the National Board of Accreditation</li>
      <li><span class="hl">UGC Autonomous Status:</span> Conferred autonomy under UGC and Savitribai Phule Pune University (SPPU), granting freedom to design industry-relevant syllabus and rapid exam results</li>
      <li><span class="hl">AICTE Approved:</span> All B.Tech, M.Tech, and MBA programs approved by All India Council for Technical Education, New Delhi</li>
      <li><span class="hl">DTE Approved:</span> Approved by Directorate of Technical Education, Government of Maharashtra (Choice Code: 6156)</li>
    </ul></div>
  `
};

// Search router for finding matching answers
function matchCollegeKnowledge(query) {
  if (!query) return null;
  const q = query.toLowerCase().trim();

  // Faculty specific matches
  if (
    q.includes('comp') && (q.includes('facult') || q.includes('teacher') || q.includes('prof') || q.includes('hod') || q.includes('staff')) ||
    q.includes('computer faculty') || q.includes('kalpana thakre') || q.includes('shiravale')
  ) {
    return { title: 'Computer Engineering Faculty', html: KB_RESPONSES.faculty_comp };
  }

  if (
    q.includes('it facult') || q.includes('information technology facult') || q.includes('it teacher') ||
    q.includes('rupali chopade') || q.includes('vasgi') || q.includes('bidve') || q.includes('dhavase')
  ) {
    return { title: 'Information Technology Faculty', html: KB_RESPONSES.faculty_it };
  }

  if (
    q.includes('ai') && (q.includes('facult') || q.includes('teacher') || q.includes('prof') || q.includes('hod')) ||
    q.includes('aids facult') || q.includes('araddhana') || q.includes('lomte') || q.includes('mokashi') || q.includes('nambiar')
  ) {
    return { title: 'AI & Data Science Faculty', html: KB_RESPONSES.faculty_aids };
  }

  if (
    (q.includes('entc') || q.includes('e&tc') || q.includes('telecom') || q.includes('electronics')) &&
    (q.includes('facult') || q.includes('teacher') || q.includes('prof') || q.includes('hod')) ||
    q.includes('gawande') || q.includes('kanwade') || q.includes('bhatlawande')
  ) {
    return { title: 'E&TC Engineering Faculty', html: KB_RESPONSES.faculty_entc };
  }

  if (
    (q.includes('mech') || q.includes('mechanical')) &&
    (q.includes('facult') || q.includes('teacher') || q.includes('prof') || q.includes('hod')) ||
    q.includes('deulgaonkar') || q.includes('katare') || q.includes('gholap') || q.includes('bhatkar')
  ) {
    return { title: 'Mechanical Engineering Faculty', html: KB_RESPONSES.faculty_mech };
  }

  if (
    (q.includes('elect') || q.includes('electrical')) &&
    (q.includes('facult') || q.includes('teacher') || q.includes('prof') || q.includes('hod')) ||
    q.includes('haripriya') || q.includes('kulkarni') || q.includes('satpute') || q.includes('bugade') || q.includes('gohokar')
  ) {
    return { title: 'Electrical Engineering Faculty', html: KB_RESPONSES.faculty_elect };
  }

  if (
    q.includes('first year facult') || q.includes('fe facult') || q.includes('physics facult') ||
    q.includes('chemistry facult') || q.includes('math facult') || q.includes('patil') || q.includes('humanities')
  ) {
    return { title: 'First Year & Science Faculty', html: KB_RESPONSES.faculty_fe };
  }

  if (
    q.includes('faculty') || q.includes('teacher') || q.includes('professor') || q.includes('hod') ||
    q.includes('principal') || q.includes('staff') || q.includes('who teaches') || q.includes('sir') || q.includes('maam')
  ) {
    return { title: 'Faculty & HOD Directory', html: KB_RESPONSES.faculty };
  }

  // Branch & Courses
  if (
    q.includes('course') || q.includes('branch') || q.includes('program') || q.includes('department') ||
    q.includes('btech') || q.includes('b.tech') || q.includes('mtech') || q.includes('mba') ||
    q.includes('intake') || q.includes('how many seat') || q.includes('seats')
  ) {
    return { title: 'Courses & Intake', html: KB_RESPONSES.courses };
  }

  // Fees
  if (
    q.includes('fee') || q.includes('cost') || q.includes('tuition') || q.includes('charge') ||
    q.includes('price') || q.includes('how much') || q.includes('payment') || q.includes('rupee') ||
    q.includes('lakh') || q.includes('annual fee') || q.includes('development fee')
  ) {
    return { title: 'Fee Structure', html: KB_RESPONSES.fees };
  }

  // Admissions & Eligibility
  if (
    q.includes('admission') || q.includes('apply') || q.includes('eligib') || q.includes('how to join') ||
    q.includes('mht cet') || q.includes('mht-cet') || q.includes('jee') || q.includes('cap round') ||
    q.includes('lateral') || q.includes('direct second') || q.includes('dsy') || q.includes('enrol')
  ) {
    return { title: 'Admissions & Eligibility', html: KB_RESPONSES.admission };
  }

  // Cutoffs
  if (
    q.includes('cutoff') || q.includes('cut off') || q.includes('percentile') || q.includes('merit') ||
    q.includes('opening') || q.includes('closing') || q.includes('rank')
  ) {
    return { title: 'Cutoff Marks', html: KB_RESPONSES.cutoff };
  }

  // Placements
  if (
    q.includes('placement') || q.includes('recruit') || q.includes('package') || q.includes('lpa') ||
    q.includes('salary') || q.includes('job') || q.includes('company') || q.includes('hiring') ||
    q.includes('highest package') || q.includes('average package')
  ) {
    return { title: 'Placements & Companies', html: KB_RESPONSES.placements };
  }

  // Scholarships & TFWS
  if (
    q.includes('scholarship') || q.includes('tfws') || q.includes('waiver') || q.includes('concession') ||
    q.includes('ebc') || q.includes('mahadbt') || q.includes('free ship') || q.includes('freeship')
  ) {
    return { title: 'Scholarships & TFWS', html: KB_RESPONSES.scholarships };
  }

  // Hostel
  if (
    q.includes('hostel') || q.includes('accommo') || q.includes('stay') || q.includes('mess') ||
    q.includes('room') || q.includes('living') || q.includes('girls hostel') || q.includes('boys hostel')
  ) {
    return { title: 'Hostel & Mess', html: KB_RESPONSES.hostel };
  }

  // Facilities & Campus
  if (
    q.includes('facilit') || q.includes('infrastruct') || q.includes('library') || q.includes('lab') ||
    q.includes('gym') || q.includes('canteen') || q.includes('auditorium') || q.includes('wifi') ||
    q.includes('sports') || q.includes('campus')
  ) {
    return { title: 'Campus Facilities', html: KB_RESPONSES.facilities };
  }

  // Events & Clubs
  if (
    q.includes('event') || q.includes('fest') || q.includes('club') || q.includes('ensemble') ||
    q.includes('udaan') || q.includes('technotsav') || q.includes('robocon') || q.includes('gdsc') ||
    q.includes('acm') || q.includes('ieee') || q.includes('antrix') || q.includes('baja')
  ) {
    return { title: 'Events & Student Clubs', html: KB_RESPONSES.clubs_events };
  }

  // Documents
  if (
    q.includes('document') || q.includes('certificate') || q.includes('marksheet') || q.includes('caste') ||
    q.includes('domicile') || q.includes('papers') || q.includes('what to bring')
  ) {
    return { title: 'Documents Required', html: KB_RESPONSES.documents };
  }

  // Contact & Location
  if (
    q.includes('contact') || q.includes('address') || q.includes('location') || q.includes('phone') ||
    q.includes('email') || q.includes('where is') || q.includes('karve nagar') || q.includes('helpline') ||
    q.includes('metro') || q.includes('bus') || q.includes('reach')
  ) {
    return { title: 'Contact & Directions', html: KB_RESPONSES.contact };
  }

  // NAAC & Autonomous
  if (
    q.includes('naac') || q.includes('accredit') || q.includes('nba') || q.includes('autonomous') ||
    q.includes('a++') || q.includes('grade') || q.includes('rank')
  ) {
    return { title: 'Accreditation & NAAC A++', html: KB_RESPONSES.naac };
  }

  // General About
  if (
    q.includes('about mmcoe') || q.includes('what is mmcoe') || q.includes('tell me about mmcoe') ||
    q.includes('college info') || q.includes('overview') || q.includes('established') || q.includes('trust')
  ) {
    return { title: 'About MMCOE', html: KB_RESPONSES.about };
  }

  // College-specific keyword check
  const collegeKeywords = ['mmcoe', 'marathwada', 'karvenagar', 'karve nagar', 'sakhare', 'cet cell', 'sppu'];
  if (collegeKeywords.some(k => q.includes(k))) {
    return { title: 'About MMCOE', html: KB_RESPONSES.about };
  }

  return null;
}

module.exports = {
  MMCOE_DATA,
  KB_RESPONSES,
  matchCollegeKnowledge
};

