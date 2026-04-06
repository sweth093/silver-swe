'use client';

import { useState } from 'react';
import styles from './page.module.css';

import Link from 'next/link';

export default function Home() {
  const [query, setQuery] = useState('');
  const [chatReply, setChatReply] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setChatReply(null); // Clear previous reply

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: query }),
      });

      const data = await response.json();
      if (data.reply) {
        setChatReply(data.reply);
      } else {
        setChatReply('Error: Failed to fetch response.');
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      setChatReply('Error: An unexpected problem occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className="gradient-text">Search the Future</h1>
        <p className={styles.subtitle}>Enter your query to unlock premium insights via OpenRouter.</p>
        
        <div className={styles.authLinks}>
          <Link href="/login" className={styles.authLink}>Login</Link>
          <span className={styles.authDivider}>|</span>
          <Link href="/signup" className={styles.authLink}>Sign Up</Link>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="input-container">
            <input
              type="text"
              id="query-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. How does quantum computing work?"
              className="input-bar"
              disabled={isLoading}
            />
          </div>
          <button 
            type="submit" 
            className="submit-btn" 
            id="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Exploring...' : 'Explore'}
          </button>
        </form>

        {chatReply && (
          <div className={`${styles.replyContainer} slide-in`}>
            <h3>Insights</h3>
            <p>{chatReply}</p>
          </div>
        )}
      </div>
    </main>
  );
}
