import React from "react"
import { Link } from "react-router-dom"
import './index.scss'

const Header = () =>(
  <>
    <nav class="container mainHeader">
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/app">App</Link>
        </li>
      </ul>
    </nav>
    <nav class="">
  <div class="container mainHeader">
    <div class="header-wrapper">
      <h3 class="mt-5">To-do list!</h3>
      <span>Projeto de Desenvolvimento WEB I</span>
    </div>
  </div>
</nav>
  </>
)

export default Header