import { useState } from 'react';
import '../../styles/App.css';

const isEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setError('Name is required');
      return;
    }
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!isEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!message) {
      setError('Message is required');
      return;
    }

    setError('');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <h1>Contact</h1>
      <p className='error-message'>{error}</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'lightgrey', padding: '1rem' }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update here
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update here
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update here
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}