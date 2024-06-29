const express = require("express");
const cors = require("cors");

const generateStreamIOToken = require("./controllers/token-generator");

const app = express();
app.use(
    cors({
        origin: [
            'http://localhost:5173',
            'http://localhost:5174'
        ]
    })
);
app.options('*', cors());

const PORT = 8080;

app.get("/stream-io-token", (req, res) => {
    res.status(200).json({
        message: "this stream io token generating service is working"
    });
});

app.get("/stream-io-token/:roomId", generateStreamIOToken);

app.listen(PORT, () => {
    console.log(`Video service listening on port ${PORT}`);
});
