import React,{useState} from 'react';
import './Login_page.css';
import axios from 'axios';
const LoginPage = () => {
    const [container, setContainer] = useState(false);
    const changeSignup = () => {
        setContainer(true);
    }
    const changeSignin = () => {
        setContainer(false);
    }
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const checkLogin = async () =>{
        let email = document.getElementById("emailUser").value
        let password = document.getElementById("passwordUser").value
        if(email===""||password==""){
            alert("Please fill all inputs");
        }
        else if (!validateEmail(email)){
            alert(email+" is not a valid email");
        }
        else if(password.length<8){
            alert("Password too short (least 8 symbols)!");
        }
        else{
            const data = {
                email:  email,
                password: password
            }
            try{
            const val = await axios.post("/account/login", data);
            if(val.status===200){
                localStorage.setItem('email', val.data.user_info.email);
                alert("Sign in successfully!");
                window.location.reload();
            }}catch(err){
                if(err.response){
                    alert('Email or password incorrect!');
                }
            }
        }
    }
    const checkSignup = async () =>{
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let username = document.getElementById("username").value
        if(email===""||password===""||username===""){
            alert("Please fill all inputs !");
        }
        else if (!validateEmail(email)){
            alert(email+" is not a valid email");
        }
        else if(password.length<8){
            alert("Password too short (least 8 symbols)!");
        }
        else{
            const data = {
                name: username,
                email:  email,
                password: password,
                sex: 1,
                phone: "Add your number",
                role: 0
            }
            try{
            const val = await axios.post("/account/register", data);
            if(val.status===200){
                alert("Register successfully!")
                changeSignin()
            }}catch(err){
                if(err.response){
                    alert("Something went wrong");
                }
            }
        }
    }
    const _handlerLoginEnter =(e) => {
        if(e.key === 'Enter'){
            checkLogin();
        }
    }
    const _handlerSignuptEnter =(e) => {
        if(e.key === 'Enter'){
            checkSignup();
        }
    }
    return (
        <div className="login-page">
            <div className={container?"container right-panel-active":"container"} id="container">
                <div className="form-container sign-up-container">
                    <div className='form-input'>
                        <h1>Create Account</h1>
                        <input type="text" id='username' onKeyDown={_handlerSignuptEnter} placeholder="Name"/>
                        <input type="email" id='email' onKeyDown={_handlerSignuptEnter} placeholder="Email"/>
                        <input type="password" id='password' onKeyDown={_handlerSignuptEnter} placeholder="Password"/>
                        <button onClick={function(e){checkSignup()}}>Sign Up</button>
                    </div>
                </div>
                <div className="form-container sign-in-container">
                    <div className='form-input'>
                        <h1>Sign in</h1>
                        <input type="email" id='emailUser' onKeyDown={_handlerLoginEnter} placeholder="Email"/>
                        <input type="password" id='passwordUser' onKeyDown={_handlerLoginEnter} placeholder="Password"/>
                        <button onClick={function(e){checkLogin()}}>Sign In</button>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={changeSignin}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={changeSignup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;