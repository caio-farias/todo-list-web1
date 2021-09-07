module.exports = {
  async verifyToken(req, res, next){
    if(req.headers.authorization != 'WEB1')
      return res.status(403).json({ message: "Usuário não autorizado." })

    next()
  }
}