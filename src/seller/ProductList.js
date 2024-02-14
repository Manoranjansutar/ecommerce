import { FiTrash2 } from "react-icons/fi"; 
import React, { useEffect, useState } from 'react'

const ProductList = () => {

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

  let [keyword , updateKeyword ] = useState('');

  const delProduct = (pid) =>{
     let url='http://localhost:1234/product/' + pid;
     let postData = {method:'delete'};
     fetch(url,postData)
     .then(response => response.json())
     .then(msg =>{
         getProduct();
     })
  }


  return (
    <div className='container mt-5'>
      <div className='row mb-4'>
          <div className='col-lg-8'>
              <h3 className='text-center mb-5'>Manage Products:{allproduct.length}</h3>
          </div>
          <div className='col-lg-4'>
               <input type="text" className='form-control' placeholder='search' onChange={obj => updateKeyword(obj.target.value) } />
          </div>
      </div>
        <div className='row'>
           <div className='col-lg-12'>
             
              <table className='table table-bordered shadow-lg'>
                  <thead>
                      <tr>
                         <th>Id</th>
                         <th>Product Name</th>
                         <th>Product Price</th>
                         <th>Photo</th>
                         <th>Details</th>
                         <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                        {
                            allproduct.map((product,index) => {
                              if(product.name.toLowerCase().match(keyword.toLowerCase()))
                                return(
                                  <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><img src={product.photo} height='70' width='70' alt="" /></td>
                                    <td>{product.details}</td>
                                    <td><FiTrash2 className="text-danger" onClick={
                                         delProduct.bind(this,product.id)} /></td>
                                  </tr>
                                )
                            })
                        }
                  </tbody>
              </table>
           </div>
        </div>
    </div>
  )
}

export default ProductList
