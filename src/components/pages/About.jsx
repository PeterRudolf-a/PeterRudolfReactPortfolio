import React from "react";
import profileImg from "../../assets/profile.png";
import content from "../../content.json";

export default function About() {
  return (
    <div style={{ textAlign: "left", margin: "20px", padding: "20px" }}>
      <h1>About Me</h1>
      <img
        src={profileImg}
        alt="Profile"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />
      <p>{content.bio}</p>
    </div>
  );
}
// This component renders an "About Me" section with a profile image and a biography.
// The profile image is styled to be circular, and the biography is pulled from a content.json file.
