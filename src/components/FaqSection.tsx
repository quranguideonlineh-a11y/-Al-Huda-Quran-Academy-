import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, ACADEMY_INFO } from '../data/academyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-md border border-emerald-200">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
            Have Questions About Our Quran Classes?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our online classes, trials, teachers, and scheduling.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-4 shadow-xs">
          <h4 className="font-heading font-bold text-lg text-slate-900">
            Still have a question or need personalized guidance?
          </h4>
          <p className="text-xs text-slate-500 max-w-lg mx-auto">
            Our admissions and academic support team is available 24/7 on WhatsApp and direct telephone lines to assist you with class schedules and tutor assignments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp (+44 203 289 9880)</span>
            </a>
            <a
              href={`tel:${ACADEMY_INFO.phoneUK.replace(/\s+/g, '')}`}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Call UK Desk</span>
            </a>
            <a
              href={`tel:${ACADEMY_INFO.phoneUSA.replace(/\s+/g, '')}`}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Call USA Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
