import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import ComicPage from './components/ComicPage/ComicPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import PhotosPage from './components/PhotosPage/PhotosPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comic" element={<ComicPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
