import React, { useState } from 'react';
import '../App.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setMessage('Enter your email and password to continue.');
      return;
    }

    if (email === 'user@example.com' && password === 'password') {
      setMessage('Login successful. Welcome back.');
    } else {
      setMessage('That email and password combination is not valid.');
    }
  };

  return (
    <main className="login-page">
      <div className="login-accent login-accent-pink" />
      <div className="login-accent login-accent-cyan" />
      <section className="login-shell" aria-label="TikTok login">
        <div className="login-brand">
          <span className="brand-mark" aria-hidden="true">
            ♪
          </span>
          <span>TikTok</span>
        </div>

        <div className="login-copy">
          <p className="eyebrow">Welcome back</p>
          <h1>Log in to TikTok</h1>
          <p className="subtitle">Manage your shop, discover what&apos;s trending, and keep creating.</p>
        </div>

        <div className="social-options" aria-label="Social login options">
          <button type="button" className="social-button">
            <span className="social-icon google-icon" aria-hidden="true">G</span>
            Continue with Google
          </button>
          <button type="button" className="social-button">
            <span className="social-icon apple-icon" aria-hidden="true">●</span>
            Continue with Apple
          </button>
        </div>

        <div className="divider"><span>or</span></div>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="field-label" htmlFor="email">Email or username</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label className="field-label" htmlFor="password">Password</label>
          <div className="password-field">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <a className="forgot-link" href="#forgot-password">Forgot password?</a>
          <button type="submit" className="submit-button">Log in</button>
        </form>

        {message && <p className="login-message" role="status">{message}</p>}
        <p className="signup-prompt">
          Don&apos;t have an account? <a href="#sign-up">Sign up</a>
        </p>
      </section>
      <p className="legal-copy">By continuing, you agree to TikTok&apos;s Terms of Service and confirm that you have read our Privacy Policy.</p>
    </main>
  );
}

export default LoginPage;