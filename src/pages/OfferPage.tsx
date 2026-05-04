import { motion } from 'motion/react';
import { Plus, X, ShieldCheck, Zap, Bell, Waves, Warehouse } from 'lucide-react';

const hotspots = [
  { top: '28%', left: '45%', title: 'Climate Controlled', description: 'Precision AC and air filtration for your perfect environment.' },
  { top: '18%', left: '22%', title: 'Mood Lighting', description: 'Mood lighting adjustable to your recovery needs.' },
  { top: '45%', left: '50%', isMain: true, title: 'Smart Controls', description: 'Adjust temperature, lighting, and sound from the central console.' }
];

export default function OfferPage() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16">
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
            Your Private <span className="text-primary">Oasis</span><br/>In The Urban Chaos.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-2xl font-light leading-relaxed"
          >
            Choose from our curated selection of high-tech rest pods designed for peak recovery, deep focus, or a quick power nap between meetings.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid Services/Features */}
      <section className="py-24">
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
            
            {/* Hotspots */}
            {hotspots.map((spot, i) => (
              <div 
                key={i}
                className="absolute hotspot-trigger group pointer-events-auto"
                style={{ top: spot.top, left: spot.left }}
              >
                <div className="relative w-10 h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-help">
                  <div className="absolute w-full h-full bg-white/30 rounded-full animate-ping"></div>
                  <div className={`relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 ${spot.isMain ? 'bg-white border-primary' : 'bg-white border-white'}`}>
                    {spot.isMain ? <X size={12} className="text-primary" /> : <Plus size={12} className="text-primary" />}
                  </div>
                </div>
                <div className={`opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-56 bg-zinc-900/90 backdrop-blur-xl text-white text-xs p-4 rounded-lg shadow-2xl transition-all duration-300 translate-y-2 group-hover:translate-y-1 pointer-events-none text-center border border-white/10 ${spot.isMain ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                  <strong className="block text-primary mb-1 text-sm">{spot.title}</strong>
                  <p className="font-light opacity-80">{spot.description}</p>
                </div>
              </div>
            ))}

            <div className="relative z-10 p-12 md:p-20 bg-linear-to-t from-zinc-900/90 via-zinc-900/40 to-transparent">
              <h3 className="font-headline text-4xl md:text-5xl text-white font-bold mb-6 tracking-tight">Climate Controlled</h3>
              <p className="text-white/80 max-w-lg text-lg leading-relaxed font-light">
                Experience a sanctuary where every detail is optimized. Every pod features dedicated silent AC units and air filtration systems for the perfect atmosphere.
              </p>
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
                  <h3 className="font-headline text-2xl font-bold text-zinc-900">Ultra Hygiene</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">Medical-grade UV-C sterilization and professional cleaning after every single session.</p>
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
                  <h3 className="font-headline text-2xl font-bold text-zinc-900">Smart Charging</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed font-light">Universal fast-charging docks, wireless pads, and high-speed Wi-Fi in every sanctuary.</p>
                </div>
              </div>
              <div className="flex -space-x-3 pt-8">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-500 shadow-sm overflow-hidden animate-pulse">
                    <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
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
                  <Bell size={32} className="text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-headline text-3xl font-bold">24/7 Concierge</h3>
                  <p className="text-white/80 text-sm leading-relaxed font-light">Digital concierge for wake-up calls, artisanal coffee, or any assistance needed during your stay.</p>
                </div>
              </div>
              <button className="mt-10 bg-white text-primary px-8 py-3 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:bg-orange-50 transition-all self-start shadow-xl active:scale-95 cursor-pointer">
                Learn More
              </button>
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
                <p className="text-zinc-500 text-xl font-light leading-relaxed">
                  Walk in, shower, freshen up, and go. No complex booking needed - just show up when you need that reset.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Zap size={20}/>, t: "Walk-in only - no advance booking required" },
                  { icon: <Bell size={20}/>, t: "Charged by the hour with fair pricing" },
                  { icon: <Waves size={20}/>, t: "Premium towels & toiletries provided" },
                  { icon: <ShieldCheck size={20}/>, t: "Medical-grade sanitization after use" }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
                <p className="text-zinc-500 text-xl font-light leading-relaxed">
                  Leave your bags with us and move around freely. Secure, staff-managed storage with simple hourly pricing by bag size.
                </p>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border border-zinc-100 shadow-2xl shadow-zinc-200/50">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-100">
                      <th className="px-8 py-5 font-headline font-bold text-zinc-900">Type</th>
                      <th className="px-8 py-5 font-headline font-bold text-zinc-900">Capacity</th>
                      <th className="px-8 py-5 font-headline font-bold text-zinc-900 text-right">Pricing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    {[
                      { s: "Small", ex: "Laptop bags, shoulder bags", p: "₹99/hr" },
                      { s: "Medium", ex: "Cabin trolleys, heavy bags", p: "₹149/hr" },
                      { s: "Large", ex: "Suicases (20kg+), large backpacks", p: "₹199/hr" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-orange-50/30 transition-colors">
                        <td className="px-8 py-6">
                           <div className="font-bold text-zinc-900">{row.s}</div>
                           <div className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Size Bracket</div>
                        </td>
                        <td className="px-8 py-6 text-zinc-500 text-sm font-light italic">{row.ex}</td>
                        <td className="px-8 py-6 text-right">
                          <span className="bg-white px-4 py-2 rounded-md text-primary font-black border border-orange-100 shadow-sm">
                            {row.p}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-zinc-400 italic bg-zinc-50 p-6 rounded-lg border-l-4 border-zinc-200">
                Pricing is per individual bag, per hour. Secure digital tags assigned for every item. Staffed 24/7.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="relative rounded-xl overflow-hidden p-16 md:p-32 flex flex-col items-center text-center shadow-2xl">
            <img 
              alt="Serene Lounge" 
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPiNPjB3L2mQ8wGGlCLQjMJDxV3ZfGNrKjS5L6yAKJ82J0Cegx86eUWOmjmLpBiQqBmc1YS1U02KjUK_Gw0uAw6mvQiQ8Wh3tsZw6yWH17IPWojnKOGwkbVa0zLyATcTWWtK9jyBLeYDMyMABrdpI0BV3dixV4y7jZ_FTdq2k4D5mdply4X812cwtCv8WN40EJcEs9I9_hOsbxUBwW0vQ83a-25XMusY29CAkJ2UgdkH4IgW8SAgvj1vZJDo5Rl6e_VOZPH7qwD4" 
            />
            <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm"></div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-10"
            >
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Ready for a <span className="text-primary">Refresh?</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                Join 50,000+ urban explorers who trust Rest Refresh for their daily downtime. Book your pod in under 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <button className="bg-primary text-white px-12 py-3 rounded-md font-bold text-base shadow-[0_20px_50px_rgba(255,109,0,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
                  Book Your Slot Now
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white px-12 py-3 rounded-md font-bold text-base border border-white/20 hover:bg-white/20 active:scale-95 transition-all cursor-pointer">
                  Find a Sanctuary
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
