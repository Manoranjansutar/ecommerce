import React, { useState } from 'react';
import { FaLock , FaUserAlt , FaEnvelope } from "react-icons/fa";



const MyLogin = () => {

    let [username,pickUsername] = useState("");
    let [password,pickPassword] = useState("");
    let [msg,pickMsg] = useState("Enter Login Details");

    const loginCheck = () =>{
         let url = "http://localhost:1234/account?email=" + username + "&password=" + password;
         fetch(url)
         .then(response => response.json())
         .then((userinfo) =>{
             if(userinfo.length>0){
                pickMsg("Login Successs...")
                localStorage.setItem("fullname",userinfo[0].fullname);
                localStorage.setItem("id",userinfo[0].id)
                window.location.reload();
             }
             else{
                pickMsg("Fail...")
             }
         })

         
    }


  return (
      <div className='container mt-5'>
         <div className='row mt-5'>
             <div className='col-lg-4'></div>
             <div className='col-lg-4'>
                <p className='text-center text-danger'>{msg}</p>
                <div className='p-4 rounded shadow border'>
                      <div className=' d-flex text-center justify-content-center'>
                         <span className='text-success fs-5 mx-2'>
                              <FaUserAlt />
                          </span>
                            <h3 className='text-center text-success'> Login</h3>
                      </div>   
                     
                      <div className=' input-group mb-4 mt-4'> 
                          <span className=' input-group-text text-success'>
                               <FaEnvelope />
                          </span>
                          <input type="email"  className=' form-control' placeholder='Enter your Email' 
                          onChange={obj => pickUsername(obj.target.value)} />
                      </div>
                      <div className=' input-group mb-4 mt-4'> 
                          <span className=' input-group-text text-success'>
                               <FaLock />
                          </span>
                          <input type="password"  className=' form-control' placeholder='Enter your Password' 
                          onChange={obj => pickPassword(obj.target.value)}/>
                      </div>
                      <div class="text-center">
                         <button class="btn btn-success w-50"
                         onClick={loginCheck} >Login</button>
                    </div>
                </div>
             </div>
             <div className='col-lg-4'></div>
         </div>
      </div>
  )
}

export default MyLogin;
