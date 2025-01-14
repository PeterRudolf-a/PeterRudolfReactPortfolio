import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <h1>Resume</h1>
    <p>Download my <a href='#'>Resume</a></p>
    <h2>Front-end</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ul>
    <h2>Back-end</h2>
    <ul>
      <li>Express</li>
      <li>SQL</li>
      <li>MongoDB</li>
    </ul>
    <Footer />
  </StrictMode>,
)
