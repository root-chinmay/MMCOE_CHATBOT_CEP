const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser } = require('../../lib/models/User');

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
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
    const { name, email, password, branch, year, phone } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters.' });
    }

    const normEmail = email.toLowerCase().trim();

    // Check existing user
    const existing = await findUserByEmail(normEmail);
    if (existing) {
      return res.status(409).json({ success: false, message: 'An account with this email already exists.' });
    }

    // Capture device and network metadata
    const forwarded = req.headers['x-forwarded-for'];
    const signupIp = forwarded ? forwarded.split(',')[0].trim() : (req.socket?.remoteAddress || req.ip || 'Unknown');
    const userAgent = req.headers['user-agent'] || 'Unknown';

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const isFirstAdmin = normEmail === (process.env.ADMIN_EMAIL || 'admin@mmcoe.edu.in').toLowerCase();

    const userData = {
      name: name.trim(),
      email: normEmail,
      password: hashedPassword,
      branch: branch || 'Not specified',
      year: year || 'Prospective Student',
      phone: phone ? phone.trim() : '',
      role: isFirstAdmin ? 'admin' : 'user',
      signupIp,
      userAgent
    };

    const savedUser = await createUser(userData);

    return res.status(201).json({
      success: true,
      message: 'Account created successfully and recorded in database!',
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        branch: savedUser.branch,
        year: savedUser.year,
        phone: savedUser.phone,
        role: savedUser.role,
        createdAt: savedUser.createdAt
      }
    });
  } catch (error) {
    console.error('[Register API Error]:', error);
    return res.status(500).json({ success: false, message: 'Server error registering user: ' + error.message });
  }
};
