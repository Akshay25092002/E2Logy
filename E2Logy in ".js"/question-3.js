const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/data', (req, res) => {
    res.json({ message: 'Data fetched successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
