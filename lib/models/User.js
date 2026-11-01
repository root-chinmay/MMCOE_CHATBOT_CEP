const mongoose = require('mongoose');
const { connectToDatabase, fallbackStore } = require('../db');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    branch: { type: String, default: 'General / Aspirant' },
    year: { type: String, default: 'Prospective Student' },
    phone: { type: String, default: '' },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    signupIp: { type: String, default: 'Unknown' },
    userAgent: { type: String, default: 'Unknown' },
    loginCount: { type: Number, default: 1 },
    lastLoginAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

// Prevent mongoose model overwrite error during serverless hot-reloads
let UserModel;
try {
  UserModel = mongoose.model('User');
} catch {
  UserModel = mongoose.model('User', UserSchema);
}

// Unified repository methods that work with either MongoDB Atlas or Fallback Store
async function findUserByEmail(email) {
  const normEmail = (email || '').toLowerCase().trim();
  const dbStatus = await connectToDatabase();

  if (dbStatus.isConnected) {
    return await UserModel.findOne({ email: normEmail });
  }

  // Fallback in-memory store
  return fallbackStore.users.find(u => u.email.toLowerCase() === normEmail) || null;
}

async function createUser(userData) {
  const dbStatus = await connectToDatabase();
  const normEmail = userData.email.toLowerCase().trim();

  if (dbStatus.isConnected) {
    const newUser = new UserModel({
      ...userData,
      email: normEmail,
      loginCount: 1,
      lastLoginAt: new Date()
    });
    return await newUser.save();
  }

  // Fallback in-memory store
  const fallbackUser = {
    _id: 'usr_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    ...userData,
    email: normEmail,
    loginCount: 1,
    lastLoginAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  };
  fallbackStore.users.push(fallbackUser);
  return fallbackUser;
}

async function updateUserLogin(email, metadata = {}) {
  const normEmail = (email || '').toLowerCase().trim();
  const dbStatus = await connectToDatabase();

  if (dbStatus.isConnected) {
    return await UserModel.findOneAndUpdate(
      { email: normEmail },
      {
        $inc: { loginCount: 1 },
        $set: {
          lastLoginAt: new Date(),
          ...(metadata.ip && { lastLoginIp: metadata.ip }),
          ...(metadata.userAgent && { lastLoginUserAgent: metadata.userAgent })
        }
      },
      { new: true }
    );
  }

  // Fallback in-memory store
  const user = fallbackStore.users.find(u => u.email.toLowerCase() === normEmail);
  if (user) {
    user.loginCount = (user.loginCount || 1) + 1;
    user.lastLoginAt = new Date();
    if (metadata.ip) user.lastLoginIp = metadata.ip;
    if (metadata.userAgent) user.lastLoginUserAgent = metadata.userAgent;
    return user;
  }
  return null;
}

async function getAllUsers() {
  const dbStatus = await connectToDatabase();

  if (dbStatus.isConnected) {
    return await UserModel.find({}, '-password').sort({ createdAt: -1 }).lean();
  }

  // Fallback in-memory store (exclude password)
  return fallbackStore.users.map(({ password, ...rest }) => rest);
}

module.exports = {
  UserModel,
  findUserByEmail,
  createUser,
  updateUserLogin,
  getAllUsers
};

