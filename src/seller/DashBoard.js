import { AiOutlinePlus } from "react-icons/ai"; 
import { BsHeadset } from "react-icons/bs"; 
import { CiRollingSuitcase } from "react-icons/ci"; 
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const DashBoard = () => {

    let [allproduct,updateProduct] = useState([]);

    const getProduct = () =>{
       fetch('http://localhost:1234/product')
       .then(response =>response.json())
       .then(productArray =>{
           updateProduct(productArray.reverse());
       })
    }
  
    useEffect(() =>{
       getProduct();
    },[1])

   



  return (
    <div className='container mt-5'>
      <div className='row'>
          <div className='col-lg-12  text-center'>
              <h3>Seller Dashboard</h3>
          </div>
      </div>
       <div className='row mt-5 text-center'>
           <div className='col-lg-4 mb-5'>
               <CiRollingSuitcase className="text-warning fs-1" />
               <h4>{allproduct.length}-Items in Stock</h4>
           </div>
           <div className='col-lg-4 mb-5'>
               <BsHeadset className="text-success fs-1" />
               <h4>100 - Orders</h4>
           </div>
           <div className='col-lg-4 mb-5'>
                <Link className="  text-decoration-none" to='/newproduct'>
                    <AiOutlinePlus className="text-info fs-1" />
                    <h4>Add New Item</h4>
                </Link>
              
           </div>
       </div>
    </div>
  )
}

export default DashBoard
