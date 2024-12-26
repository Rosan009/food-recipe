import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication (replace with your API call logic)
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect to Home page
    navigate('/home');
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
      <div></div>
      <div style={formContainerStyle}>
        <img
          src="/image/burger-icon-cartoon-hamburger-fast-food-symbol_80590-14811.jpg"
          alt="Burger Icon"
          style={burgerIconStyle}
        />
        <h1 style={headingStyle}>Food Recipe</h1>
        <h2 style={{ color: '#FFA500', fontSize: '24px', marginBottom: '20px' }}>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>Sign In</button>
        </form>

        <p>
          Don't have an account? <a href="/sign-up" style={{ color: '#FFA500' }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
