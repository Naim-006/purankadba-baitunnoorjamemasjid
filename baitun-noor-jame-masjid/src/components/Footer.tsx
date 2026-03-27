import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import MosqueIcon from './MosqueIcon';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <MosqueIcon size={20} fill="currentColor" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Baitun Noor</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            {t.hero.title}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-accent">{t.nav.contact}</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              <span>01783-120999</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              <span>hnayeem005@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" />
              <span>Puran Kadba, Barura, Cumilla</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
            <a href="/about" className="hover:text-primary transition-colors">{t.nav.about}</a>
            <a href="/donation" className="hover:text-primary transition-colors">{t.nav.donation}</a>
            <a href="/location" className="hover:text-primary transition-colors">{t.nav.location}</a>
            <a href="/contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center space-y-2">
        <p className="text-xs text-slate-500">
          {t.footer.rights}
        </p>
        <p className="text-xs text-slate-400 italic">
          Developed with sincerity by <Link to="/developer" className="text-primary font-bold hover:text-accent transition-colors">Naim Hossian</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
