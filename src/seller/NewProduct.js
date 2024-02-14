import React, { useState } from 'react';


const NewProduct = () => {

  let [pname,pickName] = useState('');
  let [pprice,pickPrice] = useState('');
  let [pphoto,pickPhoto] = useState('');
  let [pdetails,pickDetails] = useState('');

  const save = () =>{
      let url = 'http://localhost:1234/product' ;
      let newproduct = {name:pname,price:pprice,details:pdetails,photo:pphoto};

      let postData = {
         headers:{'Content-Type':'application/json'},
         method:'post',
         body:JSON.stringify(newproduct)
      }

      fetch(url,postData)
      .then(response => response.json())
      .then(message =>{
           alert(pname + 'Save Succcessfully!!!');
           pickName('');
           pickPrice('');
           pickPhoto('');
           pickDetails('');
      })
  }




  return (
    <div className='container mt-5'>
        <div className='row'>
             <div className='col-lg-12 mb-5'>
                 <h3 className='text-center'>Enter Product Details</h3>
             </div>
             <div className='col-lg-4 mb-4'>
                 <label>Enter  Product Name</label>
                 <input type="text" className='form-control' value={pname} onChange={obj => pickName(obj.target.value)} />
             </div>
             <div className='col-lg-4 mb-4'>
                 <label>Enter Product Price</label>
                 <input type="text" className='form-control' value ={pprice} onChange={obj => pickPrice(obj.target.value)} />
             </div>
             <div className='col-lg-4 mb-4'>
                 <label>Enter Product Photo Url</label>
                 <input type="text" className='form-control' value = {pphoto} onChange={obj => pickPhoto(obj.target.value)} />
             </div>
             <div className='col-lg-8 mb-4'>
                 <label>Enter Product Details</label>
                 <textarea  className='form-control' value = {pdetails} onChange={obj => pickDetails(obj.target.value)} ></textarea>
             </div>
             <div className='col-lg-4 mb-4 text-center'>
                 <br/>
                 <button className='btn btn-danger' onClick={save}>Save Product</button>
             </div>
        </div>
    </div>
  )
}

export default NewProduct
