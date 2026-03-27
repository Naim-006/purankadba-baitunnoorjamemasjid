import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Home, Info, HandHeart, MapPin, Phone, Code, Images } from 'lucide-react';
import MosqueIcon from './MosqueIcon';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/', icon: <Home size={18} /> },
    { name: t.nav.about, path: '/about', icon: <Info size={18} /> },
    { name: t.nav.gallery, path: '/gallery', icon: <Images size={18} /> },
    { name: t.nav.donation, path: '/donation', icon: <HandHeart size={18} /> },
    { name: t.nav.location, path: '/location', icon: <MapPin size={18} /> },
    { name: t.nav.contact, path: '/contact', icon: <Phone size={18} /> },
    { name: t.nav.developer, path: '/developer', icon: <Code size={18} /> },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-3',
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <MosqueIcon size={20} fill="currentColor" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-primary leading-tight">
              Baitun Noor
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
              Jame Masjid
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-slate-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-1 text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <Globe size={14} />
            {language === 'bn' ? 'English' : 'বাংলা'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/donation"
            className="flex items-center gap-1.5 bg-primary text-white px-3 py-2 rounded-xl text-xs font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all"
          >
            <MosqueIcon size={14} fill="currentColor" />
            {t.hero.cta}
          </Link>
          <button
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="text-[10px] font-bold bg-slate-100 px-2 py-2 rounded-xl"
          >
            {language === 'bn' ? 'EN' : 'বাং'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-3 text-base font-semibold p-4 rounded-2xl transition-all',
                    location.pathname === link.path 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'text-slate-600 hover:bg-slate-50'
                  )}
                >
                  <span className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center",
                    location.pathname === link.path ? "bg-white/20" : "bg-slate-100"
                  )}>
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
