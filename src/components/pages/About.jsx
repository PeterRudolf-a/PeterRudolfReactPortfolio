import React from "react"; // import react module
import profileImg from '../../assets/profile.png'

// About page component
export default function About() {
  return (
    <div style={{ textAlign: "left", margin: "20px", padding: "20px" }}>
      <h1>About Me</h1>
      <img
        src={profileImg}
        alt="Profile"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />
      {/* profile picture/avatar */}
      <p>
        Full-stack developer with hands-on experience building scalable web
        applications using JavaScript, TypeScript, React, Node.js, and MongoDB.
        Graduate of the University of Toronto Coding Bootcamp and Durham
        College’s Computer Programmer and Analysis program. Strong problem
        solver with a passion for learning, collaboration, and delivering
        polished code. Adaptable team player with excellent self-management and
        communication skills.
      </p>
      {/* about me paragraph */}
    </div>
  );
}
