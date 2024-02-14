import React from 'react';
import { FaUserPlus } from "react-icons/fa6";


const Register = () => {
  return (
    <div className='container text-center'>
       <div className='row'>
              <div className='d-flex  justify-content-center  mb-2 mt-5'>
                  <div className=' col-lg-3'></div>
                  <div className='d-flex col-lg-4 px-0 text-danger'>
                         <span className=' fs-4 text-center px-3 py-0'>
                              <FaUserPlus />
                          </span>         
                         <h3>Create Your Account</h3>
                  </div>
              </div>
         
          <div className=' d-flex  justify-content-center  mb-2 mt-2'>
               <div className='col-lg-2 text-start'>Full Name</div>
               <div className='col-lg-4'>
                     <input type="text" className=' form-control' />
               </div>
          </div>

          <div className=' d-flex text-center justify-content-center mb-2 mt-2'>
               <div className='col-lg-2 text-start'>Mobile No</div>
               <div className='col-lg-4'>
                     <input type="text" className=' form-control' />
               </div>
          </div>

          <div className=' d-flex text-center justify-content-center  mb-2 mt-2'>
               <div className='col-lg-2 text-start'>E-mail Id</div>
               <div className='col-lg-4'>
                     <input type="text" className=' form-control' />
               </div>
          </div>

          <div className=' d-flex text-center justify-content-center  mb-2 mt-2'>
               <div className='col-lg-2 text-start'>Password</div>
               <div className='col-lg-4'>
                     <input type="password" className=' form-control' />
               </div>
          </div>

          <div className=' d-flex text-center justify-content-center  mb-2 mt-2'>
               <div className='col-lg-2 text-start'>Date Of Birth</div>
               <div className='col-lg-4 d-flex justify-content-between'>
                     <div className='col-lg-4 w-25'>
                            <input type="number" placeholder='Day' className=' form-control'/>
                     </div>
                     <div className='col-lg-4 w-25'>
                            <input type="number" placeholder='Month' className=' form-control'/>
                     </div>
                     <div className='col-lg-4 w-25'>
                             <input type="number" placeholder='Year' className=' form-control'/> 
                     </div>
               </div>
          </div>

          <div className=' d-flex text-center justify-content-center  mb-2 mt-2'>
               <div className='col-lg-2 text-start'>Address</div>
               <div className='col-lg-4'>
                     <textarea cols="30" rows="3" className=' form-control'></textarea>
               </div>
          </div>

          <div className=' d-flex text-center justify-content-center  mb-2 mt-2'>
               <div className='col-lg-2 text-start'></div>
               <div className='col-lg-4 '>
                     <button className=' btn btn-success  me-2'>Register</button>
                     <button className=' btn btn-warning'>Reset</button>
               </div>
          </div>

       </div>
    </div>
  )
}

export default Register
