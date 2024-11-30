import './Signup.css'
import React, { useState } from 'react';


export const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Signup Successful!');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

