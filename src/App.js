import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';
import Header from './Components/Header';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';
import styled from 'styled-components';

// since this file is relatively small I will do most of the styling here
const StyledApp = styled.div`
  font-family: 'Quicksand', sans-serif;
    .page {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 5rem;
        font-weight: bold;
      }
      .field {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 10px;
          input {
            width: 25vw;
            height: 45px;
          }
      }
      form button {
        margin-top: 10px;
        width: 100%;
        background: #59399f;
        color: white;
        height: 45px;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        border: none;
        font-size: 2rem;
      }
    }

    header {
      display: flex;
      border-bottom: 3px solid black;
      font-size: 2rem;
      height: 15vh;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-weight: bold; 
        font-size: 3rem; 
        margin-left: 30px;
      }
      nav {
        display: flex;
        gap: 15px;
        margin-right: 10px;
       a {
          background: #59399f;
          width: fit-content;
          color: white;
          text-decoration: none;
          padding: 20px 5px;
          &:visited {
            color: white; 
          } 
        } 
      }
    }
    .friends-list {
        .loading {
          margin-top: 50px;
          font-size: 3rem;
        }
        .friends {
          margin-top: 50px;
          width: 60vw;
          text-align: left;
          .friend {
            display: flex;
            font-size: 2rem;
          }
        }
    }
`

function App() {
  const routes = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login /> },
    PrivateRoute({ path: '/friends', element: <FriendsList /> }),
    PrivateRoute({ path: '/friends/add', element: <AddFriend /> }),
    { path: '/logout', element: <Logout /> },
  ]);

  return (
      <div className="App">
        <StyledApp>
          <Header />
          {routes}
        </StyledApp>
      </div>
  );
}

export default App;
