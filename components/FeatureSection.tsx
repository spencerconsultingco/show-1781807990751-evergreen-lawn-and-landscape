'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClipboardCheck, Calendar, BadgeCheck, ThumbsUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

const steps: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Free On-Site Estimate',
    description:
      'We walk the property with you, listen to what you want, and build a clear scope of work. No guesswork, no surprises on the invoice.',
  },
  {
    icon: Calendar,
    step: '02',
    title: 'Scheduled and Confirmed',
    description:
      'You get a confirmed date and time, not a vague window. Our crews show up when we say they will, every single time.',
  },
  {
    icon: ThumbsUp,
    step: '03',
    title: 'Meticulous Execution',
    description:
      'Detail-obsessed crews who treat every property like a portfolio piece. We clean up before we leave, always.',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'Satisfaction Guaranteed',
    description:
      'Not happy with something? We come back and make it right at no extra cost. Your satisfaction is the job, not just the mow.',
  },
];

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="feature" className="bg-brand-primary py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-brand-accent font-body text-sm font-semibold tracking-widest uppercase mb-3"
            >
              How It Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
            >
              A Process Built Around Your Peace of Mind
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-white/70 text-lg leading-relaxed mb-10"
            >
              Most homeowners have had a bad experience with a landscaper who showed up late, cut corners, or disappeared after payment. We built our entire process around making sure that never happens here.
            </motion.p>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
                    className="flex gap-5 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-white/5 group-hover:bg-brand-accent/20 border border-white/10 flex items-center justify-center transition-colors duration-300">
                      <Icon size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-brand-accent font-body text-xs font-bold tracking-widest">
                          {step.step}
                        </span>
                        <h3 className="font-heading text-white text-lg font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-body text-white/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-base"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          <FeatureImage isInView={isInView} />
        </div>
      </div>
    </section>
  );
}

function FeatureImage({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <div className="relative rounded-sm overflow-hidden">
        <div className="aspect-[4/5] relative">
          <Image
            src="/images/gallery-1.jpg"
            alt="Evergreen Lawn and Landscape crew completing a project in Austin"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/20" />
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-sm overflow-hidden border-4 border-brand-primary shadow-2xl hidden lg:block">
        <Image
          src="/images/gallery-2.jpg"
          alt="Finished landscaping project by Evergreen Lawn and Landscape"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute -top-4 -right-4 bg-brand-accent text-white rounded-sm p-4 shadow-xl hidden lg:block">
        <div className="text-center">
          <div className="font-heading text-3xl font-bold">100%</div>
          <div className="font-body text-xs font-medium tracking-wide">Satisfaction</div>
          <div className="font-body text-xs font-medium tracking-wide">Guaranteed</div>
        </div>
      </div>
    </motion.div>
  );
}
