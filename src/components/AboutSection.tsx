import React from 'react';
import { CheckCircle, ShieldCheck, Heart, Sparkles, BookOpen, UserCheck, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface AboutSectionProps {
  onOpenTrialModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image showcase with badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img
                src="/src/assets/images/quran_tutors_team_1793068459105.jpg"
                alt="Certified Male and Female Quran Tutors at Al-Huda Quran Academy"
                className="w-full h-[420px] object-cover object-top hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Bottom Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl shadow-lg border border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-700 text-amber-300 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0b3b2c]">
                      Verified Male & Female Tutors
                    </h4>
                    <p className="text-xs text-slate-500">
                      Ijazah Certified scholars with extensive experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Card */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-amber-400 text-emerald-950 px-4 py-2.5 rounded-xl font-bold shadow-xl border-2 border-white text-xs">
              ⭐ 3 Days Free Trial
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                About Al-Huda Quran Academy
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
                Empowering Muslims Worldwide With Authentic Quranic Education
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong className="text-slate-900 font-semibold">Al-Huda Quran Academy</strong> is an independent online educational platform dedicated to teaching the Holy Quran with authentic Tajweed rules to Muslim children, adults, and reverts across the globe.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We understand that finding a qualified Quran tutor locally can be difficult, particularly for families living in Western countries such as the <strong>United Kingdom, United States, Canada, and Australia</strong>. Our one-to-one live interactive sessions via Zoom and Skype bridge this gap, enabling students to learn Quran recitation, memorization, and Islamic values from the comfort and safety of their home.
            </p>

            {/* 4 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">One-on-One Individual Attention</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Customized teaching matched to each student’s pace and learning style.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Female Tutors for Sisters & Kids</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Certified Alimas offering a comfortable, respectful environment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Flexible 24/7 Scheduling</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Classes scheduled around school, work, and family commitments.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Safe Home Environment</h4>
                  <p className="text-xs text-slate-500 mt-0.5">No driving in winter weather; monitor your child’s lessons firsthand.</p>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenTrialModal}
                className="bg-[#15803d] hover:bg-[#0f3d2e] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-sm"
              >
                <span>Book Your 3-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-emerald-950 font-bold text-sm flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>Talk to Academic Advisor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
