const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🚀 DevOps Assignment Application is Running Successfully!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        server: "AWS EC2",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
