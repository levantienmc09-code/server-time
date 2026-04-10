const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        server_time: Math.floor(Date.now() / 1000)
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
