import React, { useState } from 'react';
import axios from 'axios';
import './css/tables.css';
import './css/signin.css';
import { useHistory } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Register() {
    const [users, setUsers] = useState({firstName:"", lastName:"", email:"",
                                        password:"", age:"", dob:"", mobileNo:"", gender:""});

    var history = useHistory();
    var [message, setMessage] = useState("");

    var handleChange = (args) =>
    {
      var copy = {...users}
      copy[args.target.name] = args.target.value;
      setUsers(copy);
    }

    const register = () =>
    {
        axios.post("http://localhost:8080/user/adduser", users)
        .then(response=>{
            console.log(response.data);
            console.log(typeof(response.data));
            if(response.data === "Added"){
                setUsers({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    age: "",
                    dob: "",
                    mobileNo: "",
                    gender: ""
                    });
                setMessage("Registered successfully...Please Login");
                setTimeout(() => {history.push('/signin')}, 2000);                
            }
            else{
                setMessage("Unable to register.. Please try again..");
                setTimeout(() => {setMessage('');}, 2000);
            }
        }).catch(error=>{
            console.log("error : "+ error);
        })
    }

    return (
        <>
        <Header></Header>
        <h2>Register</h2>
        <div className="registercontainer ">
            <table className='regtable'>
                <tbody>
                    <tr>
                        <td>
                            <label className='label'>First Name :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={users.firstName}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Last Name :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={users.lastName}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Email :</label>
                        </td>
                        <td>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={users.email}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Password :</label>
                        </td>
                        <td>
                            <input
                            type="password"
                            id="password"
                            name="password"
                            value={users.password}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Age :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="age"
                            name="age"
                            value={users.age}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Gender :</label>
                        </td>
                        <td>
                            <select className='dropdown' id="gender" name='gender' value={users.gender} onChange={handleChange}>
                            <option className='dropdown' value="">Select gender</option>
                            <option className='dropdown' value="MALE">Male</option>
                            <option className='dropdown' value="FEMALE">Female</option>
                            <option className='dropdown' value="OTHER">Other</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Date of Birth :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={users.dob}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Mobile No :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="mobile"
                            name="mobileNo"
                            value={users.mobileNo}
                            minLength={10}
                            maxLength={10}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button type="submit" onClick={register}>Register</button>
                            </div>        
                        </td>
                    </tr>
                </tbody>
            </table>
            {message && <p className="error-message" >{message}</p>}
            <p>If you already have account <i className="arrow down"></i></p>
            <a href="/signin">Sign In</a>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Register;
