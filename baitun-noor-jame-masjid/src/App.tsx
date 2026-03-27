/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Donation = lazy(() => import('./pages/Donation'));
const Contact = lazy(() => import('./pages/Contact'));
const Location = lazy(() => import('./pages/Location'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Developer = lazy(() => import('./pages/Developer'));

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTopOnNavigate />
        <div className="relative min-h-screen flex flex-col">
          <div className="islamic-pattern" />
          <Navbar />
          
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/donation" element={<Donation />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/developer" element={<Developer />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>

          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </LanguageProvider>
  );
}
