import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Admin.css";

const Admin = ({ setIsAuthenticated }) => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform basic authentication
    if ((username === 'ankit1234' && password === 'anku@1234') || (username === 'karmu' && password === 'kar123') || (username === 'kamalesh' && password === 'kamal14') || (username === 'kanna' && password === 'kanna10') || (username === 'shriman' && password === 'shriman08') || (username === 'keerthi' && password === 'keerthi12')) {
      // Set authentication state to true
      //setIsAuthenticated(true);
      // Show success toast
      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Navigate to next page or perform any other action upon successful login
    } else {
      toast.error('Invalid username or password', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    setShowResetPassword(true);
  };

  const handleAdminLogin = () => {
    window.location.href = '/login'; 
  };

  const  handleDashboard = () => {
    window.location.href ='/Admin/AdminDashboard';
  }

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Reset password logic here
    setShowResetPassword(false);
  };

  return (
    <div>
      <h1 className='title'> Library Management System </h1>
      <div className='login-wrapper'>
        <div className="login-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                />
                <button type="button" onClick={togglePasswordVisibility} className="eye-button">
                  {showPassword ? "◉_◉" : "⚆_⚆" }
                </button>
              </div>
            </div>
            <div className="input-group">
              <button type="submit" onClick ={handleDashboard} className="submit-button">Login</button>
              <button type="button" onClick={handleClear} className="clear-button">Clear</button>
            </div>
            <div className="input-group">
              <span className="forgot-password" onClick={handleForgotPassword}>Forgot your password?</span>
              <button type="button" onClick={handleAdminLogin} className="admin">User Login</button> {/* Add Admin Login button */}
            </div>
          </form>
          {showResetPassword && (
            <div className="reset-password-container">
              <h2>Reset Password</h2>
              <form onSubmit={handleResetPassword}>
                <div className="input-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="input-field"
                  />
                </div>
                <div className="input-group">
                  <label>New Password:</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="input-field"
                  />
                </div>
                <div className="input-group">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="input-field"
                  />
                </div>
                <div className="input-group">
                  <button type="submit" className="submit-button">Submit</button>
                </div>
              </form>
            </div>
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Admin;
