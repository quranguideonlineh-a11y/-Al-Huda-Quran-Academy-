import React from 'react';
import { Award, ShieldCheck, Heart, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface TutorsSectionProps {
  onOpenTrialModal: () => void;
}

export const TutorsSection: React.FC<TutorsSectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="tutors" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Our Certified Faculty
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
            Qualified Male & Female Quran Teachers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every tutor at <strong className="text-slate-900">Al-Huda Quran Academy</strong> is rigorously vetted, certified, and trained in modern pedagogical techniques to make learning enjoyable and effective.
          </p>
        </div>

        {/* Two Columns: Female Tutors & Male Tutors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Female Tutors Card */}
          <div className="bg-gradient-to-br from-emerald-50/70 to-white rounded-2xl p-7 border border-emerald-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-100 text-emerald-800 font-bold text-xs px-3 py-1 rounded-full border border-emerald-200">
                  Dedicated for Sisters & Children
                </span>
                <Heart className="w-5 h-5 text-emerald-600" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-[#0b3b2c]">
                Certified Female Quran Teachers (Alimas)
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                We understand that many parents prefer a female instructor for their young children and daughters, and adult Muslim sisters prefer studying in complete privacy with qualified female scholars.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Graduates in Dars-e-Nizami (Alimah degree) with Tajweed mastery</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Specially trained for young kids aged 4 to 10 with patient coaching</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fluent English communication tailored to UK, USA, and Canadian youth</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Comfortable and supportive learning environment for sisters</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-100">
              <button
                onClick={onOpenTrialModal}
                className="w-full bg-[#15803d] hover:bg-[#0b3b2c] text-white py-3 rounded-xl font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request a Female Quran Teacher</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Male Tutors Card */}
          <div className="bg-gradient-to-br from-amber-50/50 to-white rounded-2xl p-7 border border-amber-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-amber-800 font-bold text-xs px-3 py-1 rounded-full border border-amber-200">
                  Scholars & Qaris
                </span>
                <Award className="w-5 h-5 text-amber-600" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-[#0b3b2c]">
                Qualified Male Scholars & Huffaz
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Our male tutors are certified Hafiz-ul-Quran and Qaris with verified Ijazah in the recitation methods of Hafs ‘an ‘Asim, experienced in guiding boys, teens, and adult brothers to Quranic fluency.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Authentic Sanad and Ijazah in Quran recitation and Tajweed</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Specialized Hifz mentors who build steady revision habits</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Trained in Islamic jurisprudence (Fiqh), Seerah, and Quran Tafseer</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Punctual, committed, and adaptable to busy work and school routines</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-amber-100">
              <button
                onClick={onOpenTrialModal}
                className="w-full bg-[#0b3b2c] hover:bg-[#15803d] text-white py-3 rounded-xl font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request a Male Quran Teacher</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Verification & Quality Promise */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                Rigorous 4-Stage Teacher Selection Process
              </h4>
              <p className="text-xs text-slate-500">
                Background verification • Tajweed recitation audit • English fluency check • Child safety and pedagogical evaluation
              </p>
            </div>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="shrink-0 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold px-5 py-2.5 rounded-xl text-xs cursor-pointer shadow-xs"
          >
            Schedule Free Evaluation Class
          </button>
        </div>

      </div>
    </section>
  );
};
