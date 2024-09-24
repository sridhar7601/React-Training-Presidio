// src/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import ChooseProfile from './components/pages/ChooseProfile';
// import GroomProfiles from './pages/GroomProfiles';
// import BrideProfiles from './pages/BrideProfiles';

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
    element: <ChooseProfile />
  },
]);

export default router;