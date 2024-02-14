import React from 'react'
import { HashRouter , Link, Route, Routes} from 'react-router-dom'
import MyLogin from './Login'
import Register from './Register'
import Home from './Home'
import Cart from './Cart'

const UserApp = () => {
  return (
    <HashRouter>

       <nav
        className="navbar navbar-expand-lg navbar-dark bg-success sticky-top"
       >
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler hidden-lg-up"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-5">
                            <Link className="nav-link active" to="/"> Shopping </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" to="/cart"> My Cart </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" to="/login"> Login </Link>
                        </li>  
                        <li className="nav-item">
                            <Link className="nav-link active" to="/register"> Create Account Seller </Link>
                        </li>  
                    </ul>
          </div>
        </div>
       </nav>


       <Routes>
          <Route  exact path='/' element={<Home />} />
          <Route exact path='/cart' element ={<Cart />} />
          <Route  exact path = '/login' element = {<MyLogin />} />
          <Route exact path = '/register' element = {<Register />} />
       </Routes>
       
         


        
    </HashRouter>
  )
}

export default UserApp

