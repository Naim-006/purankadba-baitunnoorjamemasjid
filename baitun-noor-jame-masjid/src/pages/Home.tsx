import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const galleryImages = [
    "0.jpg",
    "5.jpg",
    "6.jpg",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white/50" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl" 
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-accent/30"
          >
            <Construction size={14} />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight",
              language === 'bn' ? 'font-sans' : 'font-sans tracking-tight'
            )}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/donation"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2"
            >
              {t.hero.cta}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Emotional Message */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl shadow-2xl relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">"</span>
            </div>
            <p className="text-xl md:text-2xl italic text-slate-700 leading-relaxed font-medium">
              {t.home.emotional_msg}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">{t.home.progress_title}</h2>
            <p className="text-slate-500">Current Phase: Foundation & Pillars</p>
          </div>
          
          <div className="relative h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '45%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-primary progress-bar-glow flex items-center justify-end px-2"
            >
              <span className="text-[10px] font-bold text-white">45%</span>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center text-xs font-bold text-slate-400 uppercase tracking-tighter">
            <div>Planning</div>
            <div className="text-primary">Construction</div>
            <div>Completion</div>
          </div>
        </div>
      </section>

      {/* Gallery Slideshow Section */}
      <section className="py-20 px-4 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.gallery.title}</h2>
            <p className="text-slate-600">{t.gallery.subtitle}</p>
          </div>

          <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={galleryImages[currentSlide]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-black/20" />

            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    currentSlide === i ? "bg-white w-8" : "bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Matters */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {t.home.why_matters_title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.home.why_matters_desc}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Capacity", value: "500+" },
                { label: "Education", value: "Madrasa" },
                { label: "Community", value: "Center" },
                { label: "Spiritual", value: "Library" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-400 uppercase font-bold">{item.label}</p>
                  <p className="text-xl font-bold text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/3.jpg" 
              alt="Mosque Architectural Plan" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-primary rounded-[2rem] p-12 text-center text-white space-y-8 shadow-2xl shadow-primary/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight relative z-10">
            {t.home.cta_banner_title}
          </h2>
          <div className="relative z-10">
            <Link
              to="/donation"
              className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-slate-900 transition-all shadow-xl"
            >
              {t.home.cta_banner_btn}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
