import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageSquare, Menu, X, ChevronDown, Award } from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';

interface HeaderProps {
  onOpenTrialModal: (courseId?: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#0b3b2c] text-emerald-50 text-xs py-2 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Contact Numbers & Email */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${ACADEMY_INFO.phoneUK.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>UK: <strong className="text-white">{ACADEMY_INFO.phoneUK}</strong></span>
            </a>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <a 
              href={`tel:${ACADEMY_INFO.phoneUSA.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>USA: <strong className="text-white">{ACADEMY_INFO.phoneUSA}</strong></span>
            </a>
            <span className="hidden md:inline text-emerald-700">|</span>
            <a 
              href={`mailto:${ACADEMY_INFO.email}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{ACADEMY_INFO.email}</span>
            </a>
          </div>

          {/* WhatsApp & Free Trial callout */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:flex items-center gap-1 text-emerald-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>24/7 Live Classes Available</span>
            </span>
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-2.5 py-1 rounded text-xs font-semibold shadow-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={() => onOpenTrialModal()}
              className="bg-amber-400 hover:bg-amber-500 text-emerald-950 px-2.5 py-1 rounded text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              3 Days Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0b3b2c] to-[#15803d] flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform border border-amber-400/40">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
                <path d="M6 14h6" />
                <circle cx="17" cy="14" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#0b3b2c] tracking-tight leading-none group-hover:text-[#15803d] transition-colors">
                Al-Huda <span className="text-amber-600">Quran Academy</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-1">
                Online Quran Teaching Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
            >
              About Us
            </button>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 cursor-pointer"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {coursesDropdownOpen && (
                <div
                  onMouseLeave={() => setCoursesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider border-b border-slate-100 mb-1">
                    Quran & Islamic Programs
                  </div>
                  {COURSES.map((course) => (
                    <button
                      key={course.id}
                      onClick={() => {
                        setCoursesDropdownOpen(false);
                        scrollToSection('courses');
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span className="font-medium group-hover:font-semibold">{course.title}</span>
                      <span className="text-[10px] text-emerald-600 font-arabic font-normal">{course.arabicTitle}</span>
                    </button>
                  ))}
                  <div className="p-2 border-t border-slate-100 mt-1 bg-slate-50 rounded-b-xl">
                    <button
                      onClick={() => {
                        setCoursesDropdownOpen(false);
                        scrollToSection('courses');
                      }}
                      className="w-full text-center text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                    >
                      View All 6 Courses →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
            >
              Why Choose Us
            </button>

            <button
              onClick={() => scrollToSection('fee-structure')}
              className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
            >
              Fee Structure
            </button>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollToSection('tutors')}
              className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
            >
              Tutors
            </button>

            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
            >
              Testimonials
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-emerald-700 transition-colors py-2 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenTrialModal()}
              className="bg-[#15803d] hover:bg-[#0f3d2e] text-white text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer group"
            >
              <Award className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Book Free Trial</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-emerald-800 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm flex justify-between items-center"
            >
              <span>Our Courses</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">6 Programs</span>
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('fee-structure')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              Fee Structure & Packages
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('tutors')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              Male & Female Tutors
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              Student Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 px-3 rounded hover:bg-emerald-50 hover:text-emerald-800 text-sm"
            >
              Contact Us
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full bg-[#15803d] hover:bg-[#0f3d2e] text-white py-3 rounded-lg font-bold text-center text-sm shadow cursor-pointer"
              >
                Register For 3 Days Free Trial
              </button>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-2.5 rounded-lg font-semibold text-center text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
