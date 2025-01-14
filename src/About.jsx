import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <h1>About Me</h1>
    <img src="https://avatars.githubusercontent.com/u/77426539?v=4" alt="Profile" />
    <p>
      I am a software engineer with a passion for web development. I am a
      self-taught developer with experience in JavaScript, React, and Node.js. I
      am always eager to learn new technologies and apply them to my projects.
    </p>
    <Footer />
  </StrictMode>,
)
