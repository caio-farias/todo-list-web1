const fs = require('fs')
const path = require('path')

const mimeTypes = {
  "htm": "text/html",
  "html": "text/html",
  "jpg": "image/jpeg",
  "jpeg": "image/jpeg",
  "png": "image/png",
  "css": "text/css",
  "js": "text/javascript",
  "json": "application/json"
}

module.exports = {
  renderPage(req, res, html, data){
    fs.readFile(path.join(__dirname, '/public/pages', html), (err, currentPage) => {
      const [ _ , extension ] = html.split('.')
      if(err)
        throw err
      res.writeHead(200, { 'Content-Type': mimeTypes[extension]})
      res.write(currentPage)
      res.end()
    })
  },
  provideFile(req, res){
    const filePath = path.join(__dirname, 'public', req.url);
    const fileStream = fs.createReadStream(filePath, "UTF-8");
    const extension = req.url.split('.')[req.url.split('.').length - 1]
    res.writeHead(200, { 'Content-Type': mimeTypes[extension]})
    fileStream.pipe(res)
  }
}