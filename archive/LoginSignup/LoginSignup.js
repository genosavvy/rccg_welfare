import React, { useState } from 'react'
import './loginSignup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/padlock.png'

const LoginSignup = () => {

  const [Action, setAction] = useState("Register");

  return (
    <div className='container-login'>
      <div className='header'>
        <div className='text'>{Action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        
        <div className='input'>
          <img src={user_icon} alt="" className='icon_pix'/>
          <input type="text" placeholder='username'/>
        </div>
        {Action === "Login" ? <div></div> : <div className='input'>          
          <img src={email_icon} alt="" className='icon_pix'/>
          <input type="email" placeholder='email id'/>
        </div>}

        <div className='input'>
          <img src={password_icon} alt="" className='icon_pix'/>
          <input type="password" placeholder='password'/>
        </div>
      </div>
      { Action === "Register"? <div></div>: <div className="forgot-password">
        Remember Password ? <span>Click Here!</span>
      </div>}
      
      <div className="submit-container">
        <div className={Action === "Login" ? "submit gray":'submit'} onClick={() => {setAction("Register")}}>Sign Up</div>
        <div className={Action === "Register" ? "submit gray": "submit"} onClick={() => {setAction("Login")}}>Login</div>
      </div>


    </div>
  )
}

export default LoginSignup
