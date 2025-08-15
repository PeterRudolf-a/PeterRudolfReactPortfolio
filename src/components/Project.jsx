import React from "react";
import "../styles/Portfolio.css";
import placeholderImage from "../assets/placeholder-project.jpeg"; // create this placeholder image

export default function Project({ name, className, path, deployed, image }) {
  const backgroundStyle = {
    backgroundImage: `url(${image || placeholderImage})`,
  };

  return (
    <div className={`${className} flex-item`} style={backgroundStyle}>
      <h3>{name}</h3>
      <div className="project-links">
        {deployed && (
          <a href={deployed} target="_blank" rel="noreferrer">
            Live Site
          </a>
        )}
        <a href={path} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

// This component renders a project card with its name, links to the live site (if available), and the GitHub repository.
