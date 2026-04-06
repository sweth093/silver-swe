'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../page.module.css'; // Reusing base styles

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email);
    // Add auth logic here
  };

  return (
    <main className={styles.main}>
      <div className="input-container">
        <h1 className="gradient-text">Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to access your futuristic search tools.</p>
        
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="input-bar"
            style={{ marginBottom: '1rem' }}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input-bar"
            style={{ marginBottom: '1.5rem' }}
            required
          />
          <button type="submit" className="submit-btn">Login</button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'rgba(57, 204, 204, 0.7)' }}>
          Don't have an account? <Link href="/signup" style={{ color: '#39cccc', fontWeight: '600' }}>Sign Up</Link>
        </p>
      </div>
    </main>
  );
}
