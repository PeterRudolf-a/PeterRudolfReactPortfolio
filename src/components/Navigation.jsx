export default function Nav(links) {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={linkStyle}>
            <a href={links.about}>About</a>
          </div>
          <div style={linkStyle}>
            <a href={links.portfolio}>Portfolio</a>
          </div>
          <div style={linkStyle}>
            <a href={links.contact}>Contact</a>
          </div>
          <div style={linkStyle}>
            <a href={links.resume}>Resume</a>
          </div>
        </section>
      </nav>
    );
  }
  