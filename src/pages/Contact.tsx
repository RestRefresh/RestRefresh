import { motion } from 'motion/react';
import { Instagram, Linkedin, MapPin, Mail, MessageSquare, Camera, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section / Editorial Header */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 font-headline">
              Let’s find your <span className="text-primary">quiet space</span>.
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg font-light">
              Whether you need a quick recharge or a long-term collaboration, our concierge team is here to assist with your sanctuary requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section / Bento Grid Layout */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(26,28,28,0.04)] border border-zinc-100/50"
          >
            <h2 className="text-3xl font-bold mb-10 text-zinc-900 tracking-tight">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Full Name</label>
                  <input 
                    className="w-full bg-zinc-50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none shadow-inner" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Email Address</label>
                  <input 
                    className="w-full bg-zinc-50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none shadow-inner" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Inquiry Type</label>
                <div className="relative">
                  <select className="w-full bg-zinc-50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none appearance-none shadow-inner">
                    <option>General Inquiry</option>
                    <option>Pod Booking Support</option>
                    <option>Corporate Partnerships</option>
                    <option>Location Suggestions</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    <MessageSquare size={16} />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 px-1">Your Message</label>
                <textarea 
                  className="w-full bg-zinc-50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none resize-none shadow-inner" 
                  placeholder="How can we help you rest?" 
                  rows={5}
                ></textarea>
              </div>
              <button 
                className="bg-primary hover:scale-[1.02] text-white px-10 py-3 rounded-md text-base font-bold transition-all duration-300 active:scale-95 shadow-xl shadow-primary/20 cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Social Media Priority Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-white p-10 rounded-lg relative overflow-hidden group shadow-2xl shadow-primary/20"
            >
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">Social Media Support?</h3>
                  <p className="text-white/80 font-light text-sm max-w-[280px]">Connect with us on social media for the latest updates and direct messaging support.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-orange-50 transition-all text-sm shadow-lg active:scale-95" href="#">
                    <Camera size={18} />
                    Instagram
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-orange-50 transition-all text-sm shadow-lg active:scale-95" href="#">
                    <Briefcase size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="absolute -right-16 -bottom-16 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <MessageSquare size={240} strokeWidth={1} />
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-50 p-10 rounded-lg space-y-10 border border-zinc-100 shadow-sm"
            >
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-lg text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 text-lg">Main HQ</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    122 Sanctuary Blvd, Zen District<br/>San Francisco, CA 94103
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-lg text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 text-lg">Digital Concierge</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    hello@restrefresh.com<br/>support@restrefresh.com
                  </p>
                </div>
              </div>
              <div className="w-full h-56 rounded-xl overflow-hidden bg-zinc-200 relative border border-zinc-100 shadow-inner group">
                <img 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  alt="City map" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXnAwEC8Yo8y1x2QSEoCkkYkGOX1xQqUZy1N1TnJV-N1XTxQTkova1WbAP-tGyuhkMIHmiDlSMG-2VCWHCbeqwng803U967a5Hnh71gC39Er_tz2eEDsHtUb9SU50w4kxuJJLS_hL1hGBnaajeaNNsCB5ETN_JXpa7ESaaOCfJl6Pzk8kbmEYQAhJvSl7MuEZz7gi7vbccjmpjn13FBnDlKiFeKat0JVDJaZdkyLTRvd0g_tGJF_MvYM2-xQS0xFtpM66LV8IBXIM" 
                />
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="bg-zinc-900 rounded-xl p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to find your center?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-xl font-light leading-relaxed">
              Experience our pods for yourself. Book your first session at any of our city locations.
            </p>
            <button className="bg-primary text-white px-12 py-3 rounded-md font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 cursor-pointer">
              Find a Pod Near You
            </button>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
