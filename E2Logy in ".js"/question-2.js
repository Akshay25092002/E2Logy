const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
];

app.get('/users', (req, res) => {
    const reqUserId = parseInt(req.query.id);

    if (!reqUserId) {
        return res.status(400).json({ error: "Bad Request, Reqester UserId is Missing." });
    }

    const user = users.find(user => user.id === reqUserId);

    if (!user) {
        return res.status(404).json({ error: "user is not found" });
    }

    res.json(user);
});

app.listen(3000, () => console.log('Server running on port 3000'));
