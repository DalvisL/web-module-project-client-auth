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
  h2 {
    font-size: 5rem;
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
