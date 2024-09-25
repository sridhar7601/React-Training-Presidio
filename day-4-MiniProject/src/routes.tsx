import { createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Auth/Login';
import Signup from './components/pages/Auth/Signup';
import HomePage from './components/pages/HomePage';
import GroomProfiles from './components/pages/GroomProfiles';
import BrideProfiles from './components/pages/BrideProfiles';
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
            path: 'groom',
            element: <GroomProfiles />,
          },
          {
            path: 'bride',
            element: <BrideProfiles />,
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