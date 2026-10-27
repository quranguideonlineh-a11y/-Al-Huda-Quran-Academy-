import React from 'react';
import { UserPlus, Video, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenTrialModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrialModal }) => {
  const steps = [
    {
      number: '01',
      title: 'Register Online in 1 Minute',
      subtitle: 'Quick & Simple Sign-Up',
      description: 'Fill out our short online trial form with student details and preferred class times. No registration fees or credit card details required.',
      icon: UserPlus,
      perks: ['Zero upfront cost', 'Choose male or female tutor', 'Pick your convenient days'],
    },
    {
      number: '02',
      title: 'Attend 3 Free Trial Classes',
      subtitle: 'Experience 1-on-1 Teaching',
      description: 'Our coordinator connects with you via WhatsApp or Email to schedule 3 live demo classes on Zoom or Skype with your assigned certified teacher.',
      icon: Video,
      perks: ['One-on-one live interactive class', 'Evaluation of current Quran level', 'Personalized learning plan proposal'],
    },
    {
      number: '03',
      title: 'Choose Package & Continue',
      subtitle: 'Flexible Learning Plan',
      description: 'If you are 100% delighted with the teacher and progress, choose a monthly fee package that matches your family’s routine and continue regular classes.',
      icon: Award,
      perks: ['Monthly flexible payment', 'Sibling family discounts', 'Makeup classes for any missed sessions'],
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-md border border-emerald-200">
            How It Works
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
            Start Learning in 3 Simple Steps
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Begin your or your child’s Quran learning journey with <strong className="text-slate-900">Al-Huda Quran Academy</strong> effortlessly without any hassle.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-200 hover:border-emerald-500/60 transition-all flex flex-col justify-between relative group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100 group-hover:bg-[#0b3b2c] group-hover:text-amber-300 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-emerald-200 group-hover:text-amber-400 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    {step.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  {step.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenTrialModal}
            className="bg-[#15803d] hover:bg-[#0b3b2c] text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer text-sm"
          >
            <span>Book Your Free Trial Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
