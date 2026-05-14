import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Bed, Briefcase, ShowerHead, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    type: "text",
    bgColor: "bg-[#E0E2FF]",
    tag: "Rest Pods",
    title: "Quiet Zones: Private pods optimized for deep rest.",
    buttonText: "Book Pod",
    path: "/offer#pods",
    icon: <Bed className="text-zinc-900" size={24} />
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1535312800630-1c173409799a?q=80&w=1200&auto=format&fit=crop",
    alt: "Sleeping Pods"
  },
  {
    type: "text",
    bgColor: "bg-[#D1F2D6]",
    tag: "Cloakroom",
    title: "Secure Storage: Staff-managed storage for your peace of mind.",
    buttonText: "Check Rates",
    path: "/offer#cloakroom",
    icon: <Briefcase className="text-zinc-900" size={24} />
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1610244767159-0f9797ff1926?q=80&w=1200&auto=format&fit=crop",
    alt: "Storage Lockers"
  },
  {
    type: "text",
    bgColor: "bg-[#FFF0D1]",
    tag: "Refresh",
    title: "Shower & Reset: Walk in, freshen up, walk out.",
    buttonText: "LEARN MORE",
    path: "/offer#refresh",
    icon: <ShowerHead className="text-zinc-900" size={24} />
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200&auto=format&fit=crop",
    alt: "Cafeteria"
  }
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filter only images for the gallery slider
  const imagesOnly = galleryItems
    .filter(item => item.type === "image")
    .map(item => ({ src: item.src, alt: item.alt }));

  const openLightbox = (imageSrc: string) => {
    const index = imagesOnly.findIndex(img => img.src === imageSrc);
    if (index !== -1) setSelectedIndex(index);
  };

  const closeLightbox = () => setSelectedIndex(null);

  const navigate = (direction: 'next' | 'prev') => {
    if (selectedIndex === null) return;
    if (direction === 'next') {
      setSelectedIndex((selectedIndex + 1) % imagesOnly.length);
    } else {
      setSelectedIndex((selectedIndex - 1 + imagesOnly.length) % imagesOnly.length);
    }
  };

  return (
    <section className="py-24 bg-zinc-50 overflow-hidden relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest block">
              Premium Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight text-zinc-900">
              The Gallery Collection
            </h2>
          </div>
          <Link to="/offer">
            <button className="text-zinc-900 font-headline font-bold border-b-2 border-zinc-900 pb-1 hover:text-primary hover:border-primary transition-all cursor-pointer">
              View All Spaces
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/5] ${
                item.type === 'text' ? item.bgColor : 'bg-white'
              }`}
            >
              {item.type === 'text' ? (
                <div className="p-10 flex flex-col h-full bg-linear-to-br from-white/20 to-transparent">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-white/50 backdrop-blur-sm p-3 rounded-lg text-zinc-900 shadow-sm border border-white/50">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900/80">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-zinc-900 leading-[1.2] mb-10">
                    {item.title}
                  </h3>
                  <div className="mt-auto">
                    <Link to={item.path || '#'}>
                      <button className="bg-black text-white px-8 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:scale-105 active:scale-95 transition-all cursor-pointer">
                        {item.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div 
                  className="relative h-full group cursor-pointer"
                  onClick={() => openLightbox(item.src!)}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Eye className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={closeLightbox}
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
                src={imagesOnly[selectedIndex].src} 
                alt={imagesOnly[selectedIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                <p className="text-white font-headline font-bold text-xl">{imagesOnly[selectedIndex].alt}</p>
                <div className="flex gap-2 mt-4">
                  {imagesOnly.map((_, i) => (
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
    </section>
  );
}
