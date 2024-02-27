
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
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
      setIsAuthenticated(true);
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
    window.location.href = '/admin'; // Redirect to '/admin' page when admin login button is clicked
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Reset password logic here
    setShowResetPassword(false);
  };

  return (
    <div>
      <h1 className='title1'> Library Management System </h1>
      <div className='login-wrapper1'>
        <div className="login-container1">
          <h2>User Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group1">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field1"
              />
            </div>
            <div className="input-group1">
              <label>Password:</label>
              <div className="password-input1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field1"
                />
                <button type="button" onClick={togglePasswordVisibility} className="eye-button">
                  {showPassword ? "◉_◉" : "⚆_⚆"}
                </button>
              </div>
            </div>
            <div className="input-group1">
              <button type="submit" className="submit-button1">Login</button>
              <button type="button" onClick={handleClear} className="clear-button1">Clear</button>
            </div>
            <div className="input-group1">
              <span className="forgot-password1" onClick={handleForgotPassword}>Forgot your password?</span>
              <button type="button" onClick={handleAdminLogin} className="admin1">Admin Login</button> {/* Add Admin Login button */}
            </div>
          </form>
          {showResetPassword && (
            <div className="reset-password-container1">
              <h2>Reset Password</h2>
              <form onSubmit={handleResetPassword}>
                <div className="input-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="input-field1"
                  />
                </div>
                <div className="input-group1">
                  <label>New Password:</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="input-field1"
                  />
                </div>
                <div className="input-group1">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="input-field1"
                  />
                </div>
                <div className="input-group1">
                  <button type="submit" className="submit-button1">Submit</button>
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

export default Login;
