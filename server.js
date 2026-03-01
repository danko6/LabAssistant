const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const STATE_FILE = path.join(__dirname, 'state.json');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname)); // Serve frontend files

// Load state endpoint
app.get('/api/state', (req, res) => {
    try {
        if (!fs.existsSync(STATE_FILE)) {
            return res.json({}); // Return empty if no history exists yet
        }
        const stateData = fs.readFileSync(STATE_FILE, 'utf8');
        res.json(JSON.parse(stateData));
    } catch (err) {
        console.error("Error reading state:", err);
        res.status(500).json({ error: "Failed to read state" });
    }
});

// Save state endpoint
app.post('/api/state', (req, res) => {
    try {
        const newState = req.body;
        fs.writeFileSync(STATE_FILE, JSON.stringify(newState, null, 2));
        res.json({ success: true });
    } catch (err) {
        console.error("Error writing state:", err);
        res.status(500).json({ error: "Failed to write state" });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✓ Backend Server running at http://localhost:${PORT} and on your Local Network IP`);
    console.log(`✓ History data stored securely in ${STATE_FILE}`);
});
