import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/';
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isRegistering
      ? 'http://localhost:500/api/auth/register'
      : 'http://localhost:500/api/auth/login';

    const payload = isRegistering
      ? { username, email, password }
      : { email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.msg || data.error || 'Something went wrong');
        return;
      }

      if (isRegistering) {
        setMessage('✅ Registration successful! You can now log in.');
        setIsRegistering(false);
        setUsername('');
      } else {
        // Store token and user info
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user)); // Save user info (e.g., username)
        setMessage('✅ Login successful!');
        window.location.href = '/';
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <button type="submit">
          {isRegistering ? 'Register' : 'Login'}
        </button>

        {message && <p style={{ marginTop: '10px', color: 'red', textAlign: 'center' }}>{message}</p>}
      </form>

      <p style={{ marginTop: '15px', textAlign: 'center' }}>
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          type="button"
          style={{
            background: 'none',
            border: 'none',
            color: '#2196F3',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: 0,
          }}
          onClick={() => {
            setIsRegistering(!isRegistering);
            setMessage('');
          }}
        >
          {isRegistering ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
};

export default Login;
