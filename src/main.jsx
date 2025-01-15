import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './App';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/resume',
                element: <Resume />,
            }
        ],
    }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
