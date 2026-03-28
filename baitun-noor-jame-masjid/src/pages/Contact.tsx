import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            {t.contact.title}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">{t.contact.phone_display}</h3>
              <div className="space-y-4">
                <a href="tel:01783120999" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-primary hover:text-white transition-all group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Call Us</p>
                    <p className="text-xl font-bold">01783-120999</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Email Us</p>
                    <p className="text-xl font-bold">hnayeem005@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Visit Us</p>
                    <p className="text-xl font-bold">Puran Kadba, Barura, Cumilla</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[2.5rem] shadow-xl border-slate-100"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t.contact.success}</h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.name}</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.phone}</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="017XX-XXXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.message}</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  {t.contact.submit}
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
