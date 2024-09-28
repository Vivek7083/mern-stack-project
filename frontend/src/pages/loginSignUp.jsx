import React, {useEffect, useState} from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom';


const LoginSignUp = ({ setHideNavFooter }) => {

    const navigate = useNavigate();
    
    const [credentials, setCredentials] = useState({name : "", email: "", password: "", cpassword : ""})

    useEffect(() => {
        setHideNavFooter(true);

        return () => {
            setHideNavFooter(false);
        };
    }, [setHideNavFooter]);

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleSubmit= async (e) =>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response  = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1YmRhNTE3ZDQ1YTNhODFkYjkxZjM5In0sImlhdCI6MTcwMDUzOTIzOX0.LVNHbuMy3vWO9sR1Eob25LvPYSy8aGOCoswYcyod5ao"
            },
            body: JSON.stringify({name, email, password})
        });
        const json  = await response.json()
        console.log(json);
        if(json.success){
        localStorage.setItem('token', json.authtoken);
        navigate('/shop')
        }
        else{
            alert("User already exists")
        }
    }

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className = 'loginsignup'>
            <div className="loginsignup-container">
                <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='loginsignup-fields'>
                    <input type="text" name = "name" placeholder = "Your Name" id = "name" onChange={onChange} minLength={3} required/>
                    <input type="email" name = "email" placeholder='Email Address' id = "email" onChange={onChange}  required/>
                    <input type="password" name = "password" placeholder = 'Password' id = "password" onChange={onChange} minLength={5} required  />
                    <input type="password" name = "cpassword" placeholder = 'Password' id = "cpassword" onChange={onChange} minLength={5} required/>
                </div>
                <button type = "submit">Continue</button>
                <p className="loginsignup-login">
                    Already have an account? <span onClick={handleLoginClick}>Login Here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name = "" id = ""/><p>By continuing, I agree to the terms of use and privacy policy</p>
                </div>
                </form>
            </div>
        </div>
    )
}

export default LoginSignUp