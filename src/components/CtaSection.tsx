import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="relative rounded-2xl overflow-hidden p-16 md:p-32 flex flex-col items-center text-center shadow-2xl">
          <img 
            alt="Rest Refresh Lounge" 
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
              Time to <span className="text-primary">Rest</span>? Time to <span className="text-primary">Refresh</span>?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-xl font-normal leading-relaxed">
              Pods, showers, and luggage storage - all under one roof, open around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link 
                to="/contact"
                className="bg-primary text-white px-12 py-4 rounded-md font-bold text-base shadow-[0_20px_50px_rgba(255,109,0,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer uppercase tracking-widest"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
