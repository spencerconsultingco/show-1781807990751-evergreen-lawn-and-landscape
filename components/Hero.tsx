'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const highlights = [
    'Satisfaction Guaranteed',
    'On-Time Every Visit',
    'Serving Austin & Hill Country',
  ];

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <motion.div
          className="absolute inset-0 scale-110"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-brand-accent font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Austin, TX Landscaping
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            >
              The Yard Your
              <span className="text-brand-accent block">Neighborhood Notices</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
            >
              Full-service lawn care and landscape design for Austin homeowners who want a polished, low-maintenance outdoor space they can actually enjoy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-base"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:5125550147"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-medium px-8 py-4 rounded-sm transition-colors duration-200 text-base"
              >
                (512) 555-0147
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-accent flex-shrink-0" />
                  <span className="text-white/80 text-sm font-body">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
