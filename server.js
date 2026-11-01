require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDatabase } = require('./lib/db');

const registerHandler = require('./api/auth/register');
const loginHandler = require('./api/auth/login');
const adminUsersHandler = require('./api/admin/users');
const chatHandler = require('./api/chat');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to Database
connectToDatabase().then(({ isConnected, error }) => {
  if (isConnected) {
    console.log('✅ Connected to MongoDB Atlas');
  } else {
    console.log('ℹ️ Running with Local Fallback Store. Set MONGODB_URI in .env to connect to MongoDB Atlas.');
    if (error) console.log('   Reason:', error);
  }
});

// API Routes
app.all('/api/auth/register', (req, res) => registerHandler(req, res));
app.all('/api/auth/login', (req, res) => loginHandler(req, res));
app.all('/api/admin/users', (req, res) => adminUsersHandler(req, res));
app.all('/api/chat', (req, res) => chatHandler(req, res));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    mongoConfigured: !!process.env.MONGODB_URI
  });
});

// Static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));

// Root fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 MMCOE AI ChatBot Server running on http://localhost:${PORT}`);
  console.log(`📡 Vercel-ready API endpoints available at /api/*`);
  console.log(`🤖 Gemini AI: ${process.env.GEMINI_API_KEY ? 'Configured ✅' : 'Not configured (add GEMINI_API_KEY in .env)'}`);
  console.log(`🗄️ Database: ${process.env.MONGODB_URI ? 'MongoDB Atlas ✅' : 'In-Memory fallback (add MONGODB_URI in .env)'}`);
  console.log(`==================================================\n`);
});

