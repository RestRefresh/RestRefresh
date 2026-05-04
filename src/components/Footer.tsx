import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white w-full border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <img 
                alt="Rest Refresh Logo" 
                className="h-16 w-16 object-contain shadow-2xl shadow-black/40" 
                  src="/logo.svg" 
              />
              <span className="text-3xl font-black text-zinc-50 font-headline tracking-tighter">Rest Refresh</span>
            </div>
            <p className="font-body text-zinc-400 text-base leading-relaxed max-w-sm font-light">
              Redefining urban solitude through premium, bookable micro-spaces. Your private office, lounge, and sanctuary, anywhere in the city.
            </p>
            <div className="space-y-4">
              <h4 className="text-zinc-100 font-headline font-bold text-xs uppercase tracking-[0.2em]">Follow Us</h4>
              <div className="flex gap-6">
                <a className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg" href="#">
                  <Instagram size={20} />
                </a>
                <a className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg" href="#">
                  <Facebook size={20} />
                </a>
                <a className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg" href="#">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-zinc-100 font-headline font-bold text-xs uppercase tracking-[0.2em]">Company</h4>
              <ul className="font-body text-zinc-500 text-sm space-y-4 font-light">
                <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Our Locations</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Press Kit</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-zinc-100 font-headline font-bold text-xs uppercase tracking-[0.2em]">Support</h4>
              <ul className="font-body text-zinc-500 text-sm space-y-4 font-light">
                <li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Safety & Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-body text-zinc-500 text-xs font-light tracking-wide">
            © 2026 Rest Refresh. All rights reserved.
          </span>
          <div className="flex gap-8">
            <a className="text-zinc-500 text-xs hover:text-white transition-colors font-light" href="#">Privacy</a>
            <a className="text-zinc-500 text-xs hover:text-white transition-colors font-light" href="#">Terms</a>
            <a className="text-zinc-500 text-xs hover:text-white transition-colors font-light" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
