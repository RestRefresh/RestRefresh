import { motion, AnimatePresence } from 'motion/react';
import { Bed, ShowerHead, Lock, Star, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';

const faqs = [
  {
    question: "How do the sleeping pods work?",
    answer: "Our pods are private, sound-insulated cabins equipped with a comfortable bed, charging ports, and lighting. You book for the hours you need and enjoy uninterrupted rest."
  },
  {
    question: "Is it safe for solo travelers and luggage?",
    answer: "Safety is our priority. Our facility has CCTV in all public areas and overnight security personnel on site. Each pod has a private curtain for personal privacy. For your belongings, every pod comes with a dedicated storage cabin underneath, and our cloakroom uses a tagged retrieval system so your bags are always accounted for."
  },
  {
    question: "Can I book for specific hours?",
    answer: "We offer flexible booking slots to fit your schedule - 3, 6, 12, or 24 hours. The minimum booking is 3 hours. Simply pick the slot that works for you and we'll have a pod ready."
  },
  {
    question: "How do you maintain hygiene?",
    answer: "Every pod and shower space undergoes a strict cleaning protocol after every use. We use fresh linens for every guest and maintain ventilation systems for constant fresh air."
  }
];

interface FAQItemProps {
  key?: React.Key;
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-md border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left font-bold text-lg cursor-pointer"
      >
        {question}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-zinc-600 leading-relaxed font-normal"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Intro Header */}
      <section className="pt-16 md:pt-24 text-center">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 uppercase mb-4 font-headline"
          >
            OUR ORIGIN
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-1.5 bg-primary mx-auto mb-12"
          ></motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8 text-zinc-600 leading-relaxed text-lg font-normal">
            <p className="text-2xl font-bold text-zinc-900 text-center leading-tight">
              Every journey has a waiting time. We built a better way to spend it.
            </p>
            <p>
              If you’ve ever passed through Vyttila Mobility Hub, let us ask you something.. <strong className="text-zinc-900 font-bold">Have you ever arrived hours early with nowhere comfortable to sit?</strong> Held onto your bags because you didn’t feel safe leaving them anywhere? Wanted to freshen up… but decided to wait instead? Or paid for an entire room, just to use it for a couple of hours? You’re not alone.
            </p>
            <p>
              We’ve seen travellers sit on their luggage just to take a break. We’ve seen people walk around tired, carrying everything with them. We’ve heard students say they do this every single day. We’ve met families who just needed a clean washroom and a place to pause.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="mb-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[650px]">
            {/* Column 1 */}
            <div className="flex flex-col h-full">
              <div className="flex-1 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  alt="Premium minimalist sleeping pod interior" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJEXR71Pryl1SeI8Q6NB0aljQQ9tAbPCMBgGtQ79YpMjJ3vfHZ1CinLwPx-ZtRfQ0-2aiXXwmC3mfHuvpWEnsnFoIxRAqhkhXPjy1ULriUwgnWSsW6LbDaXex3IPK3dFHTq5q5t7rhAvfHzBeUnyccIhZCtLSVpOSTdnwpVKNkfu51AW7LtrnJH2OL-2cTyrEOp6789gQGUzqZFMwWKEp6lzrLLG9Ss1dyPY_KsMTM92GFTMrB8ZrNWU2P7thzaLIEfqn0g_YBdhA" 
                />
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col h-full gap-8">
              <div className="bg-primary text-white p-10 rounded-lg flex flex-col justify-center h-1/2 shadow-xl">
                <div className="text-7xl font-black mb-2 font-headline tracking-tighter">90%</div>
                <div className="text-2xl font-bold opacity-90 tracking-tight">Faster Recovery Rate</div>
              </div>
              <div className="flex-1 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  alt="Team members" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJx8TcTctYgY0jg8Kekh7Cl644Keeobmie2pf7tUJAvy8HLQmfryDjWLnPy4Sndud9xPelB7GkPV3Uj8oeRQM0zWwYJEa9tPpaPGsBkWaaPdHEfn5DkGEp8PpPr-G_RZPzHKqk5d-amTQGM8A_IsxDyVWBgDc4vfud9U56yVXkc81WufDAv4IWp6-WXOF0SDYRpj5WUidVipIRGH2HCPhKBmOQxqonUdUArWaMH0ymTMSgyU2_fNz7iX84EyneX3q2e6fmQgIpa2A" 
                />
              </div>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col h-full gap-8">
              <div className="flex-1 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  alt="Person working" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAffeDy6xFrhpLUXJiMGkFFUMauz9j400z0rjbtNcYnUFkLjTVKKjwMT2iCJo-jiLyRAl3oM8a1L2z_mfk14X_1KYukLqomU358_0b_f8RyduE2iNLyU79zgIKUDQxhcmjrahat8PsLhlshkIeLSHZsgCgWy97lHOMkh6QqMolgdGt8U5ukXxU3bvSjE5WrFmI3b-42YvJxYFIP4jQcKrnHnA9yV1NMToYqm9wfKGym3VHHCEOk0bSW9wCLHE_Ry4ekwcEcKq8cjoo" 
                />
              </div>
              <div className="bg-zinc-950 text-white p-10 rounded-lg flex flex-col justify-center h-[40%] shadow-xl">
                <div className="text-6xl font-black mb-2 font-headline tracking-tighter">50%</div>
                <div className="text-xl opacity-80 tracking-tight">Better Mental Clarity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mb-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-12 text-zinc-600 leading-relaxed text-lg font-normal">
            <p>
              So we asked ourselves {"->"} Why isn’t there a simple space for this already?
              <br /><br />
              To understand better, we spoke to passengers, auto drivers, and staff around the hub. What did they tell us? That people don’t always need a hotel. That hygiene matters more than anything. That safety, especially for luggage and solo travellers, is non-negotiable. That even 2–3 hours of proper rest can make a huge difference. And most importantly - that if a clean, safe, nearby option existed, people would use it.
            </p>
            
            <div className="bg-zinc-50 p-12 rounded-lg border-l-8 border-primary my-12 shadow-sm">
              <p className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">That’s exactly why Rest Refresh was created.</p>
              <p className="text-zinc-500">Not as a luxury. Not as a replacement for hotels. But as something travellers have quietly needed for years.</p>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">So what can you do here?</h3>
              <ul className="grid grid-cols-1 gap-8">
                <li className="flex gap-6 group">
                  <div className="bg-orange-50 p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Bed size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-900 font-bold text-lg">Need a few hours of uninterrupted rest?</p>
                    <p className="text-zinc-500 leading-relaxed">We’ve got clean, private sleeping pods for men and women.</p>
                  </div>
                </li>
                <li className="flex gap-6 group">
                  <div className="bg-orange-50 p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <ShowerHead size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-900 font-bold text-lg">Want to freshen up before your next journey?</p>
                    <p className="text-zinc-500 leading-relaxed">Step into a hygienic shower space.</p>
                  </div>
                </li>
                <li className="flex gap-6 group">
                  <div className="bg-orange-50 p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Lock size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-900 font-bold text-lg">Carrying bags and want to move freely?</p>
                    <p className="text-zinc-500 leading-relaxed">Leave them safely in our secure cloakroom.</p>
                  </div>
                </li>
              </ul>
            </div>

            <p>
              No long bookings. No unnecessary costs. No hassle. Just a simple question answered - What if there was a place made exactly for this moment in your journey?
            </p>
            <p>
              We’re open 24x7, because your travel doesn’t follow a fixed schedule, and neither should your comfort.
            </p>
            <p className="font-medium text-primary italic text-xl border-l-4 border-primary/20 pl-6 py-2">
              Rest Refresh is a family-run space, built from real conversations and everyday travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-zinc-50">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-primary font-bold text-sm tracking-widest uppercase block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">Frequently Asked</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
