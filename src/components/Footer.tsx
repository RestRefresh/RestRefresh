import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white w-full border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-4">
                <img 
                  alt="Rest Refresh Logo" 
                  className="h-16 w-16 object-contain shadow-2xl shadow-black/40" 
                    src="/logo.svg" 
                />
                <span className="text-3xl font-black text-zinc-50 font-headline tracking-tighter">Rest Refresh</span>
              </Link>
            </div>
            <div className="font-body text-zinc-400 text-base leading-relaxed max-w-md font-normal space-y-2">
              <p className="italic text-zinc-300">Want to make sure you get a good reset?</p>
              <p>Pods, showers, and luggage storage - all under one roof, open around the clock.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-zinc-100 font-headline font-bold text-xs uppercase tracking-[0.2em]">Follow Us</h4>
              <div className="flex gap-6">
                <a className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg" href="https://www.instagram.com/restrefreshekm/" target="_blank" rel="noreferrer">
                  <Instagram size={20} />
                </a>
                <a className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg" href="https://www.facebook.com/profile.php?id=61564595687975" target="_blank" rel="noreferrer">
                  <Facebook size={20} />
                </a>
                <a className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg" href="https://www.linkedin.com/company/rest-refresh/" target="_blank" rel="noreferrer">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-zinc-100 font-headline font-bold text-xs uppercase tracking-[0.2em]">Company</h4>
              <ul className="font-body text-zinc-500 text-sm space-y-4 font-medium">
                <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/offer">Our Services</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-zinc-100 font-headline font-bold text-xs uppercase tracking-[0.2em]">Support</h4>
              <ul className="font-body text-zinc-500 text-sm space-y-4 font-medium">
                <li><Link className="hover:text-primary transition-colors" to="/about#faq">FAQ</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Safety & Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-body text-zinc-500 text-xs font-normal tracking-wide">
            © 2026 Rest Refresh. All rights reserved.
          </span>
          <div className="flex gap-8">
            <a className="text-zinc-500 text-xs hover:text-white transition-colors font-normal" href="#">Privacy</a>
            <a className="text-zinc-500 text-xs hover:text-white transition-colors font-normal" href="#">Terms</a>
            <a className="text-zinc-500 text-xs hover:text-white transition-colors font-normal" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
