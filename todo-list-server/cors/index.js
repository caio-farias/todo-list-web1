const cors = require('cors')

const corsOpt = {
  origin: '*',
  // allowedOrigins : ['*'],
  optionsSuccessStatus: 200,
}

module.exports = cors(corsOpt)