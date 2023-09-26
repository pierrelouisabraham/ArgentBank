import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../resources/argentBankLogo.png'
import userLogo from '../../resources/circle-user-solid.svg'
import signOut from '../../resources/right-to-bracket-solid.svg'
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectUser, logout } from '../../features/auth/authSlice.js'


const Headers = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  console.log({ token })
  if (!token) {
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        
          
          <Link className="main-nav-item" to="/login">
          <img src={userLogo} className='userLogo' alt='user logo' />
            Sign In
          </Link>
        
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className='singIn'>
          <Link to={'/profile'} className='main-nav-item '>
            <img src={userLogo} className='userLogo' alt='user logo' />
            {user?.firstName}
          </Link>
          <Link to={'/login'} onClick={() => dispatch(logout())} className='main-nav-item '>
            <img src={signOut} className='signOutLogo' alt='sign out' />
            Sign Out
          </Link>

        </div>
      </nav>
    );
  }

};

export default Headers;