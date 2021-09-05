const http = require('http')
const { router } = require('./routes')

const port = 5555

const listener = (req, res) => {
  if(req.method == 'GET')
    return router(req, res, req.url)
  
  res.writeHead(404, {"Content-Type": "text/html"})
  res.end("<h1>Page Not Found.. </h1>")
}

const server = http.createServer(listener)

server.listen(port)
console.log(">> http://localhost:" + port)