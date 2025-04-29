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
        I am a aspiring full stack developer. I have recently finished the University of Toronto's Coding Bootcamp, and I graduated from Durham College in the Computer Programmer and Analysis course. 
        I am looking forward to learning more about coding, and developing my skills. I am dedicated to identifying needs and delivering effective solutions to all problems.
        I am currently looking for a full-time position in the field of software development. I am a quick learner, and I am always looking to improve my skills.
      </p> {/* about me paragraph */}
    </div>
  )
}
