import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ProfileProvider } from '../src/components/contexts/ProfileContext';
import router from './routes';

function App() {
  return (
    <ProfileProvider>
      <RouterProvider router={router} />
    </ProfileProvider>
  );
}

export default App;