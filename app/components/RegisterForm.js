"use client";
import { useState } from 'react';

export default function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register Here</h3>

      <label htmlFor="username">Email</label>
      <input
        type="email"
        name="username"
        placeholder="Email"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
      />

      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
} 