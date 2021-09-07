import React, { useState } from 'react'
import { Button, Loading } from '../../components'
import api from '../../api'
import './index.scss'
import { setAuthToken, setUserId } from '../../utils'
import { useHistory } from 'react-router'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errorMessage, setErrorMessage] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)
  const history = useHistory()

  const changePage = (status) =>{
    setTimeout(() => {
      history.push({
        pathname: '/app'
      })
    }, 500);
  }

  const submit = async e =>{
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await api.post('/auth', {
        email,
        password,
      })
      const { user, token } = res.data
      const { _id, } = user
      setUserId(_id)
      setAuthToken(token)
      changePage()
    } catch (error) {
      setIsLoading(false)
      setErrorMessage("Ocorreu um erro")
    }
  }
  return (
    <>
    <section className="login-page">
      <div className="login-user-form-wrapper">
        <span className="error-message"></span>
        {isLoading ? 
          <div className="loading-wrapper">
            <span> Por favor, aguarde.. </span>
            <Loading type='spin' color='#1fb092' />
          </div> 
          :
          <LoginForm 
            setEmail={setEmail}
            setPassword={setPassword}
            submit={submit} 
            errorMessage={errorMessage}
          />}
      </div>
    </section>
    </>
  )
}

const LoginForm = ({ setPassword, setEmail, submit, errorMessage}) => (
  <>
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
  </>
)


export default Login
