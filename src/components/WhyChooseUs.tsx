import React from 'react';
import { UserCheck, Award, Clock, Gift, FileCheck, Languages, RotateCcw, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/academyData';

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Award,
  Clock,
  Gift,
  FileCheck,
  Languages,
  RotateCcw,
  ShieldCheck,
};

interface WhyChooseUsProps {
  onOpenTrialModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-pattern-light border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-md border border-emerald-200">
            Why Al-Huda Quran Academy
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
            Why Choose Al-Huda Quran Academy for Your Family?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We provide a structured, safe, and rewarding Quran learning environment tailored to students of all ages and backgrounds.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, index) => {
            const Icon = iconMap[point.icon] || Award;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md border border-slate-200 hover:border-emerald-500/60 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-700 text-emerald-800 group-hover:text-amber-300 flex items-center justify-center transition-colors mb-4 border border-emerald-100">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-[#0b3b2c] transition-colors mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner callout at bottom */}
        <div className="mt-12 bg-gradient-to-r from-[#0b3b2c] to-[#15803d] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-700">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-amber-300">
              Ready to begin your Quranic journey?
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              Experience the difference with 3 complimentary trial lessons. No obligation, no credit card.
            </p>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2 cursor-pointer text-sm"
          >
            <span>Start 3 Days Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
