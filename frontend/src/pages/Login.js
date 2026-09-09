import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import loginIcons from '../assest/signin.gif' 
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const[showPassword, setShowPassword] = useState(false)
  const [data,setData] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const{ name, value} = e.target
    setData((prev) => {
      return{
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   
  }
 console.log("data login", data)
  return (
   <section id="login">


    <div className='max-auto container px-4'>

      <div className="bg-white p-5 w-full max-w-sm mx-auto ">
       <div className="w-20 h-20 mx-auto">

         <div>

           <img src={loginIcons} alt="login icons" className='w-20 mx-auto' />

         </div>
      

        </div>

        <form 
        onSubmit= {handleSubmit}
        className="pt-6 flex flex-col gap-2">


          <div className="grid">
            <label>Email:</label>
          <div  className="bg-slate-200 p-2"> 
             <input 
               type="email" 
               onChange={handleChange} name="email" value={data.email}
               placeholder="Enter your email"
               className="h-full w-full outline-none bg-transparent" /></div>
          </div>
          
           <div>
              <label>Password:</label>
          <div className="bg-slate-200 p-2 flex"> 

             <input
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password"
              onChange={handleChange} name="password"  
              value={data.password}
              className="h-full w-full outline-none bg-transparent" />

             <div className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} text-xl>
              <span>
                {
                  showPassword ? (
                     <FaEyeSlash />

                  )
                  : (
                    <FaEye />
                  )
                }
              
               

                </span>
              </div>
          </div>
          
         <Link to={"/forgot-password"} className="block w-fit ml-auto hover:underline hover:text-amber-600 mt-1">
         Forgot Password?
         </Link>

          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4" >Login</button>
        </form>
        <p>
          I don't have an account? <Link to={"/sign-up"} className="text-amber-500 hover:underline hover:text-amber-600 my-5">Sign up</Link>
        </p>

      </div>
    </div>
   </section>
  )
}

export default Login