import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: t.about.intro_title,
      desc: t.about.intro_desc,
      icon: <Heart className="text-primary" size={32} />,
    },
    {
      title: t.about.vision_title,
      desc: t.about.vision_desc,
      icon: <Target className="text-primary" size={32} />,
    },
    {
      title: t.about.sadaqah_title,
      desc: t.about.sadaqah_desc,
      icon: <Eye className="text-primary" size={32} />,
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            {t.about.title}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl space-y-6 hover:shadow-xl transition-shadow border-slate-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
              <p className="text-slate-600 leading-relaxed">{section.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-20 px-8 rounded-[3rem] overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-slate-900" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.jpg')]" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="text-accent flex justify-center">
              <span className="text-6xl font-serif">"</span>
            </div>
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed italic">
              {t.about.quran_quote}
            </p>
            <div className="text-accent/60 text-sm font-bold uppercase tracking-widest">
              Al-Baqarah: 261
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
