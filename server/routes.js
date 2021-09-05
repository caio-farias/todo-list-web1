const { renderPage, provideFile } = require('./fs')
const data = require('./data.json')

module.exports = {
  router(req, res, url){      
    if(url.match("\.css$") || url.match("\.js$")){
      return provideFile(req, res)
    }

    switch (url) {
      case '/':
        res.writeHead(302, { 'location' : '/welcome'})
      case '/welcome':
        renderPage(req, res, 'welcome.html', data)
        break;
      case '/app':
        renderPage(req, res, 'index.html', data)
        break;
      default:
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end("<h1>Page Not Found.. </h1>")
        break;
    }
  }
}