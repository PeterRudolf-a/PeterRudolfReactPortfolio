import React from 'react'; // Import the React library
import { Link } from 'react-router-dom'; // Import the Link component from the react-router-dom library
import GitHubIcon from '../assets/GitHub.png'; // Import the GitHub icon
import LinkedInIcon from '../assets/LinkedIn.png'; // Import the LinkedIn icon
import StackOverflow from '../assets/StackOverflow.png'; // Import the StackOverflow icon
import '../styles/Footer.css'; // Import the Footer component's stylesheet

// create the Footer component
export default function Footer() {
    return (
        <footer className="main-footer" id="footer"> 
            <Link to="https://github.com/PeterRudolf-a" className="footer-link">
                <img src={GitHubIcon} className='footer-img' alt="GitHub>" /> {/* Add the GitHub icon and link */}
            </Link>
            <Link to="https://www.linkedin.com/in/peter-milos-rudolf/" className="footer-link">
                <img src={LinkedInIcon} className='footer-img' alt="LinkedIn" /> {/* Add the LinkedIn icon and link */}
            </Link>
            <Link to="https://stackoverflow.com/users/29234622/peter-rudolf" className="footer-link">
                <img src={StackOverflow} className='footer-img' alt="StackOverflow" /> {/* Add the StackOverflow icon and link */}
            </Link>
        </footer>
    );
}