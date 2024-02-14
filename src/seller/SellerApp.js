import { AiOutlinePlus } from "react-icons/ai"; 
import { AiOutlineHome } from "react-icons/ai"; 
import React from 'react'
import { HashRouter , Link, Route, Routes } from 'react-router-dom'

import DashBoard from './DashBoard'
import OrderList from './OrderList'
import NewProduct from './NewProduct'
import ProductList from './ProductList'


const SellerApp = () => {
  return (
    <HashRouter>


     <nav
        className="navbar navbar-expand-lg navbar-dark bg-success sticky-top"
       >
        <div className="container">
          <a className="navbar-brand" href="#">React Shopping CRM</a>
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
                            <Link className="nav-link active" to="/"> <AiOutlineHome /> Dashboard </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" to="/newproduct"><AiOutlinePlus /> New Product </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link active" to="/productlist"> Product List </Link>
                        </li>  
                        <li className="nav-item me-5">
                            <Link className="nav-link active" to="/orderlist"> Manage Order </Link>
                        </li>  
                        <li className='nav-item' onClick={logout}>
                            <Link className="nav-link active">Welcome {localStorage.getItem("fullname")} - Logout</Link>
                        </li>
                    </ul>
          </div>
        </div>
        </nav>

        <Routes>
         <Route exact path = '/' element = { <DashBoard />} />
         <Route exact path = '/orderlist' element = { <OrderList />} />
         <Route exact path = '/newproduct' element = { <NewProduct />} />
         <Route exact path = '/productlist' element = { <ProductList />} />
        </Routes>





      
    </HashRouter>
  )
}

export default SellerApp


const logout = () =>{
   localStorage.clear();
   window.location.reload();
}