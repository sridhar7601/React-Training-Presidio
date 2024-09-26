import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProfileProvider } from './components/contexts/ProfileContext';
import HomePage from './components/pages/HomePage';
import LandingPage from './components/pages/LandingPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
      </ProfileProvider>
    </QueryClientProvider>
  );
};

export default App;