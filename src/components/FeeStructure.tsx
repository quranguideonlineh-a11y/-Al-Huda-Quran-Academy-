import React, { useState } from 'react';
import { Check, ShieldCheck, HelpCircle, Star, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/academyData';

type Currency = 'GBP' | 'USD' | 'CAD' | 'AUD' | 'EUR';

const currencySymbols: Record<Currency, string> = {
  GBP: '£',
  USD: '$',
  CAD: 'C$',
  AUD: 'A$',
  EUR: '€',
};

const currencyLabels: Record<Currency, string> = {
  GBP: 'UK (GBP £)',
  USD: 'USA & World (USD $)',
  CAD: 'Canada (CAD C$)',
  AUD: 'Australia (AUD A$)',
  EUR: 'Europe (EUR €)',
};

interface FeeStructureProps {
  onOpenTrialModal: (courseId?: string, planId?: string) => void;
}

export const FeeStructure: React.FC<FeeStructureProps> = ({ onOpenTrialModal }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('GBP');
  const [hasSiblingDiscount, setHasSiblingDiscount] = useState(false);

  return (
    <section id="fee-structure" className="py-16 sm:py-20 bg-pattern-light border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-md border border-emerald-200">
            Affordable & Transparent Packages
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
            Fee Structure & Monthly Plans
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Simple, affordable, and flexible monthly pricing with <strong>no admission fees</strong> and <strong>no binding contracts</strong>. Try our 3 Days Free Trial before making any payment.
          </p>
        </div>

        {/* Currency Switcher & Sibling Discount Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-10">
          
          {/* Currency Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-500 mr-1 hidden md:inline">
              Select Currency:
            </span>
            {(['GBP', 'USD', 'CAD', 'AUD', 'EUR'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setSelectedCurrency(curr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCurrency === curr
                    ? 'bg-[#0b3b2c] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {curr} ({currencySymbols[curr]})
              </button>
            ))}
          </div>

          {/* Sibling Discount Toggle */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <div className="text-right">
              <span className="text-xs font-bold text-slate-800 block">
                Family & Sibling Discount
              </span>
              <span className="text-[11px] text-emerald-700 font-semibold">
                Save 15% on 2nd & 3rd student
              </span>
            </div>
            <button
              onClick={() => setHasSiblingDiscount(!hasSiblingDiscount)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                hasSiblingDiscount ? 'bg-emerald-600' : 'bg-slate-300'
              }`}
              role="switch"
              aria-checked={hasSiblingDiscount}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  hasSiblingDiscount ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const rawPrice = plan.prices[selectedCurrency];
            const finalPrice = hasSiblingDiscount ? Math.round(rawPrice * 0.85) : rawPrice;
            const symbol = currencySymbols[selectedCurrency];

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  plan.isPopular
                    ? 'border-2 border-emerald-600 shadow-xl scale-[1.02] z-10'
                    : 'border-slate-200 shadow-xs hover:shadow-md'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-emerald-700 text-amber-300 text-[11px] font-bold text-center py-1.5 uppercase tracking-wider flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-300" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="p-6">
                  {/* Plan Name */}
                  <h3 className="font-heading font-extrabold text-lg text-slate-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {plan.classesPerMonth} classes per month • {plan.durationPerClass}
                  </p>

                  {/* Price Display */}
                  <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-[#0b3b2c]">{symbol}</span>
                      <span className="text-4xl font-heading font-extrabold text-[#0b3b2c]">
                        {finalPrice}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>
                    {hasSiblingDiscount && (
                      <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        15% Sibling Discount Applied (was {symbol}{rawPrice})
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 text-xs text-slate-700 mb-6">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Footer Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenTrialModal(undefined, plan.id)}
                    className={`w-full py-3 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-amber-400 hover:bg-amber-500 text-emerald-950 font-extrabold shadow-md'
                        : 'bg-[#15803d] hover:bg-[#0b3b2c] text-white'
                    }`}
                  >
                    <span>Start 3 Days Free Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Pay only after trial ends
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees & Payment Notice */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-slate-900">Zero Admission Fee</h4>
              <p className="text-xs text-slate-500">No hidden fees, no registration or setup charges.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Sparkles className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-slate-900">3 Days Free Trial First</h4>
              <p className="text-xs text-slate-500">Experience our tutors risk-free before committing.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Check className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-slate-900">Safe Online Payments</h4>
              <p className="text-xs text-slate-500">PayPal, Visa, MasterCard, and direct bank transfers.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
