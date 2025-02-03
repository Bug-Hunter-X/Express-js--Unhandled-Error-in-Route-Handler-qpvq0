const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch user' });
    } else if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});
// ... rest of the app