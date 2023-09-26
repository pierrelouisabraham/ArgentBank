import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, selectToken } from '../../features/auth/authSlice.js'
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../common/apiHandler.js'


const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = useSelector(selectToken)

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);

  const handleLoginChange = (e) => {
    setLogin(e.target.value)

  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getToken(login, password)
      .then(data => {
        console.log(data.body.token)
        dispatch(setToken(data.body.token))
        navigate('/profile')
      })
      .catch((error) => {
        console.error('Error in one or two fields:', error);
        setError('Authentification error in one or two fields: ' + error.message);
      });
  }

  return (
    <>
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={login} onChange={handleLoginChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <span className="error">{error}</span>}


        <button className="sign-in-button" type='submit'>Sign In</button>

      </form>
    </section></>
  );
};

export default Auth;