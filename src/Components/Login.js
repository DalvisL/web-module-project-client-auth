import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '' 
    });
    const [isInvalid, setIsInvalid] = useState(false);

    const navigate = useNavigate();
    const handleChange = (evt) => {
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value
        });
    };
    const saveToken = (token) => {
        localStorage.setItem('token', token);
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                saveToken(res.data.token);
                navigate('/friends');
                setIsInvalid(false)
            })
            .catch(err => {
                console.error(err)
                setIsInvalid(true);
                });
    };
    return (
        <>
        <div className='login page'>
            {isInvalid ? <p>Invalid Credentials</p> : null}
            <h2>Login</h2>
            <form onSubmit={evt => handleSubmit(evt)}>
                <div className='field'>
                    <label htmlFor="username">USERNAME</label>
                    <input
                        onChange={evt => handleChange(evt)}
                        type="text"
                        name="username"
                        id='username'
                        value={credentials.username}
                        required
                    /> 
                </div>
                <div className='field'>
                <label htmlFor="password">PASSWORD</label>
                    <input
                        onChange={evt => handleChange(evt)}
                        type="password"
                        name="password"
                        id='password'
                        value={credentials.password}
                        required
                    />
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
        </>
    );
};

export default Login;