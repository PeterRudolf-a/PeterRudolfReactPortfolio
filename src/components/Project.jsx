import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

export default function Project(project) {
    return (
        <Link to={project.path}>
        <div className={project.className}>
            <h3>{project.name}</h3>
            <span>{project.description}</span>
        </div>
        </Link>
    );
}