import { useState } from 'react'; // Import the useState hook
import '../../styles/App.css'; // Import the App.css file

// Create a function called isEmail that takes an email as an argument for validation
const isEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

// Create a function called Contact that returns a form with name, email, and message fields
export default function Contact() {

  // Create state variables for name, email, message, and error
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Create a function called handleSubmit that takes an event as an argument
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default behavior of the form

    // If the name field is empty, set the error message to 'Name is required'
    if (!name) {
      setError('Name is required');
      return;
    }
    // If the email field is empty, set the error message to 'Email is required'
    if (!email) {
      setError('Email is required');
      return;
    }
    // If the email field is not a valid email address, set the error message to 'Please enter a valid email address'
    if (!isEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    // If the message field is empty, set the error message to 'Message is required'
    if (!message) {
      setError('Message is required');
      return;
    }

    // If all fields are filled out, clear the form fields
    setError('');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <h1>Contact</h1>
      <p className='error-message'>{error}</p> {/* Display the error message */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'lightgrey', padding: '1rem' }}> {/* Add a form with a submit event handler */}
        <label htmlFor="name">Name:</label>
        {/* Add input fields for name, email, and message */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onMouseOut={(e) => setError('Name is required')}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onMouseOut={(e) => setError('Email is required')}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onMouseOut={(e) => setError('Message is required')}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}