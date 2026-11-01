const bcrypt = require('bcryptjs');
const { findUserByEmail, updateUserLogin } = require('../../lib/models/User');

module.exports = async function handler(req, res) {
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
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide both email and password.' });
    }

    const normEmail = email.toLowerCase().trim();
    const adminEmail = (process.env.ADMIN_EMAIL || 'admin@mmcoe.edu.in').toLowerCase();
    const adminPass = process.env.ADMIN_PASSWORD || 'mmcoe@admin2024';

    // Check default admin bypass
    if (normEmail === adminEmail && password === adminPass) {
      return res.status(200).json({
        success: true,
        message: 'Admin authenticated successfully',
        user: {
          name: 'MMCOE Admin',
          email: adminEmail,
          role: 'admin',
          branch: 'Administration',
          year: 'Principal / Admin'
        }
      });
    }

    const user = await findUserByEmail(normEmail);
    if (!user) {
      return res.status(404).json({ success: false, message: 'No registered account found with this email.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Incorrect password entered.' });
    }

    // Capture metadata and update database record
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0].trim() : (req.socket?.remoteAddress || req.ip || 'Unknown');
    const userAgent = req.headers['user-agent'] || 'Unknown';

    await updateUserLogin(normEmail, { ip, userAgent });

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        branch: user.branch || 'General',
        year: user.year || 'Student',
        phone: user.phone || '',
        role: user.role || 'user',
        loginCount: (user.loginCount || 1) + 1,
        lastLoginAt: new Date()
      }
    });
  } catch (error) {
    console.error('[Login API Error]:', error);
    return res.status(500).json({ success: false, message: 'Server login error: ' + error.message });
  }
};
