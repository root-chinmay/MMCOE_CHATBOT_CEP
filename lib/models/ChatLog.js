const mongoose = require('mongoose');
const { connectToDatabase, fallbackStore } = require('../db');

// Add queries array to fallbackStore if not present
if (!fallbackStore.queries) {
  fallbackStore.queries = [];
}
if (!fallbackStore.loginLogs) {
  fallbackStore.loginLogs = [];
}

const ChatLogSchema = new mongoose.Schema(
  {
    userEmail: { type: String, default: 'guest' },
    userName: { type: String, default: 'Guest' },
    userRole: { type: String, default: 'user' },
    userBranch: { type: String, default: 'N/A' },
    userYear: { type: String, default: 'N/A' },
    query: { type: String, required: true },
    responseSummary: { type: String, default: '' },
    source: { type: String, default: 'unknown' }, // 'college_kb', 'gemini_ai', 'greeting'
    ip: { type: String, default: 'Unknown' },
    userAgent: { type: String, default: 'Unknown' },
    sessionId: { type: String, default: '' }
  },
  { timestamps: true }
);

let ChatLogModel;
try {
  ChatLogModel = mongoose.model('ChatLog');
} catch {
  ChatLogModel = mongoose.model('ChatLog', ChatLogSchema);
}

const LoginLogSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    userName: { type: String, default: '' },
    branch: { type: String, default: '' },
    year: { type: String, default: '' },
    ip: { type: String, default: 'Unknown' },
    userAgent: { type: String, default: 'Unknown' },
    loginAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

let LoginLogModel;
try {
  LoginLogModel = mongoose.model('LoginLog');
} catch {
  LoginLogModel = mongoose.model('LoginLog', LoginLogSchema);
}

async function recordQueryLog(logData) {
  const dbStatus = await connectToDatabase();
  const entry = {
    ...logData,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  if (dbStatus.isConnected) {
    try {
      const doc = new ChatLogModel(entry);
      return await doc.save();
    } catch (e) {
      console.warn('[ChatLog] Error writing to MongoDB:', e.message);
    }
  }

  // Fallback in-memory store
  fallbackStore.queries.unshift(entry);
  if (fallbackStore.queries.length > 500) {
    fallbackStore.queries = fallbackStore.queries.slice(0, 500);
  }
  return entry;
}

async function recordLoginLog(loginData) {
  const dbStatus = await connectToDatabase();
  const entry = {
    ...loginData,
    loginAt: new Date()
  };

  if (dbStatus.isConnected) {
    try {
      const doc = new LoginLogModel(entry);
      return await doc.save();
    } catch (e) {
      console.warn('[LoginLog] Error writing to MongoDB:', e.message);
    }
  }

  // Fallback in-memory store
  fallbackStore.loginLogs.unshift(entry);
  if (fallbackStore.loginLogs.length > 500) {
    fallbackStore.loginLogs = fallbackStore.loginLogs.slice(0, 500);
  }
  return entry;
}

async function getAllQueryLogs(limit = 200) {
  const dbStatus = await connectToDatabase();

  if (dbStatus.isConnected) {
    try {
      return await ChatLogModel.find({}).sort({ createdAt: -1 }).limit(limit).lean();
    } catch (e) {
      console.warn('[ChatLog] Error reading from MongoDB:', e.message);
    }
  }

  return fallbackStore.queries.slice(0, limit);
}

async function getAllLoginLogs(limit = 200) {
  const dbStatus = await connectToDatabase();

  if (dbStatus.isConnected) {
    try {
      return await LoginLogModel.find({}).sort({ loginAt: -1 }).limit(limit).lean();
    } catch (e) {
      console.warn('[LoginLog] Error reading from MongoDB:', e.message);
    }
  }

  return fallbackStore.loginLogs.slice(0, limit);
}

module.exports = {
  ChatLogModel,
  LoginLogModel,
  recordQueryLog,
  recordLoginLog,
  getAllQueryLogs,
  getAllLoginLogs
};

