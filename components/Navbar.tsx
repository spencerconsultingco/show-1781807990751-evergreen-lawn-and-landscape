'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-primary shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Evergreen Lawn & Landscape logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-white font-semibold text-lg leading-tight block">
                Evergreen Lawn
              </span>
              <span className="font-heading text-brand-accent text-sm leading-tight block">
                &amp; Landscape
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white font-body text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5125550147"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              <Phone size={16} />
              <span>(512) 555-0147</span>
            </a>
            <a
              href="#contact"
              className="bg-brand-accent hover:bg-orange-500 text-white font-medium text-sm px-5 py-2.5 rounded-sm transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white/80 hover:text-white py-3 text-base font-medium border-b border-white/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:5125550147"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                <Phone size={16} />
                <span>(512) 555-0147</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-brand-accent hover:bg-orange-500 text-white font-medium text-center py-3 rounded-sm transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
