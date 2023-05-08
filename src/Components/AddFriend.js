import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddFriend = () => {
    const navigate = useNavigate();
    const [newFriend, setNewFriend] = useState({
        name: '',
        email: '',
        id: Date.now(),
        age: null
    });
    const token = localStorage.getItem('token');
    const options = {
        headers: {
            Authorization: token
        }
    };

    const handleChange = (evt) => {
        setNewFriend({
            ...newFriend,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/friends', newFriend, options)
            .then(res => { 
                console.log(res)
                setNewFriend({
                    name: '',
                    email: '',
                    id: Date.now(),
                    age: null
                }); 
                navigate('/friends');
            })
            .catch(err => console.error(err));

    };

  return (
    <> 
        <div className='add-friend page'>
            <h2>ADD FRIEND</h2>
            <form onSubmit={evt => handleSubmit(evt)}>
                <div className='field'>
                    <label htmlFor="name">Friend Name</label>
                    <input
                        onChange={evt => handleChange(evt)}
                        type="text"
                        name="name"
                        id='name'
                        value={newFriend.name}
                        required
                    /> 
                </div>
                <div className='field'>
                <label htmlFor="email">EMAIL</label>
                    <input
                        onChange={evt => handleChange(evt)}
                        type="email"
                        name="email"
                        id='email'
                        value={newFriend.email}
                        required
                    />
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    </>
  )
}

export default AddFriend