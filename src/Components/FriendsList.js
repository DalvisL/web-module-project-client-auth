import React, { useState, useEffect } from 'react'
import axios from 'axios';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    async function getFriends() {
        const token = localStorage.getItem('token');
        const options = {
            headers: {
                Authorization: token
            }
        }
        try {
            const res = await axios.get('http://localhost:9000/api/friends', options)
                .then(res => setFriends(res.data))
                .catch(err => console.error(err));

        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getFriends();
    }, [])


  return (
    <>
        <div className='friends-list page'>
            <h2>FRIENDS LIST</h2>
            {friends.length === 0 ? <h3>Loading...</h3> : null}
            {friends.map(friend => {
                return (
                    <div key={friend.id} className='friend'>
                        <h3>{`- ${friend.name.toUpperCase()}`}</h3>
                        <h3>{`- ${friend.email.toUpperCase()}`}</h3>
                    </div>
                )
            })}  
        </div>
        
    </>
  )
}

export default FriendsList
