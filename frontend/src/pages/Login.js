import React from 'react'
import { useState } from 'react'
import loginIcons from '../assest/signin.gif' 
import { FaEye } from "react-icons/fa";

const Login = () => {
  const[showPassword, setShowPassword] = useState(false)
  return (
   <section id="login">
    <div className='max-auto container px-4'>

      <div className="bg-white p-2 py-5 w-full max-w-md mx-auto ">
       <div className="w-20 h-20 mx-auto">
         <img src={loginIcons} alt="login icons" className='w-20 mx-auto' />
        </div>
        <form>
          <div className="grid">
            <label>Email:</label>
          <div  className="bg-slate-200 p-2"> 
             <input type="email"  placeholder="Enter your email" className="h-full w-full outline-none" /></div>
          </div>
          
           <div>
              <label>Password:</label>
          <div className="bg-slate-200 p-2 flex"> 
             <input type={showPassword ? "" : "password"} placeholder="Enter your password" className="h-full w-full outline-none" />
             <div className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              <span><FaEye /></span>
              </div>
          </div>
          </div>
          <button >Login</button>
        </form>

      </div>
    </div>
   </section>
  )
}

export default Login