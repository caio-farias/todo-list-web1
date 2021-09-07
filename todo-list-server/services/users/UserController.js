const User = require('./User')

module.exports = {
  async createUser(req, res) {
    const { name, email, password } = req.body

    try {
      const isSameUser = await User.findOne({ email })
      if(isSameUser){
        return res.status(400).json({ message: "Usuário já existe."})
      }
      const user = await User.create({ 
        name,
        email,
        password, 
      })
      user.password = undefined
      return res.json(user)
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
  async getUser(req, res){
    const { id } = req.params
    try {
      const user = await User.findById(id)
      if(!user)
        return res.status(400).json({ message: "Usuário inexistente" })
        
      user.password = undefined
      return res.json(user)
    } catch (error) {
      return res.status(400).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
  async getUserByEmail(req, res){
    const { email } = req.params
    try {
      const user = await User.findOne({ email })
      if(!user)
        return res.status(400).json({ message: "Usuário inexistente" })
      user.password = undefined
      return res.json(user)
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
  async updateUser(req, res){
    const { id } = req.params
    const { todo_list } = req.body
    try {
      const user = await User.findById(id)
      if(!user){
        return res.status(400).json({ message: "Usuário não existe." })
      }
      user.todo_list = todo_list
      await user.save()
      user.password = undefined
      return res.json(user)
    } catch (error) {
      return res.status(400).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
}