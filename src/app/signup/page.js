'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    console.log('Signing up:', name, email);
    // Add signup logic here
  };

  return (
    <main className={styles.main}>
      <div className="input-container">
        <h1 className="gradient-text">Join the Future</h1>
        <p className={styles.subtitle}>Create an account to start exploring with OpenRouter.</p>
        
        <form onSubmit={handleSignup} className={styles.form}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="input-bar"
            style={{ marginBottom: '1rem' }}
            required
          />
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
            style={{ marginBottom: '1rem' }}
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="input-bar"
            style={{ marginBottom: '1.5rem' }}
            required
          />
          
          {error && (
            <p style={{ color: '#ff4d4d', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: '500' }}>
              {error}
            </p>
          )}

          <button type="submit" className="submit-btn" style={{ width: '100%' }}>Create Account</button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'rgba(57, 204, 204, 0.7)' }}>
          Already have an account? <Link href="/login" style={{ color: '#39cccc', fontWeight: '600' }}>Login</Link>
        </p>
      </div>
    </main>
  );
}
