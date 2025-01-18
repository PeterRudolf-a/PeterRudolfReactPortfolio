import { Link } from 'react-router-dom'; // import the Link component from react-router-dom
import Navigation from './Navigation'; // import the Navigation component
import '../styles/App.css'; // import the App.css file

export default function Header() {
  return (
    <div>
      <header id="header"> {/* create a header element with the id of header */}
        <h1>Peter Rudolf</h1>
        <Navigation // render the Navigation component
          links={[
            <Link key={1} to="/"> {/* create a Link component with the to prop set to "/" for the default About page*/}
              About
            </Link>,
            <Link key={2} to="/portfolio"> {/* create a Link component with the to prop set to "/portfolio" for the Portfolio page*/}
              Portfolio
            </Link>,
            <Link key={3} to="/contact"> {/* create a Link component with the to prop set to "/contact" for the Contact page*/}
              Contact
            </Link>,
            <Link key={4} to="/resume"> {/* create a Link component with the to prop set to "/resume" for the Resume page*/}
              Resume
            </Link>,
          ]}
        />
      </header>
    </div>
  );
}
