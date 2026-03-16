const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Hello from Termux API server",
            time: new Date()
        }));
    } else {
        res.writeHead(200);
        res.end("API Server Running");
    }
});

server.listen(3000, () => {
    console.log("API server running on port 3000");
});
