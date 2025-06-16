import React from "react";
import { Outlet } from 'react-router-dom'; // Import the Outlet component from the react-router-dom library
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import './styles/App.css'; // Import the App.css file

function App() {
  return (
    <>
      <Header /> {/* Add the Header component */}
      <div className="container">
        <div className="content" style={{ marginTop: '20px' }}>
          <Outlet /> {/* Add the Outlet component to display the current page */}
        </div>
      </div>
      <Footer /> {/* Add the Footer component */}
    </>
  );
}

export default App;
