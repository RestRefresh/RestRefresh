import { useState, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should use solid white or transparent background
  const navBackground = (isScrolled || !isHomePage)
    ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
    : 'bg-transparent py-5';

  const isTransparent = isHomePage && !isScrolled;
  const textColor = isTransparent ? 'text-white' : 'text-zinc-900';
  const subTextColor = isTransparent ? 'text-white/80' : 'text-zinc-600';
  const buttonStyle = 'bg-primary text-on-primary';
  const menuToggleColor = isTransparent ? 'text-white hover:bg-white/10' : 'text-zinc-900 hover:bg-zinc-100';

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT US', to: '/about' },
    { name: 'CONTACT', to: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}
      >
        <div className="flex items-center px-6 md:px-12 max-w-screen-2xl mx-auto relative">
          <div className="flex-shrink-0 z-10">
            <Link to="/" className="flex items-center gap-4 group">
              <img 
                alt="Rest Refresh Logo" 
                className="h-12 w-12 object-contain transition-all duration-300 shadow-sm" 
                 src="/logo.svg" 
              />
              <span className={`text-2xl font-black tracking-tighter font-headline transition-colors duration-300 ${textColor}`}>
                Rest Refresh
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8 font-headline tracking-tight font-bold text-sm">
            <NavLink 
              to="/" 
              className={({ isActive }) => `pb-1 transition-all duration-300 border-b-2 ${
                isActive 
                  ? 'text-primary border-primary' 
                  : `${textColor} border-transparent hover:text-primary`
              }`}
            >
              HOME
            </NavLink>
            
            <div className="group relative inline-block">
              <button className={`flex items-center gap-1 pb-1 border-b-2 border-transparent transition-all duration-300 cursor-pointer ${textColor} hover:text-primary uppercase`}>
                WHAT WE OFFER
                <ChevronDown size={14} className="mt-0.5" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 min-w-[200px] hidden group-hover:block transition-all duration-300">
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white shadow-xl rounded-md border border-zinc-100 overflow-hidden"
                >
                  <Link className="block px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-primary hover:text-white transition-colors uppercase" to="/offer">PRIVATE PODS</Link>
                  <Link className="block px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-primary hover:text-white transition-colors uppercase" to="/offer#refresh">SHOWER & REFRESH</Link>
                  <Link className="block px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-primary hover:text-white transition-colors uppercase" to="/offer#cloakroom">SECURE STORAGE</Link>
                </motion.div>
              </div>
            </div>
            
            {navLinks.slice(1).map((link) => (
              <NavLink 
                key={link.to}
                to={link.to} 
                className={({ isActive }) => `pb-1 transition-all duration-300 border-b-2 ${
                  isActive 
                    ? 'text-primary border-primary' 
                    : `${textColor} border-transparent hover:text-primary`
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center ml-auto z-10">
            <button className={`${buttonStyle} hidden lg:block px-8 py-3 rounded-md font-headline font-bold text-xs uppercase hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg`}>
              Book Now
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 cursor-pointer transition-colors rounded-md flex items-center lg:hidden ml-2 ${menuToggleColor}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to}
                  className="text-2xl font-headline font-extrabold text-zinc-900 border-b border-zinc-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-4">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-4">What We Offer</span>
                <Link className="block text-xl font-bold text-zinc-600" to="/offer">Private Pods</Link>
                <Link className="block text-xl font-bold text-zinc-600" to="/offer#refresh">Shower & Refresh</Link>
                <Link className="block text-xl font-bold text-zinc-600" to="/offer#cloakroom">Secure Storage</Link>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-md font-bold text-base mt-8">
                Book Your Pod Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
