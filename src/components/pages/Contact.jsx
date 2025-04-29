import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../../styles/App.css";

// Initialize EmailJS once
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

const isEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Name is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!isEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!message) {
      setError("Message is required");
      return;
    }

    setError("");
    setSuccess(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        }
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setError("There was a problem sending your message.");
      });
  };

  return (
    <div>
      <h1>Contact</h1>
      {success && (
        <p className="success-message">
          Your message has been sent successfully!
        </p>
      )}
      <p className="error-message">{error}</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "lightgrey",
          padding: "1rem",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
