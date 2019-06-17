import React from 'react'
import '../../App.css'


const Signup = ({username, password, email, toggleForm, handleSignup, handleChange}) => {
  return (
  <div className="singupPage">
  <div className="form">
    <h1>Signup</h1>
    <form className="registerForm"onSubmit={handleSignup}>
    <div className="formRow">
      <label> 
       <input 
        required
        value={username}
        name='username'
        type='text'
        placeholder="Username"
        onChange={handleChange}
      />
      </label>
    </div>
    <div className="formRow">
      <label> 
        <input 
          required
          value={email}
          name='email'
          type='email'
          placeholder="Email"
          onChange={handleChange}
        />
      </label>
    </div>
    <div className="formRow">
      <label> 
        <input 
          required
          value={password}
          name='password'
          type='password'
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
    </div>
      <input type='submit' value='CREATE' />
      <button onClick={toggleForm}>Have an account?</button>
    </form>
    </div>
  </div>)
}

export default Signup;