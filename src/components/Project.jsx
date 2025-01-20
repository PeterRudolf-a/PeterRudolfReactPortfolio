import React from 'react'; // Import the React library
import { Link } from 'react-router-dom'; // Import the Link component from the React Router library
import '../styles/Portfolio.css'; // Import the Project.css file

// Create a new component named Project
export default function Project(project) {
    return (
        <Link to={project.deployed} className={project.className}> {/* Create a link to the deployed project if applicable */}
            <h3>{project.name}</h3>
            <br />
            <a href={project.path} target="_blank" rel="noreferrer"> {/* Create a link to the project's GitHub repository */}
                Github Repository
            </a>
        </Link>
    );
}