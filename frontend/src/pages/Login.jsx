import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css'

const Login = ({ setHideNavFooter }) => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: ""})
    useEffect(() => {
        setHideNavFooter(true);

        return () => {
            setHideNavFooter(false);
        };
    }, [setHideNavFooter]);

    const handleSignUpClick = () => {
        navigate('/');
    }

    
    const handleSubmit= async (e) =>{
        e.preventDefault();
        const response  = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json  = await response.json()
        console.log(json);
        if(json.success){
            alert("Logged in successfully")
            localStorage.setItem('token', json.authtoken);
            navigate('/shop')
        }
        else{
            alert("Invalid credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };


    return (

        <div className='loginsignup'>
            <div className="loginsignup-container">
                <form onSubmit = {handleSubmit}>
                <h1>Log in</h1>
                <div className='loginsignup-fields'>
                    <input type="email" name = "email" value = {credentials.email} onChange = {onChange} placeholder='Email Address' />
                    <input type="password" name = "password" value = {credentials.password} onChange = {onChange} placeholder='Password' />
                </div>
                <button>Log in</button>
                </form>
                <p className="loginsignup-login">
                    Create an Account? <span onClick={handleSignUpClick}>Sign-up Here</span>
                </p>
            </div>
        </div>
    )
}

export default Login;
