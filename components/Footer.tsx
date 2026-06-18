import Image from 'next/image';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Lawn Care & Mowing',
    'Landscape Design & Installation',
    'Hardscaping & Patios',
    'Irrigation & Sprinkler Systems',
    'Tree & Shrub Care',
    'Seasonal Cleanups',
  ];

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#feature' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Evergreen Lawn & Landscape logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-heading text-white font-semibold text-base leading-tight block">
                  Evergreen Lawn
                </span>
                <span className="font-heading text-brand-accent text-sm leading-tight block">
                  &amp; Landscape
                </span>
              </div>
            </a>
            <p className="font-body text-white/55 text-sm leading-relaxed mb-5">
              Full-service lawn care and landscape design for Austin homeowners who want a yard they love.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-orange-500 text-white font-medium text-sm px-5 py-2.5 rounded-sm transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5125550147"
                  className="flex items-start gap-3 group"
                >
                  <Phone size={15} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="font-body text-white/55 group-hover:text-white text-sm transition-colors duration-200">
                    (512) 555-0147
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/55 text-sm">
                  Mon to Sat, 8am to 6pm
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/55 text-sm">
                  Austin &amp; the Surrounding Hill Country
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-sm">
            &copy; {currentYear} Evergreen Lawn &amp; Landscape. All rights reserved.
          </p>
          <p className="font-body text-white/40 text-sm">
            Website by{' '}
            <a
              href="https://thesitesmith.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white underline transition-colors duration-200"
            >
              The Sitesmith
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
