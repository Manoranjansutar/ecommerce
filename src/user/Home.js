import { AiOutlineShoppingCart } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react';


const Home = () => {

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
  },[1]);

  const addToCart = (product) =>{

    product['qty'] = 1;

    let url = 'http://localhost:1234/cart' ;
    
    let postData = {
       headers:{'Content-Type':'application/json'},
       method:'post',
       body:JSON.stringify(product)
    }

    fetch(url,postData)
    .then(response => response.json())
    .then(message =>{
         alert(product.name + 'added in your Cart Succcessfully!!!');
         
    })
  }

  return (
    <div className='container mt-5 '>
        <div className='row'>
           {
               allproduct.map((product,index) =>{
                   return(
                      <div className='col-lg-3 mb-4' key={index}>
                          <div className='p-3'>
                                 <h3 className='text-center'>{product.name}</h3>
                                 <img src={product.photo} height='170' width='100%' alt="" />
                                 <p className='mt-3'>{product.details}</p>
                                 <p className='mt-3'>{product.price}</p>
                                 <p className='text-center'>
                                    <button className='btn btn-danger btn-sm' onClick={addToCart.bind(this,product)}>
                                        <AiOutlineShoppingCart /> Add to Cart
                                    </button>
                                 </p>
                          </div>
                      </div>
                   )
               })
           }
        </div>
    </div>
  )
}

export default Home

