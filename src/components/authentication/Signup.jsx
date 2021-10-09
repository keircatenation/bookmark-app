import React, {useEffect, useState} from 'react'
//import { app } from '../../../config';

export default function Signup(props) {
    const [credentials, setCred] = useState({
        firstName:"",
        lastName:"",
        password:"",
        email:""
    });
    const [valid, setValid] = useState(true);
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("signup", credentials) 
    }
    const validate = (e) => {
        e.target.value.length < 8 ? setValid(false) : setValid(true)
    }
    const handleChange = e => {
        if (e.target.id === "password") {
            validate(e)
        }
        setCred({
            ...credentials,
            [e.target.id]: e.target.value
        })
    }
    // useEffect(validate(credentials.password), [credentials.password.length])
    // //useEffect on the length of password, and run validate on that

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5>Sign In</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                    id="firstName"
                    value={credentials.firstName}
                    onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                    id="lastName"
                    value={credentials.lastName}
                    onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    id="email"
                    value={credentials.email}
                    onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    minLength="8"
                    pattern=""
                    value={credentials.password} 
                    onChange={handleChange}
                    onFocus={validate}
                    />
                </div>
                <div className="error" hidden={valid}>Password must be at least 8 characters</div>
                <div className="input-field">
                    <button className="btn deep-purple darken-2" >Signup</button>
                </div>
            </form>
        </div>
    )

}