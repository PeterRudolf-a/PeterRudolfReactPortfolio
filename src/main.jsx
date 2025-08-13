import React from "react";
import ReactDOM from 'react-dom/client'; // Import the ReactDOM module
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import the createBrowserRouter and RouterProvider functions
import 'bootstrap/dist/css/bootstrap.min.css';

import netlifyIdentity from 'netlify-identity-widget'; // Import the netlify-identity-widget for authentication
netlifyIdentity.init(); // Initialize the Netlify Identity widget for user authentication

import App from './App'; // Import the App component
import About from './components/pages/About'; // Import the About component
import Portfolio from './components/pages/Portfolio'; // Import the Portfolio component
import Contact from './components/pages/Contact'; // Import the Contact component
import Resume from './components/pages/Resume'; // Import the Resume components
import FreelanceServices from './components/pages/FreelanceServices'; // Import the FreelanceServices component

// Create a router using the createBrowserRouter function
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <About />, // Set the About component as the default route
            },
            {
                path: '/portfolio',
                element: <Portfolio />, // Set the Portfolio component as a route
            },
            {
                path: '/contact',
                element: <Contact />, // Set the Contact component as a route
            },
            {
                path: '/resume',
                element: <Resume />, // Set the Resume component as a route
            },
            {
                path: '/freelance-services',
                element: <FreelanceServices />, // Set the FreelanceServices component as a route
            }
        ],
    }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} /> // Pass the router to the RouterProvider component
);
