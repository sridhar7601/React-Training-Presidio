import { createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Auth/Login';
import Signup from './components/pages/Auth/Signup';
import HomePage from './components/pages/HomePage';
import Profiles from './components/pages/Profiles'; 
import ProfileCreate from './components/pages/ProfileCreate';
import ProtectedRoute from './components/pages/Auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
        children: [
          {
            path: ':type',
            element: <Profiles />, // Reuse the same Profiles component
          },
          {
            path: ':type',
            element: <Profiles />, // Reuse the same Profiles component
          },
          {
            path: 'create-profile',
            element: <ProfileCreate />,
          }
        ],
      }
      
    ],
  },
]);

export default router;
