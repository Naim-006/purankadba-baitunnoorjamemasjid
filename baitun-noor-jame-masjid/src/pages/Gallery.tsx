import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const images = [

     { url: "5.jpg", title: "Structure Overview", date: "March 2026" },
    { url: "6.jpg", title: "Pillar Detail", date: "March 2026" },
    { url: "7.jpg", title: "Site Close-up", date: "March 2026" },
    { url: "3.jpg", title: "Architectural Plan", date: "March 2026" },
    { url: "0.jpg", title: "Foundation & Pillars", date: "March 2026" },
    { url: "1.jpg", title: "Site Progress", date: "March 2026" },
    { url: "2.jpg", title: "Construction View", date: "March 2026" },
    
   
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            {t.gallery.title}
          </motion.h1>
          <p className="text-slate-600">{t.gallery.subtitle}</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold">{img.title}</h3>
                <p className="text-sm text-white/70">{img.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
