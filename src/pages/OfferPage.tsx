import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, ShieldCheck, Zap, Bell, Waves, Warehouse, Lightbulb, Plug, Fan, Smartphone, GlassWater, Shirt, Archive, Fingerprint, Eye, ChevronLeft, ChevronRight, ShowerHead, Bath, Sparkles, Droplets } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';

const hotspots = [
  { top: '35%', left: '42%', title: 'Climate Controlled', description: 'Precision AC and air filtration for your perfect environment.' },
  { top: '22%', left: '18%', title: 'Mood Lighting', description: 'Mood lighting adjustable to your recovery needs.' },
  { top: '52%', left: '55%', title: 'Smart Controls', description: 'Adjust temperature, lighting, and sound from the central console.' },
  { top: '72%', left: '38%', title: 'Ergonomic Comfort', description: 'Medical-grade mattresses designed for maximum pressure relief.' },
  { top: '45%', left: '78%', title: 'Sound Sanctuary', description: 'Acoustic engineering that blocks out the chaos of the transit hub.' }
];

export default function OfferPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const galleryImages = [
    { 
      url: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=1200",
      span: "col-span-2 row-span-2",
      label: "Premium Pod Interior"
    },
    { 
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
      span: "col-span-1 row-span-1",
      label: "Luxe Showers"
    },
    { 
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
      span: "col-span-1 row-span-1",
      label: "Waiting Lounge"
    },
    { 
      url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200",
      span: "col-span-2 row-span-1",
      label: "Privacy & Silence"
    }
  ];

  const navigate = (direction: 'next' | 'prev') => {
    if (selectedIndex === null) return;
    if (direction === 'next') {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    } else {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section id="pods" className="pt-16 pb-4">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold text-sm tracking-widest block mb-4 uppercase font-headline"
          >
            REVOLUTIONIZING REST
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-8"
          >
           <span className="text-primary">Sleep Well.</span><br/>Travel Better.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-2xl font-normal leading-relaxed"
          >
           Private sleeping pods for men and women - clean, comfortable, and bookable by the hour. Whether it's a short nap or a longer break, we've got a pod ready for you.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid Services/Features */}
      <section className="pt-4 pb-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-8">
          {/* Full Width Climate Controlled Hero */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[500px] md:min-h-[700px] shadow-2xl border border-zinc-100"
          >
            <img 
              alt="High-tech rest pod interior" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPiNPjB3L2mQ8wGGlCLQjMJDxV3ZfGNrKjS5L6yAKJ82J0Cegx86eUWOmjmLpBiQqBmc1YS1U02KjUK_Gw0uAw6mvQiQ8Wh3tsZw6yWH17IPWojnKOGwkbVa0zLyATcTWWtK9jyBLeYDMyMABrdpI0BV3dixV4y7jZ_FTdq2k4D5mdply4X812cwtCv8WN40EJcEs9I9_hOsbxUBwW0vQ83a-25XMusY29CAkJ2UgdkH4IgW8SAgvj1vZJDo5Rl6e_VOZPH7qwD4" 
            />
            
            {/* Hotspots Container */}
            <div className="absolute inset-0 z-40 pointer-events-none">
              {hotspots.map((spot, i) => (
                <div 
                  key={i}
                  className="absolute pointer-events-auto"
                  style={{ top: spot.top, left: spot.left }}
                >
                  <button 
                    onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                    className="relative w-10 h-10 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer group -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="absolute w-full h-full bg-white/30 rounded-full animate-ping"></div>
                    <div className={`relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 bg-white transition-all duration-300 ${activeHotspot === i ? 'border-primary rotate-45' : 'border-white'}`}>
                      {activeHotspot === i ? <X size={12} className="text-primary" /> : <Plus size={12} className="text-primary" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeHotspot === i && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 15, x: '-50%' }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, scale: 0.9, y: 15, x: '-50%' }}
                        className="hidden md:block absolute bottom-full left-1/2 mb-6 w-56 bg-zinc-900/95 backdrop-blur-xl text-white text-xs p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 border border-white/20 text-center"
                      >
                        <strong className="block text-primary mb-1 text-sm font-bold">{spot.title}</strong>
                        <p className="font-normal opacity-80 leading-relaxed">{spot.description}</p>
                        {/* Arrow Down */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-zinc-900/95"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="relative z-10 p-12 md:p-20 bg-linear-to-t from-zinc-900/90 via-zinc-900/40 to-transparent">
              <div className="space-y-6">
                <h3 className="font-headline text-4xl md:text-5xl text-white font-bold tracking-tight">Climate Controlled</h3>
                <p className="text-white/80 max-w-lg text-lg leading-relaxed font-normal">
                  Experience a sanctuary where every detail is optimized. Every pod features dedicated silent AC units and air filtration systems for the perfect atmosphere.
                </p>

                {/* Mobile Hotspot Info Box */}
                <div className="md:hidden">
                  <AnimatePresence mode="wait">
                    {activeHotspot !== null ? (
                      <motion.div 
                        key={activeHotspot}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 space-y-2 mt-8"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <Plus size={16} className="text-white" />
                          </div>
                          <strong className="text-primary text-lg font-headline font-black">{hotspots[activeHotspot].title}</strong>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed font-normal italic">
                          "{hotspots[activeHotspot].description}"
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white/40 text-xs mt-8 flex items-center gap-2 italic uppercase tracking-widest font-bold"
                      >
                        <span className="w-8 h-px bg-white/20"></span>
                        Tap the plus icons for details
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supporting Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border border-zinc-100 group"
            >
              <div className="space-y-8">
                <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ShieldCheck size={32} className="text-primary group-hover:text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline text-2xl font-bold text-zinc-900">Cleaned After Every Use</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-normal">Each pod is cleaned and reset after every guest. Fresh linen, every time.</p>
                </div>
              </div>
              <div className="pt-8">
                <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase bg-orange-50 px-3 py-1 rounded-full">100% DISINFECTED</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#D1F2FF] p-10 rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border border-blue-100 group"
            >
              <div className="space-y-8">
                <div className="w-16 h-16 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Zap size={32} className="text-blue-500 group-hover:text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline text-2xl font-bold text-zinc-900">What's Inside Your Pod</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed font-normal">Personal lighting, plug point, small fan, mobile holder, bottle holder, dress hook, and a storage box underneath - everything you need, nothing you don't.</p>
                </div>
              </div>
              <div className="flex -space-x-3 pt-8">
                {[
                  { icon: <Lightbulb size={16} />, label: 'Lighting' },
                  { icon: <Plug size={16} />, label: 'Power' },
                  { icon: <Fan size={16} />, label: 'Fan' },
                  { icon: <Smartphone size={16} />, label: 'Mobile Holder' },
                  { icon: <GlassWater size={16} />, label: 'Bottle Holder' },
                  { icon: <Shirt size={16} />, label: 'Hooks' },
                  { icon: <Archive size={16} />, label: 'Storage' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    className="w-11 h-11 rounded-full border-4 border-white bg-white flex items-center justify-center text-blue-600 shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white group/icon relative hover:z-30 hover:-translate-y-1"
                  >
                    <div className="group-hover/icon:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-[10px] text-white px-2.5 py-1.5 rounded-md opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all whitespace-nowrap z-40 shadow-xl">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary p-10 rounded-xl flex flex-col justify-between text-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              <div className="space-y-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Fingerprint size={32} className="text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline text-3xl font-bold">Your Space, Your Privacy</h3>
                  <p className="text-white/80 text-sm leading-relaxed font-normal">Every pod has its own curtain for complete privacy. Pods are for single occupancy. Children under 10 may accompany an adult at the receptionist's discretion.</p>
                </div>
              </div>
              <Link 
                to="/contact"
                className="mt-10 bg-white text-primary px-8 py-3 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:bg-orange-50 transition-all self-start shadow-xl active:scale-95 cursor-pointer"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Refresh Section */}
      <section className="py-24 border-t border-zinc-100" id="refresh">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-primary font-bold text-sm tracking-widest block uppercase font-headline">REFRESH</span>
                <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                  In and Out. <br/><span className="text-primary">Fresh</span> and <span className="text-primary">Ready</span>.
                </h2>
                <p className="text-zinc-500 text-xl font-normal leading-relaxed">
                  Walk in, shower, freshen up, and go. No complex booking needed - just show up when you need that reset.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Zap size={20}/>, t: "Walk-in only - no advance booking required" },
                  { icon: <Bell size={20}/>, t: "Charged by the hour with fair pricing" },
                  { icon: <Droplets size={20}/>, t: "Shower liquid and shampoo provided" },
                  { icon: <Bath size={20}/>, t: "Bath towels available for purchase at the venue" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-zinc-50 rounded-lg border border-zinc-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="text-primary shrink-0">{item.icon}</div>
                    <p className="text-sm font-bold text-zinc-800 leading-snug">{item.t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative group">
                <img 
                  alt="Premium shower area" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-muqeO-VWZP2PE5gFxGZPs4elL0PW7OaLVvlzS3EeGvDT664dUumTCGLtNqsYT94B-pz0wlC0TnY84UbDlere8eN6rmhuxH_MwsyE7K6flqNV2WE6KOKCsb8GVrQ7sQvadARJrkQDzvFPT2mfIj5j_1prE56FNgznyM7KoMg8S2nRC0ii0IwBD0CniKHywpGSnAazqJnuCSBorLALw50SQyDNhz7QlETm4M9mduEkUfzWBHZa7DwHJOOJXNxQCWHlMuC97XTzLTY" 
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloakroom Section */}
      <section className="py-24 border-t border-zinc-100" id="cloakroom">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative group">
                <img 
                  alt="Secure cloakroom storage" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC7OCs2Kr0MudETdXSlWSocghPUahI5Pa5McnxQrAHT2vh5bZevO7fI0oIIjZ-tCrDDGez4z2KNuYOHll-znUHpAsHmTEMitP_GOrej2CyXGJxM7bBKbsWio07wt0O-Sg1YmOcQJre9X9miqJpuSopFHR83AFiklFOVyaQdbeNcEeHlgs6IkR7YRxHxIDvN2UtHIq23d-rIkGKiJGORE9QkebSYp5RMpJLr_wWS21ovGmKMFYkRhALy0cq6CVrd6gM1K1mZEuwuqw" 
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-lg shadow-xl flex items-center gap-4 border border-white/50">
                   <Warehouse className="text-primary" />
                   <div className="space-y-0.5">
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Storage Status</span>
                      <span className="block text-sm font-bold text-zinc-900">85% Secured Space</span>
                   </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-primary font-bold text-sm tracking-widest block uppercase font-headline">CLOAKROOM</span>
                <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                  Travel <span className="text-primary">Light</span>. <br/>Safe <span className="text-primary">Storage</span>.
                </h2>
                <p className="text-zinc-500 text-xl font-normal leading-relaxed">
                  Leave your bags with us and move around freely. Secure, staff-managed storage with simple hourly pricing by bag size.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-xl space-y-5">
                  <p className="text-zinc-900 font-bold text-sm uppercase tracking-widest">STORAGE AVAILABILITY</p>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-center">
                      <span className="text-3xl shrink-0">💼</span>
                      <p className="text-zinc-700 text-base leading-relaxed">
                        <span className="font-bold text-zinc-900">Standard</span> - Backpacks, handbags, cabin bags and similar.
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="text-3xl shrink-0">🧳</span>
                      <p className="text-zinc-700 text-base leading-relaxed">
                        <span className="font-bold text-zinc-900">Large</span> - Full-size trolleys, oversized bags and similar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden border border-zinc-100 shadow-2xl shadow-zinc-200/50">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary border-b border-zinc-100">
                        <th className="px-8 py-5 font-headline font-bold text-white text-sm uppercase tracking-widest">Duration</th>
                        <th className="px-8 py-5 font-headline font-bold text-white text-sm uppercase tracking-widest text-center">Standard</th>
                        <th className="px-8 py-5 font-headline font-bold text-white text-sm uppercase tracking-widest text-right">Large</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                      {[
                        { d: "Up to 6 hours", s: "49", l: "79" },
                        { d: "Up to 12 hours", s: "79", l: "119" },
                        { d: "Up to 24 hours", s: "119", l: "179" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-orange-50/30 transition-colors">
                          <td className="px-8 py-6">
                             <div className="font-bold text-zinc-900">{row.d}</div>
                          </td>
                          <td className="px-8 py-6 text-center">
                            <span className="font-black text-zinc-800">₹{row.s}</span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="bg-white px-4 py-2 rounded-md text-primary font-black border border-orange-100 shadow-sm">
                              ₹{row.l}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-zinc-400 italic bg-zinc-50 p-6 rounded-lg border-l-4 border-zinc-200">
                Pricing is per individual bag. Tags will be assigned for every item. Staffed 24x7.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pt-24 pb-12 border-t border-zinc-100">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-primary font-bold text-sm tracking-widest block uppercase font-headline">VISUAL TOUR</span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                Step Inside <span className="text-primary">Rest Refresh</span>.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedIndex(i)}
                className={`${item.span} relative group overflow-hidden rounded-xl bg-zinc-100 shadow-lg cursor-pointer`}
              >
                <img 
                  src={item.url} 
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Eye className="text-white" size={24} />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer z-50 p-2 bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>

            <button 
              onClick={() => navigate('prev')}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer z-50 p-4 bg-white/10 rounded-full hidden md:block"
            >
              <ChevronLeft size={40} />
            </button>

            <button 
              onClick={() => navigate('next')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer z-50 p-4 bg-white/10 rounded-full hidden md:block"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src={galleryImages[selectedIndex].url} 
                alt={galleryImages[selectedIndex].label}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                <p className="text-white font-headline font-bold text-xl">{galleryImages[selectedIndex].label}</p>
                <div className="flex gap-2 mt-4">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === selectedIndex ? 'w-8 bg-primary' : 'w-2 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
