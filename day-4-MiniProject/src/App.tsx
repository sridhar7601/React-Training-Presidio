import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProfileProvider } from './components/contexts/ProfileContext';

// lazy load the pages
const HomePage = lazy(() => import('./components/pages/HomePage'));
const LandingPage = lazy(() => import('./components/pages/LandingPage'));

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    //query client provider for accessing react query
    <QueryClientProvider client={queryClient}>
      {/* context provider */}
      <ProfileProvider>
        <Router>
          {/* suspence utilized for lazy loading feature & fallback is to show till component paints on screen */}
          <Suspense fallback={<div>Loading...</div>}> 
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </Suspense>
        </Router>
      </ProfileProvider>
    </QueryClientProvider>
  );
};

export default App;
