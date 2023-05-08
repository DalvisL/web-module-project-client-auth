import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
        <header>
            <h1>FRIENDS DATABASE</h1>
                <div className='nav'>
                    <nav>
                        <NavLink className='navlink' to='/'>LOGIN</NavLink>
                        <NavLink className='navlink' to='/friends'>FRIENDS LIST</NavLink>
                        <NavLink className='navlink' to='/friends/add'>ADD FRIEND</NavLink>
                        <NavLink className='navlink' to='/logout'>LOGOUT</NavLink>
                    </nav>  
                </div>
                
        </header>
    </>
  )
}

export default Header