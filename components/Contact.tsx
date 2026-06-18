'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-brand-accent font-body text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
            >
              Ready for a Yard You Love?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-white/70 text-lg leading-relaxed mb-10"
            >
              Send us a message or give us a call. We respond quickly and can usually schedule an estimate within a few days.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <a
                href="tel:5125550147"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors duration-200 flex-shrink-0">
                  <Phone size={18} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-body text-white/50 text-xs tracking-widest uppercase mb-0.5">Phone</p>
                  <p className="font-body text-white font-medium">(512) 555-0147</p>
                </div>
              </a>

              <a
                href="mailto:todd@thesitesmith.co"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors duration-200 flex-shrink-0">
                  <Mail size={18} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-body text-white/50 text-xs tracking-widest uppercase mb-0.5">Email</p>
                  <p className="font-body text-white font-medium">Send Us a Message</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-body text-white/50 text-xs tracking-widest uppercase mb-0.5">Hours</p>
                  <p className="font-body text-white font-medium">Mon to Sat, 8am to 6pm</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-body text-white/50 text-xs tracking-widest uppercase mb-0.5">Service Area</p>
                  <p className="font-body text-white font-medium">Austin &amp; the Surrounding Hill Country</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-sm p-10 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mb-5">
                  <Send size={28} className="text-brand-accent" />
                </div>
                <h3 className="font-heading text-white text-2xl font-semibold mb-3">
                  Message Received!
                </h3>
                <p className="font-body text-white/70 text-base leading-relaxed">
                  Thank you for reaching out. We will get back to you within one business day to schedule your estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-sm p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(512) 000-0000"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-brand-primary border border-white/15 rounded-sm px-4 py-3 font-body text-white text-sm focus:outline-none focus:border-brand-accent transition-colors duration-200"
                  >
                    <option value="" className="text-white/50">Select a service...</option>
                    <option value="lawn-care">Lawn Care &amp; Mowing</option>
                    <option value="landscape-design">Landscape Design &amp; Installation</option>
                    <option value="hardscaping">Hardscaping &amp; Patios</option>
                    <option value="irrigation">Irrigation &amp; Sprinkler Systems</option>
                    <option value="tree-shrub">Tree &amp; Shrub Care</option>
                    <option value="seasonal">Seasonal Cleanups</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-white/60 text-xs tracking-widest uppercase mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your yard, what you are looking for, or any questions you have..."
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-orange-500 text-white font-semibold py-4 rounded-sm transition-colors duration-200 flex items-center justify-center gap-2 text-base"
                >
                  <Send size={16} />
                  Contact Us
                </button>

                <p className="font-body text-white/40 text-xs text-center">
                  We typically respond within one business day.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
