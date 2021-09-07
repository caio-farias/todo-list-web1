import React, { useState } from 'react'
import { Button } from '../../components'
import api from '../../api'
import './index.scss'
import { setAuthToken, setUserId } from '../../utils'
import { useHistory } from 'react-router'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const submit = async e =>{
    e.preventDefault()
    try {
      const res = await api.post('/auth', {
        email,
        password,
      })
      const { user, token } = res.data
      const { _id, } = user
      setUserId(_id)
      setAuthToken(token)
      history.push({
        pathname: '/app'
      })
    } catch (error) {
      setErrorMessage("Ocorreu um erro")
    }
  }
  return (
    <>
    <section className="login-page">
      <div className="login-user-form-wrapper">
        <span className="error-message"></span>
        <form className="login-user-form" onSubmit={submit}>
          <div className="user-form-field">
            <label className="user-form-label" htmlFor="email">E-mail: </label>
            <input 
              required 
              className="user-form-input" 
              type="text" 
              name="email"
              onChange={ e => setEmail(e.target.value) }
            />
          </div>
          <div className="user-form-field">
            <label className="user-form-label" htmlFor="password">Senha: </label>
            <input 
              required 
              className="user-form-input" 
              type="password" 
              name="password"
              onChange={ e => setPassword(e.target.value) }
            />
          </div>
          {errorMessage && ( 
            <span className="error-message">
              {errorMessage}
            </span> 
          )}
          <div className="user-form-button-wrapper">
            <Button type='submit' modifier='login'>Entrar</Button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Login
