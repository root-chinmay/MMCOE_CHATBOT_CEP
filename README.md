# MMCOE AI ChatBot (Advanced Edition)

An advanced, production-ready AI Assistant for **Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune**, built with a Node.js serverless backend, cloud database persistence, authentication, and hybrid intelligence combining hard-coded MMCOE institutional data with **Google Gemini AI**.

Designed and optimized for zero-configuration deployment on **Vercel**.

---

## 🌟 Key Features

### 1. Hard-Coded Exhaustive MMCOE Knowledge Base
Extracted directly from [mmcoe.edu.in](https://mmcoe.edu.in):
- **Faculty & Leadership Rosters:** Comprehensive department directories including Principal Dr. Sachin R. Sakhare and all Heads of Departments (HODs) along with assistant/associate professors for:
  - Computer Engineering (HOD: Dr. Kalpana S. Thakre)
  - Information Technology (HOD: Dr. Rupali M. Chopade)
  - Artificial Intelligence & Data Science (HOD: Dr. Araddhana A. Deshmukh)
  - Electronics & Telecommunication Engineering (HOD: Dr. G. S. Gawande)
  - Mechanical Engineering (HOD: Dr. Vikas R. Deulgaonkar)
  - Electrical Engineering (HOD: Dr. Haripriya H. Kulkarni)
  - Engineering Sciences & Humanities / FE (Head: Dr. V. N. Patil)
  - MBA Department (Head: Dr. Roopa G. Kulkarni)
- **Courses & Sanctioned Intakes:** Detailed breakdown of B.Tech (600 seats total), M.Tech, MBA, and Ph.D. research centers.
- **Accreditation:** NAAC Grade 'A++', NBA Accredited branches, UGC Autonomous status, DTE Code EN6156.
- **Fee Structures (AY 2026-27):** Complete category-wise fee details (Open, OBC, EWS, SC, ST, TFWS, J&K).
- **Cutoffs & Eligibility:** Round-wise MHT-CET and JEE Main cutoff percentiles.
- **Placements:** Highest international (25 LPA) and domestic packages (10-12 LPA), average packages, and 200+ visiting recruiters.
- **Campus & Hostels:** Boys & Girls hostel details, central library (30k+ volumes), sports facilities, canteen, innovation incubators, and student clubs (Ensemble, Technotsav, Robocon, GDSC, ACM, IEEE, Baja, Supra).

### 2. Google Gemini AI Integration (General Queries)
- When queries fall outside the MMCOE college domain (such as general programming, mathematics, physics, science, advice, or general knowledge), the backend routes the prompt to **Google Gemini 1.5 Flash**.
- Supports server-side `GEMINI_API_KEY` as well as user/client-side personal keys via the in-app Gemini settings modal.

### 3. Full Authentication & Database Persistence
- **Sign Up:** Captures full name, email, securely hashed password (bcrypt), branch, year of study, phone number, signup IP address, and browser user-agent.
- **Login:** Tracks last login timestamp, login count, and device details.
- **Database Engine:** Powered by **MongoDB Atlas** via Mongoose with serverless connection pooling, with an in-memory/fallback mode for development.
- **Admin Dashboard:** Real-time visibility into all registered users, signup metadata, and a one-click **"Export CSV"** button.

---

## 🚀 One-Click Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git push -u origin main
   ```
2. Import the project in [Vercel](https://vercel.com).
3. Set the following **Environment Variables** in the Vercel dashboard (*Settings &rarr; Environment Variables*):

| Variable Name | Description | Example |
|---|---|---|
| `MONGODB_URI` | MongoDB Atlas Connection String | `mongodb+srv://<user>:<password>@cluster0.abcde.mongodb.net/mmcoe_chatbot?retryWrites=true&w=majority` |
| `GEMINI_API_KEY` | Google Gemini API Key | Get free at [aistudio.google.com](https://aistudio.google.com/) |
| `ADMIN_EMAIL` | Administrator login email | `admin@mmcoe.edu.in` |
| `ADMIN_PASSWORD` | Administrator login password | `mmcoe@admin2024` |

4. Click **Deploy**! Vercel will automatically build the static frontend and mount the serverless functions in `/api`.

---

## 💻 Local Development

1. Clone your repository:
   ```bash
   git clone https://github.com/root-chinmay/MMCOE_CHATBOT_CEP.git
   cd MMCOE_CHATBOT_CEP
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your keys:
   ```bash
   cp .env.example .env
   ```
4. Start the local server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Endpoints

- `POST /api/auth/register` - Register a new user and store full profile in database.
- `POST /api/auth/login` - Authenticate user, update login count, and record IP/device.
- `GET /api/admin/users` - Admin-only endpoint returning all registered users and signup details.
- `POST /api/chat` - Hybrid chat handler (MMCOE Knowledge Base + Google Gemini AI).
- `GET /api/health` - Health check status.

---

## 🛡️ Default Administrator Account

- **Email:** `admin@mmcoe.edu.in`
- **Password:** `mmcoe@admin2024`

*Note: Sign in with the administrator account to access the user database and export registration records.*

---

## 👨‍💻 Author

Created by **Chinmay Rajendra Amodkar** — MMCOE Student.
