import React, { useState } from "react"
import { useHistory } from "react-router"
import { Button, Loading } from "../../components"
import api from '../../api'
import './index.scss'

const Register = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errorMessage, setErrorMessage] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)
  const history = useHistory()

  const changePage = (status) =>{
    setTimeout(() => {
      history.push({
        pathname: '/login'
      })
    }, 500);
  }

  const submit = async e =>{
    e.preventDefault()
    setIsLoading(true)
    try {
      await api.post('/users', {
        name,
        email,
        password,
      })
      changePage()
    } catch (error) {
      setIsLoading(false)
      setErrorMessage("Ocorreu um erro, tente novamente.")
    }
  }


  return (
    <>
    <section className="register-page">
      <div className="register-form-wrapper">
        {isLoading ? 
          <div className="loading-wrapper">
            <span> Por favor, aguarde.. </span>
            <Loading type='spin' color='#1fb092' />
          </div> 
          :
          <RegisterForm 
            setName={setName}
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

const RegisterForm = ({ setName, setPassword, setEmail, submit, errorMessage }) => (
  <form className="register-form" onSubmit={submit}>
    <div className="register-form-field">
      <label className="register-form-label" htmlFor="name">Nome: </label>
      <input
        required
        className="register-form-input"
        type="text"
        name="name"
        onChange={e => setName(e.target.value)} />
    </div>
    <div className="register-form-field">
      <label className="register-form-label" htmlFor="password">Senha: </label>
      <input
        required
        className="register-form-input"
        type="password"
        name="password"
        onChange={e => setPassword(e.target.value)} />
    </div>
    <div className="register-form-field">
      <label className="register-form-label" htmlFor="email">E-mail: </label>
      <input
        required
        className="register-form-input"
        type="text"
        name="email"
        onChange={e => setEmail(e.target.value)} />
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
)


export default Register
