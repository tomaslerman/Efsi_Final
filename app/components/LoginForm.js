"use client";
import { useState } from 'react';

export default function LoginForm({ onSubmit, error, onRegisterClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Here</h3>

      {error && <p className="error">{error}</p>}

      <label htmlFor="username">Username</label>
      <input
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Log In</button>

      <div className="social">
        <div className="go" onClick={onRegisterClick}>
          <i className="fab fa-google"></i> Register
        </div>
        <div className="fb">
          <i className="fab fa-facebook"></i> Facebook
        </div>
      </div>
    </form>
  );
} 