import axios from 'axios';
import React from 'react';
import { useState } from "react";
import './css/signin.css';
import { useHistory } from 'react-router-dom';
import Header from './header';
import Logo from '../src/images/Logo.png'
import Footer from './footer';

function Signin() {
debugger;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);   
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Reset form fields
        setEmail('');
        setPassword('');
    };

    const handlePostRequest = () =>
    {
        const data = 
        {
            email : email,
            password : password,
        };
        
        axios.post("http://localhost:8080/login/authenticate", data)
        .then(response => {
            debugger;
            if (email!=='' && response.data!=='Invalid Email') {
                sessionStorage.setItem("email",email);
                history.push('/dashboard');
            } else {
                setErrorMessage('Invalid credentials.Please provide valid credentials.');
                setTimeout(() => {setErrorMessage('');}, 1000); 
            }
            
        })
        .catch(error => {
            console.log("Error is => "+error);
        });

    };

    return(
    <>
        <Header></Header>
        <h2>Sign In</h2>
        <div>
            <div className='logo'>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="logincontainer">          
                <form onSubmit={handleFormSubmit}>
                    <div>
                    <label className='label'>Email</label><br></br>
                    <input type="email" value={email} onChange={handleEmailChange} required />
                    </div><br></br>
                    <div>
                    <label className='label'>Password</label><br></br>
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                    </div><br></br>
                    <button type="submit" onClick={handlePostRequest}>Sign In</button>
                </form>
                {errorMessage && <p className="error-message" >{errorMessage}</p>}
                <p>If you don't have account <i className="arrow down"></i></p>
                <a href="/register" target=''>Sign Up</a>
            </div>
        </div>
        <Footer></Footer>
    </>
    )

}

export default Signin;