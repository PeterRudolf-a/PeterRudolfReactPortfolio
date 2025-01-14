import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <h2>Portfolio</h2>
    <section class="flex-items">
      <Project name="Project 1" description="This is a project" />
      <Project name="Project 2" description="This is another project" />
      <Project name="Project 3" description="This is a third project" />
      <Project name="Project 4" description="This is a fourth project" />
    </section>
    <Footer />
  </StrictMode>,
)
