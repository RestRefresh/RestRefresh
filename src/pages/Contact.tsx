import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, MapPin, Mail, MessageSquare, Camera, Briefcase, CheckCircle2, Loader2, AlertCircle, ChevronDown } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree, ValidationError } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import React, { useState, useEffect } from 'react';
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
    answer: "Our pods are private, sound-insulated cabins equipped with a comfortable bed, charging ports, and lighting. You book for the hours you need and enjoy uninterrupted rest."
  },
  {
    question: "Is it safe for solo travelers and luggage?",
    answer: "Safety is our priority, and our facility has CCTV in all public areas to ensure that. Each pod has a private curtain for personal privacy. For your belongings, every pod comes with a dedicated storage cabin underneath, and our cloakroom uses a tagged retrieval system so your bags are always accounted for."
  },
  {
    question: "Can I book for specific hours?",
    answer: "We offer flexible booking slots to fit your schedule - 3, 6, 12, or 24 hours. The minimum booking is 3 hours. Simply pick the slot that works for you and we'll have a pod ready."
  },
  {
    question: "How do you maintain hygiene?",
    answer: "Every pod and shower space undergoes a strict cleaning protocol after every use. We use fresh linens for every guest and maintain ventilation systems for constant fresh air."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "All bookings are final. We do not offer cancellations or refunds once a booking is confirmed, so please make sure you are ready before completing your booking."
  },
  {
    question: "Can I book a sleeping pod now and pay later?",
    answer: "We require full payment at the time of booking - your slot is only confirmed once payment is received. If you're a walk-in customer, simply come to the front desk and we'll get you sorted on the spot."
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
  const [state, handleSubmitFormspree] = useFormspree('mjgzyrva');
  const [showSuccess, setShowSuccess] = useState(false);

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

  // Effect to handle success state from Formspree
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      reset();
      // Reset success message after 5 seconds to allow sending another message
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  const onSubmit = async (data: ContactFormValues) => {
    // We can manually call Formspree's handleSubmit with a dynamic object
    // Or just use the fetch method to keep full control while using the state
    // But since we want to use the @formspree/react hook correctly:
    
    try {
      await handleSubmitFormspree({
        name: data.fullName,
        email: data.email,
        subject: data.inquiryType,
        message: data.message,
        _subject: `[Rest Refresh] Inquiry: ${data.inquiryType}`
      });
    } catch (error) {
      console.error('Formspree error:', error);
      // Fallback mailto
      const subject = encodeURIComponent(`[Rest Refresh] Inquiry: ${data.inquiryType}`);
      const body = encodeURIComponent(
        `Full Name: ${data.fullName}\nEmail: ${data.email}\nInquiry Type: ${data.inquiryType}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:info@restrefresh.in?subject=${subject}&body=${body}`;
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
              {showSuccess && (
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
                    Your enquiry has been sent to <strong>info@restrefresh.in</strong>. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setShowSuccess(false)}
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
                disabled={state.submitting}
                className={`bg-primary hover:scale-[1.02] text-white px-10 py-3 rounded-md text-base font-bold transition-all duration-300 active:scale-95 shadow-xl shadow-primary/20 flex items-center gap-3 ${state.submitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {state.submitting ? (
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
              <div className="flex items-center gap-6 group">
                <a 
                  href="mailto:info@restrefresh.in"
                  className="bg-white p-4 rounded-lg text-primary shadow-sm hover:scale-110 transition-all duration-300 cursor-pointer block"
                >
                  <Mail size={24} />
                </a>
                <div className="space-y-0.5">
                  <a 
                    href="mailto:info@restrefresh.in"
                    className="text-zinc-900 font-bold text-lg leading-none hover:text-primary transition-colors cursor-pointer block"
                  >
                    info@restrefresh.in
                  </a>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Email Support</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <a 
                  href="https://wa.me/917736147947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-lg text-green-500 shadow-sm hover:scale-110 transition-all duration-300 cursor-pointer block"
                >
                  <svg viewBox="0 0 24 24" size="24" className="w-6 h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <div className="space-y-0.5">
                  <a 
                    href="https://wa.me/917736147947"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-bold text-lg leading-none hover:text-green-600 transition-colors cursor-pointer block"
                  >
                    +91 7736147947
                  </a>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">WhatsApp Us</p>
                </div>
              </div>
              <div className="w-full h-56 rounded-xl overflow-hidden bg-zinc-200 relative border border-zinc-100 shadow-inner group">
                <iframe
                  title="Rest Refresh Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.3033502891913!2d76.32085796956277!3d9.97142462002341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da5d3a5a5a1%3A0xa9f8c6e7f8d5c4b1!2sRest%20Refresh%20Vyttila!5e0!3m2!1sen!2sin!4v1715537136000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale brightness-110 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

                {/* Directions Button Overlay */}
                <div className="absolute bottom-4 right-4 z-40">
                  <a 
                    href="https://maps.app.goo.gl/KAAUrXELZtUiLGdh7" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-md text-xs font-bold shadow-lg hover:bg-white transition-all active:scale-95 inline-flex items-center gap-2 border border-primary/10"
                  >
                    <MapPin size={14} />
                    Directions
                  </a>
                </div>

                {/* Animated Center Marker - Pulse Dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing Rings */}
                    <div className="absolute w-12 h-12 bg-primary/40 rounded-full animate-ping"></div>
                    <div className="absolute w-20 h-20 bg-primary/20 rounded-full animate-ping [animation-delay:0.5s]"></div>
                    
                    {/* Solid Inner Dot */}
                    <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,145,77,0.5)]"></div>
                  </div>
                </motion.div>
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
