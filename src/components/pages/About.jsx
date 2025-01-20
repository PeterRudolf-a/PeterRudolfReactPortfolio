import React from 'react' // import react module

// About page component
export default function About() {
  return (
    <div style={{ textAlign: "left", margin: "20px", padding: "20px" }}>
      <h1>About Me</h1>
      <img
       src="https://avatars.githubusercontent.com/u/77426539?v=4" alt="Profile" 
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
       /> {/* profile picture/avatar */}
      <p>
        I am a aspiring full stack developer. I am currently enrolled in the University of Toronto's Coding Bootcamp. 
        I am looking forward to learning more about coding, and developing my skills. I am hopeful that I will be able to work full time as a developer in the near future.
      </p> {/* about me paragraph */}
    </div>
  )
}
