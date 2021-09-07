const User = require('../users/User')
module.exports = {
  async authenticate(req, res){
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email })
      if(!user)
        return res.status(401).json({ message: "Usuário não existe." })
      
      if(password != user.password)
        return res.status(401).json({ message: "Senha incorreta." })
      
        user.password = undefined
      return res.json({ user, token: 'WEB1'})
    } catch (error) {
      
    }
  }
}