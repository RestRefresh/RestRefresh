import { motion, AnimatePresence } from 'motion/react';
import { Bed, ShowerHead, Lock, Star, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const team = [
  {
    name: "Abraham Thomas",
    role: "Founder & Managing Director",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQLbMGILJFYGC5LumST2A4x-jcdxr1p0NGNoyCARk2CHSfK_dpESqrPDThq6kUMwkWcT5X5hG4cso2LybOJ_NthdKAV1MAEpHUoZQ-Gsu4NCAnYywDOrvmPg2m3CE3iLKtQHOmT1CeWQmfIQXhGjsOs9HlMoXQUCjrtTAjuzSBaVqHP7ZhF-oBJyL04InB0GSAoNX89liCmO_dbw1uV_6oGjiclQJ3ELcmCdY7IdF1ncbTEg24zNWT_oRSJNSipt7cyFhsal8D9i0"
  },
  {
    name: "Sara Abraham",
    role: "Co-Founder & Operations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhDluzblAqa8MgorQXDR7TkAiaINz4ZsScRHqX46QJUElgg1FHt_AuaZAfh-TdsNIlEMdCM_RA1-TatqxNDw3RsTxskjNrD8kEUmENjhcm2svc9hpv362c9MS6wCLg5wnvNwAlfoYfQagKdVMfAwJCeQ1K0PkplnMg3n0zj_1j5owm0PblXmfUhCzGxD7bhvUxlZaRsuxmiW0_J2tUIX2jnBV42D7kWNG3jtMUCHYUu--TnOIewwFdwEZn3PM_Oj5Ql6o8-CEK6k"
  },
  {
    name: "Kevin Abraham",
    role: "Growth & Experience",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa04mt9m3y_dC4m6bjYfFlVW5CWNGrchGa9YxC9To13CGX2KqCr_UdW2-NokVtpPQnblL4gP5UgbPvEcm5bKr6LbCW_Q04NGQoJ4Wge1t6-UEnM8zpFVD0V-WdZNnXk1PPkiFn-VSEUrk4vl2r4bVWQMsbkmBFoj2TxSfXxB8JnyM95IXxlCKvD4YNAF8v87JP1aIiPQDqTAEyQMrR4UT3QCrq02RqFMeK27NVIV_HC99I8G4Py70SBj8HEEBfw_5ThdH9u0yjOSU"
  },
  {
    name: "Maya Abraham",
    role: "Community Relations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxd6A2l4sF9svRemT9afjLKhTXZSliqj8slIO0o2Jgd1ThaSv2rUszfz6viCzYZrSN3phwNTEksKH2reONLwwTpxWvkNk4gXsq1xPhvI1nqOCQN3wKGHJuG9supDSRbOlyxDfKCLvyKr9GPhV2nJ2AC2eM8Q1A4T72gQtW3ashyUblYjr3upfOGEluFEEFlUALe3hnBfc4Y-wnPjVGLPiYe-SA9cWNFCvYWzHMgGxp06fU1JvZZDpurs5KlUHnV3CRdGv-yROw9G4"
  }
];

const testimonials = [
  {
    name: "Rahul K.",
    tag: "Frequent Traveller",
    content: "Absolute lifesaver. Had a 4-hour gap between buses and just wanted a nap and a shower. The pods are incredibly quiet and clean."
  },
  {
    name: "Priya M.",
    tag: "Student",
    content: "As a solo female traveller, safety is my priority. Rest Refresh felt very secure, and the staff were wonderful. Highly recommend the cloakroom too!"
  },
  {
    name: "Thomas J.",
    tag: "Business Traveller",
    content: "Better than any airport lounge I've been to. The pods are high-tech but very intuitive. Great way to recharge before a long journey."
  }
];

const faqs = [
  {
    question: "How do the sleeping pods work?",
    answer: "Our pods are private, sound-insulated cabins equipped with a comfortable bed, climate control, charging ports, and dimmable lighting. You book for the hours you need, receive a digital key, and enjoy uninterrupted rest."
  },
  {
    question: "Is it safe for solo travelers and luggage?",
    answer: "Safety is our top priority. We have 24/7 security personnel, CCTV in public areas, and secure digital locks on every pod. Our cloakroom is supervised and uses a tagged system to ensure your belongings are safe while you move freely."
  },
  {
    question: "Can I book for just an hour?",
    answer: "Yes! We understand travel schedules are unpredictable. You can book for as little as one hour or as long as you need. There are no fixed check-in/out times—the space is ready when you are."
  },
  {
    question: "How do you maintain hygiene?",
    answer: "Every pod and shower space undergoes a strict medical-grade cleaning protocol after every use. We use high-quality, fresh linens for every guest and maintain hospital-standard ventilation systems for constant fresh air."
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
            className="px-6 pb-6 text-zinc-600 leading-relaxed font-light"
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
          <div className="max-w-4xl mx-auto space-y-8 text-zinc-600 leading-relaxed text-lg font-light">
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
          <div className="max-w-4xl mx-auto space-y-12 text-zinc-600 leading-relaxed text-lg font-light">
            <p>
              So we asked ourselves— Why isn’t there a simple space for this already? To understand better, we spoke to passengers, auto drivers, and staff around the hub. What did they tell us? That people don’t always need a hotel. That hygiene matters more than anything. That safety, especially for luggage and solo travellers, is non-negotiable. That even 2–3 hours of proper rest can make a huge difference. And most importantly— that if a clean, safe, nearby option existed, people would use it.
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
              No long bookings. No unnecessary costs. No hassle. Just a simple question answered— What if there was a place made exactly for this moment in your journey?
            </p>
            <p>
              We’re open 24/7, because your travel doesn’t follow a fixed schedule—and neither should your comfort.
            </p>
            <p className="font-medium text-primary italic text-xl border-l-4 border-primary/20 pl-6 py-2">
              Rest Refresh is a family-run space, built from real conversations and everyday travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Block */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[{v: "90%", t: "Recovery Rate"}, {v: "450k+", t: "Rest Minutes"}, {v: "24/7", t: "Always Open"}, {v: "5k+", t: "Happy Travelers"}].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-5xl font-black text-primary font-headline tracking-tighter">{stat.v}</div>
                <div className="text-xs text-white/50 font-bold uppercase tracking-[0.2em]">{stat.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <span className="text-primary font-bold text-sm tracking-widest uppercase block">Our People</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">Meet the Family</h2>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              The faces behind the sanctuary. We're a family-run business dedicated to making your travel experience smoother.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 bg-zinc-100">
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                    src={member.image} 
                  />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-bold uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-2">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">What Our Guests Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                <div className="flex text-primary mb-6 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-zinc-600 italic mb-8 font-light leading-relaxed flex-grow">"{t.content}"</p>
                <div className="space-y-1">
                  <div className="font-bold text-zinc-900 text-lg">— {t.name}</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest">{t.tag}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-zinc-50">
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
      <section className="my-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="bg-zinc-900 rounded-lg p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to find your center?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-xl font-light leading-relaxed">
              Experience our pods for yourself. Book your first session at any of our city locations.
            </p>
            <button className="bg-primary text-white px-10 py-3 rounded-md font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 cursor-pointer">
              Find a Pod Near You
            </button>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
