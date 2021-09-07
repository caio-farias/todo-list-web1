import React, { useState } from "react"
import { useHistory } from "react-router"
import { Button } from "../../components"
import api from '../../api'
import './index.scss'

const Register = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const submit = async e =>{
    e.preventDefault()
    console.log(name)
    try {
      await api.post('/users', {
        name,
        email,
        password,
      })
      history.push({
        pathname: '/login'
      })
    } catch (error) {
      setErrorMessage("Ocorreu um erro")
    }
  }

  return (
    <>
    <section className="register-page">
    <div className="register-form-wrapper">
      <form className="register-form" onSubmit={submit}>
        <div className="register-form-field">
          <label className="register-form-label" htmlFor="name">Nome: </label>
          <input 
            required 
            className="register-form-input" 
            type="text" 
            name="name"
            onChange={ e => setName(e.target.value)}
            />
        </div>
        <div className="register-form-field">
          <label className="register-form-label" htmlFor="password">Senha: </label>
          <input 
            required 
            className="register-form-input" 
            type="password" 
            name="password" 
            onChange={ e => setPassword(e.target.value)}
            />
        </div>
        <div className="register-form-field">
          <label className="register-form-label" htmlFor="email">E-mail: </label>
          <input 
            required 
            className="register-form-input" 
            type="text" 
            name="email" 
            onChange={ e => setEmail(e.target.value)}
            />
        </div>
        {errorMessage && ( 
            <span className="error-message">
              {errorMessage}
            </span> 
          )}
        <div className="register-form-button-wrapper">
          <a href="/login">Cancelar</a>
          <Button type='submit' modifier='register'>Cadastrar</Button>
        </div>
      </form>
    </div>
    </section>
    </>
  )
}

export default Register
