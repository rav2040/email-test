const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.end("")
});

server.listen(4000, () => console.log("listening..."))
