const { getAllUsers } = require('../../lib/models/User');
const { getAllQueryLogs, getAllLoginLogs } = require('../../lib/models/ChatLog');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const users = await getAllUsers();
    const searchLogs = await getAllQueryLogs(300);
    const loginLogs = await getAllLoginLogs(200);

    const today = new Date().toDateString();
    const totalUsers = users.length;
    const joinedToday = users.filter(u => u.createdAt && new Date(u.createdAt).toDateString() === today).length;
    const activeLogins = users.filter(u => (u.loginCount || 0) > 1).length;
    const totalSearches = searchLogs.length;

    return res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        joinedToday,
        activeLogins,
        totalSearches
      },
      users,
      searchLogs,
      loginLogs
    });
  } catch (error) {
    console.error('[Admin Users API Error]:', error);
    return res.status(500).json({ success: false, message: 'Failed fetching registered users: ' + error.message });
  }
};
