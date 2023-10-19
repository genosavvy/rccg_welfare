import { useState } from "react";
import Instance from "../app/src/Components/Instance";

import '../LoginSignup/loginSignup.css';

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/padlock.png';
import user_icon from '../Assets/user.png';


const Login = () => {
    const crediential = {
        username: "",
        password: ""
    };
    const [Action, setAction] = useState("Register");
    const [auth_data, setAuth_data] = useState( crediential );
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    //  Handle changes to input
    const handleChange = (event)=>{
        setAuth_data({...auth_data, [event.target.name]: event.target.value})
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        Instance.post("/users/login", {...auth_data})
        .then( (res) => {
            if (res.status === 201){
                setAuthenticated(!authenticated)
                return
            }
            localStorage.setItem("authenticated", true);
            })
        .catch( (error) => {
            console.log(error)
        })
    }
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
export default Login
    