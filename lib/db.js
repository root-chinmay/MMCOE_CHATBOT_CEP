const mongoose = require('mongoose');

// In-memory / file fallback store when MongoDB_URI is not set yet
const fallbackStore = {
  users: [
    {
      _id: 'admin_root',
      name: 'MMCOE Admin',
      email: 'admin@mmcoe.edu.in',
      // bcrypt hash for mmcoe@admin2024
      password: '$2a$10$wT0E4u63zX2d0Q01lS6KqeQfQYwD56g8K91mR6L3Nf6w08B3wP79C',
      branch: 'Administration',
      year: 'Faculty / Admin',
      phone: '020-25479811',
      role: 'admin',
      signupIp: '127.0.0.1',
      userAgent: 'System Internal',
      loginCount: 1,
      lastLoginAt: new Date(),
      createdAt: new Date('2026-01-01T00:00:00Z')
    }
  ],
  chatSessions: []
};

let cachedDb = null;

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return { isConnected: false, fallback: fallbackStore };
  }

  if (cachedDb && mongoose.connection.readyState === 1) {
    return { isConnected: true, connection: cachedDb };
  }

  try {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 10000,
    };

    const conn = await mongoose.connect(uri, opts);
    cachedDb = conn;
    console.log('[Database] Connected successfully to MongoDB Atlas.');
    return { isConnected: true, connection: conn };
  } catch (err) {
    console.warn('[Database] MongoDB connection error, utilizing fallback store:', err.message);
    return { isConnected: false, fallback: fallbackStore, error: err.message };
  }
}

module.exports = {
  connectToDatabase,
  fallbackStore
};
