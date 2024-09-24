import { createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import ChooseProfile from './components/pages/ChooseProfile';
import GroomProfiles from './components/pages/GroomProfiles';
import BrideProfiles from './components/pages/BrideProfiles';
import ProfileCreate from './components/pages/ProfileCreate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },{
    path: '/choose-profile',
    element: <ChooseProfile />,
    children: [
      {
        path: 'groom',
        element: <GroomProfiles />,
      },
      {
        path: 'bride',
        element: <BrideProfiles />,
      },
    ],
  },
  {
    path: '/create-profile',
    element: <ProfileCreate />,
  }
]);

export default router;