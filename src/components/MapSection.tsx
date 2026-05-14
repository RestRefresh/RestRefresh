import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function MapSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-6xl font-headline font-extrabold tracking-tight text-zinc-900 leading-tight">
            Find Us at Vyttila
          </h2>
          <p className="text-zinc-500 font-normal max-w-2xl mx-auto leading-relaxed text-lg italic">
            Right at the junction - minutes from the bus hub and metro station.
          </p>
        </div>
        
        <div className="h-[550px] rounded-lg overflow-hidden shadow-2xl border border-zinc-100 relative group">
          {/* Real Google Map */}
          <iframe
            title="Vyttila Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.213123456789!2d76.321123!3d9.971456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da5d3a5a5a1%3A0xa9f8c6e7f8d5c4b1!2sRest%20Refresh%20Vyttila!5e0!3m2!1sen!2sin!4v1715537136000!5m2!1sen!2sin"
            className="w-full h-full border-0 grayscale brightness-110 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Overlay gradient - themed to the site */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
          
          {/* Animated Center Marker - Pulse Dot */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
          >
            <div className="relative flex items-center justify-center">
              {/* Pulsing Rings */}
              <div className="absolute w-16 h-16 bg-primary/40 rounded-full animate-ping"></div>
              <div className="absolute w-32 h-32 bg-primary/20 rounded-full animate-ping [animation-delay:0.5s]"></div>
              
              {/* Solid Inner Dot */}
              <div className="relative w-5 h-5 bg-primary rounded-full border-2 border-white shadow-[0_0_20px_rgba(255,145,77,0.5)]"></div>
              
              {/* Label */}
              <div className="absolute top-full mt-6 bg-zinc-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-2xl border border-white/20 uppercase tracking-widest">
                Rest Refresh Vyttila
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-10 left-10 w-[calc(100%-5rem)] max-w-sm bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 z-10"
          >
            <div className="flex items-center gap-6">
              <div className="bg-primary text-white p-4 rounded-lg shadow-lg">
                <MapPin size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-headline font-bold text-xl text-zinc-900">Rest Refresh Vyttila</h4>
                <p className="text-zinc-500 font-normal text-sm leading-relaxed">
                  Above Vyttila Metro Station, Kochi, Kerala 682019
                </p>
                <div className="flex gap-4 mt-2 items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Open 24/7</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">All Services Available</span>
                  <a 
                    href="https://maps.app.goo.gl/7CZDMWMuxqPs3cQq5" 
                    target="_blank" 
                    rel="noreferrer"
                    className="ml-auto text-primary hover:underline text-xs font-bold"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
