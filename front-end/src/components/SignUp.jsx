import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  const formContainerStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  };

  const burgerIconStyle = {
    width: '55px',
    height: 'auto',
    marginBottom: '20px'
  };

  const headingStyle = {
    color: '#FFA500',
    fontSize: '36px',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginTop: '5px'
  };

  const buttonStyle = {
    backgroundColor: '#FFA500',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    width: '100%',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <img
          src="/image/burger-icon-cartoon-hamburger-fast-food-symbol_80590-14811.jpg"
          alt="Burger Icon"
          style={burgerIconStyle}
        />
        <h1 style={headingStyle}>Food Recipe</h1>
        <h2 style={{ color: '#FFA500', fontSize: '24px', marginBottom: '20px' }}>Sign Up</h2>

        <form id="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>
        <p>
          Don't have an account? <Link to="/sign-in" style={{ color: '#FFA500' }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
