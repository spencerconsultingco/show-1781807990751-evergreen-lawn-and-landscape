'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, TreePine, Hammer, Droplets, Sparkles, Brush } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Scissors,
    name: 'Lawn Care & Mowing',
    description:
      'Consistent, precision mowing with edge trimming and blowing included. Your lawn stays crisp and even every single visit, not just sometimes.',
  },
  {
    icon: Brush,
    name: 'Landscape Design & Installation',
    description:
      'Custom planting plans built around Austin soil and climate. From curb appeal upgrades to full backyard transformations, we design it and build it.',
  },
  {
    icon: Hammer,
    name: 'Hardscaping & Patios',
    description:
      'Stone patios, retaining walls, walkways, and outdoor living areas. We build spaces that hold up to Texas summers and look incredible doing it.',
  },
  {
    icon: Droplets,
    name: 'Irrigation & Sprinkler Systems',
    description:
      'Smart irrigation design, new installs, and system tune-ups. We optimize coverage so every zone gets exactly what it needs, nothing more.',
  },
  {
    icon: TreePine,
    name: 'Tree & Shrub Care',
    description:
      'Pruning, shaping, and health treatments that keep your trees and shrubs looking intentional. We work with the natural structure, not against it.',
  },
  {
    icon: Sparkles,
    name: 'Seasonal Cleanups',
    description:
      'Spring prep and fall leaf removal done thoroughly. We leave the property spotless so you start every season with a clean slate.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-brand-accent font-body text-sm font-semibold tracking-widest uppercase mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-brand-primary text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4"
          >
            Complete Outdoor Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-brand-secondary text-lg max-w-2xl mx-auto"
          >
            From a quick mow to a full landscape overhaul, we handle everything so you can spend your time enjoying the yard, not working in it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={service.name}
                service={service}
                Icon={Icon}
                index={index}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-orange-500 text-white font-semibold px-10 py-4 rounded-sm transition-colors duration-200 text-base"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
  index,
}: {
  service: { name: string; description: string };
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-brand-primary/10 rounded-sm p-8 group hover:shadow-lg hover:border-brand-accent/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-sm bg-brand-primary/5 group-hover:bg-brand-accent/10 flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon size={22} className="text-brand-accent" />
      </div>
      <h3 className="font-heading text-brand-primary text-xl font-semibold mb-3">
        {service.name}
      </h3>
      <p className="font-body text-brand-secondary text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
