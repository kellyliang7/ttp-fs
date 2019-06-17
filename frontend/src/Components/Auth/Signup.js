import React from 'react'
import '../../App.css'


const Signup = ({username, password, email, toggleForm, handleSignup, handleChange}) => {
  return (
  <div className="registerPage">
  <div className="form">
    <h1>Signup</h1>
    <form className="registerForm"onSubmit={handleSignup}>
    <div className="formRow">
      <label> 
       <input className="formInput"
        required
        value={username}
        name='username'
        type='text'
        placeholder="username"
        onChange={handleChange}
      />
      </label>
    </div>
    <div className="formRow">
      <label> 
        <input className="formInput"
          required
          value={email}
          name='email'
          type='email'
          placeholder="email"
          onChange={handleChange}
        />
      </label>
    </div>
    <div className="formRow">
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
    </div>
      <input className="submit"type='submit' value='CREATE' />
      <button onClick={toggleForm}>Have an account?</button>
    </form>
    </div>
  </div>)
}

export default Signup;