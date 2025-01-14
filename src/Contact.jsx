import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <h1>Contact</h1>
    <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />
        <button type="submit">Send</button>
    </form>
    <Footer />
  </StrictMode>,
)
