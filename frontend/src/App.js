import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import UnemploymentAppealsPage from './pages/UnemploymentAppealsPage';
import OtherAreasPage from './pages/OtherAreasPage';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/unemployment-appeals" element={<UnemploymentAppealsPage />} />
              <Route path="/other-areas" element={<OtherAreasPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
