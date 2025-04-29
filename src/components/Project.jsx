import React from 'react';
import '../styles/Portfolio.css';

export default function Project(project) {
    return (
        <div className={project.className}>
            <h3>{project.name}</h3>
            <div className="project-links">
                {project.deployed && (
                    <a href={project.deployed} target="_blank" rel="noreferrer">
                        Live Site
                    </a>
                )}
                <a href={project.path} target="_blank" rel="noreferrer">
                    GitHub Repo
                </a>
            </div>
        </div>
    );
}
