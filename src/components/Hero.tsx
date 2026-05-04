import { motion } from 'motion/react';

export default function Hero() {
  return (
    <header className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          alt="Luxury Work Pod" 
          className="w-full h-full object-cover object-[70%_center]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfT2FSq-xMF-AUZ2GZVS8VJ7dFPpwdALxeaAcJiPai--N0dZ7oBPz_eLwhNM1BRnwXTy9D5cvbbVq3qD4aNdbyD0UrZdJVm2gEKNNrvR3F4ShcNLDCy4W9OSECMAREGME7_9Oi9z40nI38uGPdEpar7DNA7Ui-5EFkqWoekiT4sZ4kx-YF-LgWjPZ4MavRK1JtF6bBt8JcXTyPhuceeqJMDzbCjbVDf3LNKV3pqSjQFenEjwcALGA_s25W84UhTqVIfdHv2U6gu9s" 
        />
      </div>

      <div className="relative z-20 max-w-screen-2xl mx-auto px-6 md:px-12 w-full py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-3/5 w-full flex flex-col items-start"
        >
          <span className="inline-block text-orange-200 font-headline font-bold text-xs uppercase tracking-widest mb-4 drop-shadow-sm">
          TRANSIT REST FACILITY
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-[60px] font-headline font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-md">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">
              Rest, Refresh & Store
            </span> <br/>
          - Right Here at Vyttila 
         
          </h1>
          <p className="text-zinc-100 text-lg mb-10 leading-relaxed font-light drop-shadow-sm">
            Tired between journeys? We've got sleeping pods, shower facilities, and secure luggage storage - open 24x7 at the heart of Ernakulam's biggest transit hub.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-headline font-bold tracking-tight shadow-xl shadow-black/20 hover:translate-y-[-2px] transition-all active:scale-95 cursor-pointer">
              Enquire Now
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-md font-headline font-bold tracking-tight hover:bg-white/20 transition-all active:scale-95 cursor-pointer">
              View Locations
            </button>
          </div>
        </motion.div>

        {/* Floating Stats Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg flex-col gap-6 text-white min-w-[280px]"
        >
          <div className="space-y-1">
            <span className="block text-4xl font-black font-headline">4.9/5</span>
            <span className="text-xs uppercase tracking-wider opacity-70">User Rating</span>
          </div>
          <div className="h-px bg-white/20"></div>
          <div className="space-y-1">
            <span className="block text-4xl font-black font-headline">50+</span>
            <span className="text-xs uppercase tracking-wider opacity-70">Global Pods</span>
          </div>
          <div className="h-px bg-white/20"></div>
          <div className="space-y-1">
            <span className="block text-4xl font-black font-headline">10k+</span>
            <span className="text-xs uppercase tracking-wider opacity-70">Happy Clients</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
