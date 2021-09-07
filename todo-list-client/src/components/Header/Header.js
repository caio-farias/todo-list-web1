import React, { useEffect } from "react"
import { useHistory, useLocation } from "react-router"
import { Button } from ".."
import { removeAuthToken, isAuthenticated } from "../../utils"
import './index.scss'

const Header = () => {
  const history = useHistory()
  const location = useLocation()

  const logout = () =>{
    removeAuthToken()
    history.push({
      pathname: '/login'
    })
  }

  useEffect(() => {
  }, [location.pathname])
  
  return(
  <>
    <nav className="container mainHeader">
      <div className="container mainHeader">
        <div className="header-wrapper">
          <h3 className="mt-5">To-do list!</h3>
          <span>Projeto de Desenvolvimento WEB I v2.0</span>
            <div>
              {isAuthenticated() ? 
                <Button 
                  onClick={()=> logout()} 
                  modifier='login'
                >
                  Sair
                </Button>
              :(
                <>
                  {location.pathname !== '/login' ? 
                    <a onClickCapture={() => history.push({
                      pathname: '/login'
                    })} className="">Entrar</a>
                    : 
                    <a onClickCapture={() => history.replace({
                      pathname: '/register'
                    })} className="">Cadastre-se</a>
                  }
                </>
              )}
            </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Header