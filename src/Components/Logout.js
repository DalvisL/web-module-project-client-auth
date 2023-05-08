import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');

        const options = {
            headers: {
                Authorization: token
            }
        };
        axios.post('http://localhost:9000/api/logout', {}, options)
            .then(res => {
                localStorage.removeItem('token');
                navigate('/login');
            })
            .catch(err => console.error(err));
    }, []);

  return (
    <>
        <div>
            <h2>SEE YOU LATER!</h2>
        </div>
    </>
  )
}


export default Logout;