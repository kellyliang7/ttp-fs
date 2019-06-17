import React from 'react'
import '../../App.css'


const Signup = ({username, password, email, toggleForm, handleSignup, handleChange}) => {
  return (<div>
    <h2>Signup</h2>
    <form onSubmit={handleSignup}>
      <label> Username
       <input 
        required
        value={username}
        name='username'
        type='text'
        placeholder="Username"
        onChange={handleChange}
      />
      </label>
      <label> Email
        <input 
          required
          value={email}
          name='email'
          type='email'
          placeholder="email"
          onChange={handleChange}
        />
      </label>
      <label> Password
        <input 
          required
          value={password}
          name='password'
          type='password'
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
      <input type='submit' value='Sign-up' />
      <button onClick={toggleForm}>Have an account?</button>
    </form>
  </div>)
}

export default Signup;