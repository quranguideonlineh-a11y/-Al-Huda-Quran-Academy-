import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';

interface FooterProps {
  onOpenTrialModal: (courseId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrialModal }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#08291f] text-white pt-16 pb-10 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 flex items-center justify-center text-amber-300 shadow border border-amber-400/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 6h10" />
                  <path d="M6 10h10" />
                  <path d="M6 14h6" />
                  <circle cx="17" cy="14" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight leading-none block">
                  Al-Huda <span className="text-amber-400">Quran Academy</span>
                </span>
                <span className="text-[10px] text-emerald-300 tracking-wider uppercase">
                  Online Quran Teaching Platform
                </span>
              </div>
            </div>

            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              <strong className="text-white">Al-Huda Quran Academy</strong> is an independent online academy delivering one-on-one Quran reading, Tajweed, and Islamic studies to Muslim children and adults worldwide from the comfort of home.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenTrialModal()}
                className="bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer"
              >
                Start 3 Days Free Trial →
              </button>
            </div>
          </div>

          {/* Column 2: Our Courses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-amber-400 uppercase tracking-wider border-b border-emerald-900 pb-2">
              Our Courses
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => {
                      scrollToSection('courses');
                    }}
                    className="hover:text-amber-300 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500">›</span>
                    <span>{course.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-amber-400 uppercase tracking-wider border-b border-emerald-900 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-choose-us')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fee-structure')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › Fee Structure
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tutors')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › Male & Female Tutors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  › Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-amber-400 uppercase tracking-wider border-b border-emerald-900 pb-2">
              Contact & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/80">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>UK: <strong className="text-white">{ACADEMY_INFO.phoneUK}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>USA: <strong className="text-white">{ACADEMY_INFO.phoneUSA}</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={ACADEMY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 underline"
                >
                  WhatsApp: {ACADEMY_INFO.whatsapp}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{ACADEMY_INFO.email}</span>
              </p>
              <div className="pt-2 border-t border-emerald-900/60 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Payment Gateways & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300">
          <div>
            <p>© {new Date().getFullYear()} <strong>Al-Huda Quran Academy</strong>. All Rights Reserved.</p>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span className="text-emerald-400 font-semibold mr-1">Accepted Payments:</span>
            <span className="px-2 py-0.5 bg-emerald-950 border border-emerald-800 rounded text-emerald-200">
              PayPal
            </span>
            <span className="px-2 py-0.5 bg-emerald-950 border border-emerald-800 rounded text-emerald-200">
              Visa
            </span>
            <span className="px-2 py-0.5 bg-emerald-950 border border-emerald-800 rounded text-emerald-200">
              MasterCard
            </span>
            <span className="px-2 py-0.5 bg-emerald-950 border border-emerald-800 rounded text-emerald-200">
              Bank Transfer
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
