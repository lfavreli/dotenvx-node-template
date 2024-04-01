import http from 'http';

const server = http.createServer((_req, res) => {
    // Create a custom message based on the environment variable 'NAME' 
    const message = `Hello ${process.env.NAME ?? 'world'} from ${process.env.ENVIRONMENT ?? 'space'}!`;

    // Display this custom message
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(message),
        'Content-Type': 'text/plain'
    }).end(message);
});

const PORT = process.env.PORT || 4567;
server.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));