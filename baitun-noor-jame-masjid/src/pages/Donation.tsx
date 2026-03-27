import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Copy, Check, QrCode, ShieldCheck, HeartHandshake } from 'lucide-react';
import { cn } from '../lib/utils';

const Donation = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const donationMethods = [
    {
      id: 'bkash',
      title: t.donation.bkash_title,
      name: "Abdul Ohab",
      number: "01783-120999",
      color: "bg-[#d12053]",
      icon: <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#d12053] font-bold text-xl">b</div>
    },
    {
      id: 'bank',
      title: t.donation.bank_title,
      name: "",
      number: "0100274585875",
      color: "bg-[#006837]",
      icon: <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#006837] font-bold text-xl">J</div>
    }
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
            {t.donation.title}
          </motion.h1>
          <p className="text-slate-600">{t.donation.trust_msg}</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {donationMethods.map((method, i) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-8 rounded-[2.5rem] text-white space-y-8 shadow-2xl relative overflow-hidden",
                method.color
              )}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">{method.title}</h3>
                  <p className="text-white/80 text-sm">{t.donation.acc_name} {method.name}</p>
                </div>
                {method.icon}
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center justify-between border border-white/20 relative z-10">
                <div className="space-y-1">
                  <p className="text-xs text-white/60 uppercase font-bold tracking-widest">{t.donation.acc_no}</p>
                  <p className="text-2xl font-mono font-bold">{method.number}</p>
                </div>
                <button
                  onClick={() => handleCopy(method.number, method.id)}
                  className="w-12 h-12 bg-white text-slate-900 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  {copied === method.id ? <Check size={20} className="text-primary" /> : <Copy size={20} />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-white/60 uppercase tracking-widest relative z-10">
                <ShieldCheck size={14} />
                Secure & Verified
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl text-center space-y-4"
          >
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <QrCode size={24} />
            </div>
            <h4 className="font-bold text-slate-900">{t.donation.qr_title}</h4>
            <div className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
              <p className="text-xs text-slate-400 font-medium">QR Code Coming Soon</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-3xl text-center space-y-4 md:col-span-2 flex flex-col justify-center"
          >
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
              <HeartHandshake size={24} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 italic">
              {t.donation.reminder}
            </h4>
            <p className="text-slate-500 max-w-md mx-auto">
              {t.donation.trust_msg}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
