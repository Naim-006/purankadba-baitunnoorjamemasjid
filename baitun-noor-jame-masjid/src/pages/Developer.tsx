import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Facebook, Mail, Code2, Rocket, Palette, Zap, Cloud } from 'lucide-react';

const Developer = () => {
  const { t } = useLanguage();

  const skills = [
    { name: t.developer.skills[0], icon: <Code2 size={18} /> },
    { name: t.developer.skills[1], icon: <Zap size={18} /> },
    { name: t.developer.skills[2], icon: <Palette size={18} /> },
    { name: t.developer.skills[3], icon: <Rocket size={18} /> },
    { name: t.developer.skills[4], icon: <Cloud size={18} /> },
  ];

  const socials = [
    { icon: <Mail size={20} />, link: "mailto:hnayeem005@gmail.com", label: "Email" },
    { icon: <Github size={20} />, link: "https://github.com/Naim-006", label: "GitHub" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/naimhossain78", label: "LinkedIn" },
    { icon: <Facebook size={20} />, link: "https://www.facebook.com/Naim.hossain.355d", label: "Facebook" },
  ];

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
        <header className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-slate-900"
          >
            {t.developer.title}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </header>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-primary rounded-full rotate-6 group-hover:rotate-3 transition-transform w-48 h-48 mx-auto" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/dev.jpg" 
                  alt="Naim Hossian" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">{t.developer.name}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.developer.bio}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{t.developer.skills_title}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 shadow-sm">
                    <span className="text-primary">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent">{t.developer.mission_title}</h3>
              <p className="text-xl font-medium leading-relaxed italic">
                "{t.developer.mission_desc}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
