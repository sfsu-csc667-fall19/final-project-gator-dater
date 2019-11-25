import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setUsername, setPassword, setIsLoggedIn, setToken } from '../redux/actions/userActions';

const Login = ({ dispatch, username, password, isLoggedIn, token }) => {
  if (isLoggedIn) { return <Redirect to="/Notes" /> }

  const login = () => {
      const body = {
          username: username,
          password: password,
      };

    //   axios.post()
  };

  const updateUsername = (username) => {
    dispatch(setUsername(username));
  };

  const updatePassword = (password) => {
    dispatch(setPassword(password));
  };

  const updateToken = (token) => {
    dispatch(setToken(token));
  }

  return (
    <div className="text">
      Login page
      <div className="text">
        Username &nbsp;&nbsp;<input
        value={username}
        onChange={e => updateUsername(e.target.value)}
        id="username"/>

        <br />
        <br />
        
        Password &nbsp;&nbsp; <input
        type="password"
        value={password}
        onChange={e => updatePassword(e.target.value)}
        id="password"/>
      </div>

      <br />

      <div>
        <button className="button"
          onClick={login}>
          Login
        </button>
        <button className="button"
          onClick={createUser}>
          Create
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  isLoggedIn: state.userReducer.isLoggedIn,
  token: state.userReducer.token,
});

export default connect(mapStateToProps)(Login);