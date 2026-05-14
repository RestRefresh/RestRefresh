import { ArrowRight, Bed, ShowerHead, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const services = [
  {
    icon: <Bed size={32} />,
    title: "Rest Pods",
    description: "Private sleeping pods for men and women. Book your pod - whether it's a short nap or a longer rest between journeys.",
    path: "/offer#pods",
  },
  {
    icon: <ShowerHead size={32} />,
    title: "Refresh",
    description: "Walk-in shower and toilet access. Get freshened up before your next move - no booking needed, no waiting around.",
    path: "/offer#refresh",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Cloakroom",
    description: "Leave your bags with us and travel light. Secure, staff-managed storage by the hour - collect whenever you're ready.",
    path: "/offer#cloakroom",
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight text-zinc-900 mb-6 max-w-2xl">
            Everything You Need, Right At The Junction
          </h2>
          <p className="text-zinc-500 max-w-3xl font-body leading-relaxed text-lg font-normal">
           Whether you need a few hours of sleep, a quick shower, or somewhere safe to leave your bags - we have you covered. Three services, one convenient location, open around the clock.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHighlighted = hoveredIndex !== null ? hoveredIndex === index : activeIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-10 rounded-lg transition-all duration-300 min-h-[380px] flex flex-col items-start group cursor-pointer ${
                  isHighlighted 
                    ? 'bg-primary text-white shadow-2xl scale-[1.02]' 
                    : 'bg-white border border-zinc-100 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-10 shadow-sm transition-colors ${
                  isHighlighted 
                    ? 'bg-white/20 backdrop-blur-sm text-white' 
                    : 'bg-orange-50 text-primary'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`font-headline font-bold text-2xl mb-4 leading-tight transition-colors ${
                  isHighlighted ? 'text-white' : 'text-zinc-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`font-normal text-sm leading-relaxed mb-auto transition-colors ${
                  isHighlighted ? 'text-white/90' : 'text-zinc-500'
                }`}>
                  {service.description}
                </p>
                <Link 
                  to={service.path} 
                  className={`mt-8 flex items-center gap-2 font-bold tracking-tight hover:gap-3 transition-all ${
                    isHighlighted ? 'text-white underline underline-offset-8 decoration-white/30 hover:decoration-white' : 'text-primary hover:underline underline-offset-8 decoration-primary/30 hover:decoration-primary'
                  }`}
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

