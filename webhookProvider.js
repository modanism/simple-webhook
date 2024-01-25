const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/trigger-status-change', async (req, res) => {
    const statusData = req.body;
    // Here you would typically update the status in your database

    // Simulate status change and notify Backend B via a webhook
    try {
        await axios.post('http://localhost:8000/webhook', statusData);
        res.status(200).send('Status changed and webhook notified.');
    } catch (error) {
        res.status(500).send('Error notifying webhook.');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Webhook provider running on port ${PORT}`);
});
