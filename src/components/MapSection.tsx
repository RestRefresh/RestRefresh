import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-6xl font-headline font-extrabold tracking-tight text-zinc-900 leading-tight">
            Find Us at Vyttila
          </h2>
          <p className="text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed text-lg italic">
            Right at the junction - minutes from the bus hub and metro station.
          </p>
        </div>
        
        <div className="h-[550px] rounded-lg overflow-hidden shadow-2xl border border-zinc-100 relative group">
          {/* Real Google Map */}
          <iframe
            title="Vyttila Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.172352163914!2d76.320473!3d9.970868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0d1e3e7e73%3A0x2f90119339e3b9!2sVyttila%20Junction!5e0!3m2!1sen!2sin!4v1714722800000!5m2!1sen!2sin"
            className="w-full h-full border-0 grayscale opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none ring-1 ring-inset ring-black/5"></div>
          
          {/* Animated Pin */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-150"></div>
              <div className="relative bg-primary text-white p-4 rounded-full shadow-2xl border-4 border-white">
                <MapPin size={32} fill="white" />
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 z-10"
          >
            <div className="flex items-center gap-6">
              <div className="bg-primary text-white p-4 rounded-lg shadow-lg">
                <MapPin size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-headline font-bold text-xl text-zinc-900">Rest Refresh Vyttila</h4>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Above Vyttila Metro Station, Kochi, Kerala 682019
                </p>
                <div className="flex gap-4 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Open 24/7</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">All Services Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
