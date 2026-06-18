'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Jenna P.',
    text: 'Marcus and his crew transformed our backyard into something out of a magazine.',
  },
  {
    name: 'David L.',
    text: 'Reliable, tidy, and the design ideas were spot on. Best landscaper we have used.',
  },
  {
    name: 'Priya S.',
    text: 'Our lawn has never looked better and they always show up when they say they will.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-brand-accent font-body text-sm font-semibold tracking-widest uppercase mb-3"
          >
            What Homeowners Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-brand-primary text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4"
          >
            Austin Homeowners Trust Evergreen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-brand-secondary text-lg max-w-xl mx-auto"
          >
            Real feedback from real neighbors who wanted a yard they could be proud of.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: { name: string; text: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white border border-brand-primary/10 rounded-sm p-8 flex flex-col"
    >
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-brand-accent fill-brand-accent"
          />
        ))}
      </div>
      <blockquote className="font-body text-brand-text text-base leading-relaxed flex-1 mb-6 italic">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="border-t border-brand-primary/10 pt-4">
        <p className="font-heading text-brand-primary font-semibold text-sm">
          {review.name}
        </p>
        <p className="font-body text-brand-secondary text-xs mt-0.5">Austin, TX</p>
      </div>
    </motion.div>
  );
}
