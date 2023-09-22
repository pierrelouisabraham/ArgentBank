import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../resources/argentBankLogo.png'
import userLogo from '../../resources/circle-user-solid.svg'
import signOut from '../../resources/right-to-bracket-solid.svg'
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../features/auth/authSlice.js'


const Headers = () => {

 const token = useSelector(selectToken);
 const user = useSelector(selectUser);
 console.log({token})
if(!token) {
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
    <img src={userLogo} className='userLogo' alt='user logo'/>
      <Link className="main-nav-item" to="/auth"> 
        Sign In
      </Link>
    </div> 
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
    <Link to={'/profile'}>
    <img src={userLogo} className='userLogo' alt='user logo'/>
    <p>{user?.firstName}</p>
    </Link>
    <Link to={'/auth'}>
      <img src={signOut} className='signOutLogo' alt='sign out'/>
      <p>Sign Out</p>
    </Link>

    </div> 
  </nav>
);
}

};

export default Headers;