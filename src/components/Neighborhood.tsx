import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const neighborhoodCards = [
  {
    title: "Travel Guide",
    description: "Essential tips for navigating the city's best routes and transport links.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Places to Go",
    description: "Curated list of quiet parks and vibrant business hubs within walking distance.",
    image: "https://images.unsplash.com/photo-1589983846997-04788035bc83?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Food Spots",
    description: "From quick artisanal coffee to fine dining, discover the taste of the district.",
    image: "https://images.unsplash.com/photo-1678781416302-d59ed9ed46d0?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Nearby Attractions",
    description: "Don't miss the iconic landmarks and hidden galleries just around the corner.",
    image: "https://images.unsplash.com/photo-1650730005180-2c849af5d6cc?auto=format&fit=crop&q=80&w=1200"
 }
];

export default function Neighborhood() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight text-zinc-900 leading-tight">
            Explore the Neighborhood
          </h2>
          <p className="text-zinc-500 font-normal max-w-2xl mx-auto leading-relaxed text-lg">
            Make the most of your stay. Discover local gems and navigate the city like a pro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {neighborhoodCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100/50 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={card.image} 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 space-y-3 flex-grow flex flex-col items-start">
                <h4 className="font-headline font-bold text-xl text-zinc-900 group-hover:text-primary transition-colors">
                  {card.title}
                </h4>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed flex-grow">
                  {card.description}
                </p>
                <a href="#" className="mt-4 flex items-center gap-1 text-sm font-bold text-primary group-hover:underline">
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
