import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            {t.location.title}
          </motion.h1>
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <MapPin size={18} className="text-primary" />
            <span>{t.location.address}</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.9705012112677!2d91.05451149999999!3d23.389284399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37546300076536f9%3A0x45a22e7eaa0a953a!2sPuran%20Kadba%20Nabab%20Bari%20Jame%20Masjid!5e0!3m2!1sen!2sbd!4v1774632829540!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mosque Location"
          />
          <div className="absolute bottom-6 right-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Puran+Kadba+Nabab+Bari+Jame+Masjid"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold shadow-xl flex items-center gap-2 hover:bg-primary hover:text-white transition-all"
            >
              <Navigation size={18} />
              {t.location.directions}
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Village", value: "Puran Kadba" },
            { title: "Upazila", value: "Barura" },
            { title: "District", value: "Cumilla" },
          ].map((item, i) => (
            <div key={i} className="glass p-6 rounded-2xl text-center">
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">{item.title}</p>
              <p className="text-xl font-bold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
