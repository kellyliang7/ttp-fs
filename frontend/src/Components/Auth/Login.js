import React from 'react'
import '../../App.css'


const Login = ({username, password, toggleForm, handleLogin, handleChange}) => {
  return (
  <div className="registerPage">
    <div className="form">
    <h1>Login</h1>
    <form className="registerForm"onSubmit={handleLogin}>
      <label> 
       <input className="formInput"
        required
        value={username}
        name='username'
        type='text'
        placeholder="email"
        onChange={handleChange}
      />
      </label>
      <label> 
        <input className="formInput"
          required
          value={password}
          name='password'
          type='password'
          placeholder="password"
          onChange={handleChange}
        />
      </label>
      <input className="submit" type='submit' value='LOGIN' />
      <button onClick={toggleForm}>Don't have an account?</button>
    </form>
    </div>
  </div>)
}

export default Login;