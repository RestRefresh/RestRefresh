import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark left-to-right gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20 z-10"></div>
        <img
          alt="Luxury Work Pod"
          className="w-full h-full object-cover object-[70%_center]"
          src="/images/RestRefresh-banner.jpg"
        />
      </div>

      <div className="relative z-20 max-w-screen-2xl mx-auto px-6 md:px-12 w-full py-16 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl w-full flex flex-col items-start"
        >
          <span className="inline-block text-orange-200 font-headline font-bold text-xs uppercase tracking-widest mb-4 drop-shadow-sm">
            TRANSIT REST FACILITY
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-[60px] font-headline font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-md">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">
              Rest, Refresh & Store
            </span> <br />
            <span className="block text-2xl md:text-[36px] font-medium text-orange-100/90 mt-2 tracking-[0.5px]">
              Right Here at Vyttila
            </span>
          </h1>
          <p className="text-zinc-100 text-lg mb-10 leading-relaxed font-normal drop-shadow-sm">
            Tired between journeys? We've got sleeping pods, shower facilities, and secure luggage storage - open 24x7 at the heart of Ernakulam's biggest transit hub.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-8 py-3 rounded-md font-headline font-bold tracking-tight shadow-xl shadow-black/20 hover:translate-y-[-2px] transition-all active:scale-95 cursor-pointer"
            >
              Enquire Now
            </Link>
            <button
              onClick={() => {
                document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-md font-headline font-bold tracking-tight hover:bg-white/20 transition-all active:scale-95 cursor-pointer"
            >
              View Location
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
