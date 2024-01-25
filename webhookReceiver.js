const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
    const statusData = req.body;
    console.log('Received webhook:', statusData);

    // Here you can trigger a notification or perform other actions as needed

    res.status(200).send('Webhook received successfully.');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Webhook receiver running on port ${PORT}`);
});
