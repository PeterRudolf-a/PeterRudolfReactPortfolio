export default function Navigation({ links }) { // pass in links as a prop
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> {/* create a list of links */}
            {links.map((link) => link)} {/* map over the links and return each one */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
