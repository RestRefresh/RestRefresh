import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, MapPin, Mail, MessageSquare, Camera, Briefcase, CheckCircle2, Loader2, AlertCircle, ChevronDown } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import React, { useState } from 'react';
import CtaSection from '../components/CtaSection';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  inquiryType: z.string().min(1, { message: "Please select an inquiry type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

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
            className="px-6 pb-6 text-zinc-600 leading-relaxed font-normal"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      inquiryType: 'General Inquiry',
      message: '',
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const endpoint = import.meta.env.VITE_FORMSPREEE_ENDPOINT || "https://formspree.io/f/mqakevqp"; 
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          subject: data.inquiryType,
          message: data.message,
          _subject: `[Rest Refresh] Inquiry: ${data.inquiryType}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Formspree error:', error);
      // Fallback
      const subject = encodeURIComponent(`[Rest Refresh] Inquiry: ${data.inquiryType}`);
      const body = encodeURIComponent(
        `Full Name: ${data.fullName}\nEmail: ${data.email}\nInquiry Type: ${data.inquiryType}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:nidheeshnvb@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };
  return (
    <div className="pt-20">
      {/* Hero Section / Editorial Header */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 font-headline">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg font-normal">
            <strong>Need help? Have a question? Or just want to check availability?</strong> <br /> We’re here for you - anytime you need a place to rest, refresh, or store your luggage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section / Bento Grid Layout */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(26,28,28,0.04)] border border-zinc-100/50 relative overflow-hidden"
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                  >
                    <CheckCircle2 size={80} className="text-green-500 mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">Message Received!</h3>
                  <p className="text-zinc-500 max-w-sm mb-8 font-normal">
                    Your enquiry has been sent to <strong>nidheeshnvb@gmail.com</strong>. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-bold uppercase text-xs tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <h2 className="text-3xl font-bold mb-10 text-zinc-900 tracking-tight">Send a Message</h2>
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                    {errors.fullName && <span className="text-[10px] text-red-500 font-bold uppercase tracking-tighter flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.fullName.message}
                    </span>}
                  </div>
                  <input 
                    {...register('fullName')}
                    className={`w-full bg-zinc-50 border-none rounded-lg px-6 py-4 focus:ring-2 transition-all outline-none shadow-inner ${errors.fullName ? 'focus:ring-red-100' : 'focus:ring-primary/20 focus:bg-white'}`}
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                    {errors.email && <span className="text-[10px] text-red-500 font-bold uppercase tracking-tighter flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.email.message}
                    </span>}
                  </div>
                  <input 
                    {...register('email')}
                    className={`w-full bg-zinc-50 border-none rounded-lg px-6 py-4 focus:ring-2 transition-all outline-none shadow-inner ${errors.email ? 'focus:ring-red-100' : 'focus:ring-primary/20 focus:bg-white'}`}
                    placeholder="info@restrefresh.in" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Inquiry Type</label>
                  {errors.inquiryType && <span className="text-[10px] text-red-500 font-bold uppercase tracking-tighter flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.inquiryType.message}
                  </span>}
                </div>
                <div className="relative">
                  <select 
                    {...register('inquiryType')}
                    className="w-full bg-zinc-50 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none appearance-none shadow-inner"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Pod Booking Support">Pod Booking Support</option>
                    <option value="Explore Partnership Opportunity">Explore Partnership Opportunity</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    <MessageSquare size={16} />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Your Message</label>
                  {errors.message && <span className="text-[10px] text-red-500 font-bold uppercase tracking-tighter flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.message.message}
                  </span>}
                </div>
                <textarea 
                  {...register('message')}
                  className={`w-full bg-zinc-50 border-none rounded-lg px-6 py-4 focus:ring-2 transition-all outline-none resize-none shadow-inner ${errors.message ? 'focus:ring-red-100' : 'focus:ring-primary/20 focus:bg-white'}`}
                  placeholder="How can we help you rest?" 
                  rows={5}
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className={`bg-primary hover:scale-[1.02] text-white px-10 py-3 rounded-md text-base font-bold transition-all duration-300 active:scale-95 shadow-xl shadow-primary/20 flex items-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : 'Send Inquiry'}
              </button>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Social Media Priority Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-white p-10 rounded-lg relative overflow-hidden group shadow-2xl shadow-primary/20"
            >
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">Social Media Support?</h3>
                  <p className="text-white/80 font-normal text-sm max-w-[280px]">Connect with us on social media for the latest updates and direct messaging support.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-orange-50 transition-all text-sm shadow-lg active:scale-95" 
                    href="https://www.instagram.com/restrefreshekm/" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <Camera size={18} />
                    Instagram
                  </a>
                  <a 
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-orange-50 transition-all text-sm shadow-lg active:scale-95" 
                    href="https://www.linkedin.com/company/rest-refresh/" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <Briefcase size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="absolute -right-16 -bottom-16 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <MessageSquare size={240} strokeWidth={1} />
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-50 p-10 rounded-lg space-y-10 border border-zinc-100 shadow-sm"
            >
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-lg text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 text-lg">Rest Refresh</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                    Style Plaza Building, <br/>
                    Near South Indian Bank, Vyttila, <br/>
                    Ernakulam, Kerala 682019
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-lg text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 text-lg">Digital Concierge</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                    info@restrefresh.in
                  </p>
                </div>
              </div>
              <div className="w-full h-56 rounded-xl overflow-hidden bg-zinc-200 relative border border-zinc-100 shadow-inner group">
                <iframe
                  title="Vyttila Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.172352163914!2d76.320473!3d9.970868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0d1e3e7e73%3A0x2f90119339e3b9!2sVyttila%20Junction!5e0!3m2!1sen!2sin!4v1714722800000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale brightness-110 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 space-y-4">
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
