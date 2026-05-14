import { Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Offer() {
  return (
    <section className="bg-linear-to-r from-primary to-orange-800 overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white leading-tight mb-4 tracking-tight">
            First Session? Take <span className="text-orange-200">10% OFF</span>
          </h2>
          <p className="text-orange-100 text-xl font-normal max-w-md mx-auto lg:mx-0">
            Make sure you get a good reset with code: <span className="font-bold underline decoration-orange-300/50 underline-offset-8">RR10</span>
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-stretch gap-6 w-full lg:w-auto"
        >
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-5 rounded-lg text-white shadow-2xl flex-1">
            <Gift className="text-orange-300 shrink-0" size={28} />
            <div className="space-y-0.5">
              <span className="block text-[10px] uppercase tracking-widest opacity-70 font-bold">Promo Code</span>
              <span className="text-xl font-black tracking-[0.2em]">RR10</span>
            </div>
          </div>
          <Link 
            to="/contact"
            className="bg-white text-primary px-10 py-5 rounded-lg font-headline font-bold text-lg shadow-2xl hover:scale-105 hover:bg-orange-50 transition-all active:scale-95 cursor-pointer whitespace-nowrap text-center flex items-center justify-center flex-1"
          >
            Claim Your Discount
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
