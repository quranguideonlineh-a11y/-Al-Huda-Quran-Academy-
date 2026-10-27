import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/academyData';

export const Testimonials: React.FC = () => {
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = filterCountry === 'ALL'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.countryCode === filterCountry);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Student & Parent Reviews
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
            What Parents Say About Al-Huda Quran Academy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read authentic feedback from Muslim families learning with our dedicated teachers across the UK, USA, Canada, and Australia.
          </p>

          {/* Country filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { code: 'ALL', label: 'All Reviews' },
              { code: 'GB', label: '🇬🇧 United Kingdom' },
              { code: 'US', label: '🇺🇸 United States' },
              { code: 'CA', label: '🇨🇦 Canada' },
              { code: 'AU', label: '🇦🇺 Australia' },
            ].map((c) => (
              <button
                key={c.code}
                onClick={() => setFilterCountry(c.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCountry === c.code
                    ? 'bg-[#0b3b2c] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 hover:border-emerald-400 transition-all shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-200 group-hover:text-emerald-400 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role}
                  </p>
                  <p className="text-[11px] font-medium text-emerald-700 mt-0.5">
                    📍 {item.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  {item.countryCode}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Pilot / Google Reviews style badge */}
        <div className="mt-12 bg-emerald-50 rounded-2xl p-6 border border-emerald-200 text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h4 className="font-heading font-bold text-base text-emerald-950">
            Rated 4.9 / 5 by Over 5,000 Muslim Families Worldwide
          </h4>
          <p className="text-xs text-slate-600">
            Dedicated to nurturing love and reverence for the Holy Quran in every home.
          </p>
        </div>

      </div>
    </section>
  );
};
