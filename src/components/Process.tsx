import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    tag: "Open 24x7",
  },
  {
    number: "02",
    tag: "Women-only dormitory available",
  },
  {
    number: "03",
    tag: "ID-verified entry",
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-[#FEF9C3]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-headline font-extrabold tracking-tight mb-4 text-zinc-900 leading-tight max-w-4xl mx-auto"
          >
            Why Rest Refresh?
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center items-start relative">
          {/* Connector Line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-zinc-900/10 -z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center relative z-10"
            >
              <span className="text-6xl md:text-8xl font-black font-headline text-zinc-900 mb-6 tracking-tighter opacity-100">
                {step.number}
              </span>
              <span className="text-sm font-bold font-headline uppercase tracking-[0.3em] text-zinc-500 mb-6 bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">
                {step.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
