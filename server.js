const http = require("http");
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Default message";

const server = http.createServer((req, res) => {
    if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: MESSAGE,
            time: new Date()
        }));
    } else {
        res.writeHead(200);
        res.end("API Server Running");
    }
});

server.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});
