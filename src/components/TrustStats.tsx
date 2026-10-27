import React from 'react';
import { Award, Users, Globe, BookOpen, Clock } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '15+',
      title: 'Years Experience',
      subtitle: 'Dedicated online Quran teaching',
    },
    {
      icon: Users,
      value: '5,000+',
      title: 'Active Students',
      subtitle: 'Kids & adults across the world',
    },
    {
      icon: BookOpen,
      value: '50+',
      title: 'Certified Tutors',
      subtitle: 'Qualified male & female scholars',
    },
    {
      icon: Globe,
      value: '25+',
      title: 'Countries Served',
      subtitle: 'UK, USA, Canada, Australia, Europe',
    },
    {
      icon: Clock,
      value: '24/7',
      title: 'Flexible Hours',
      subtitle: 'Classes around your timetable',
    },
  ];

  return (
    <div className="bg-white border-y border-slate-200 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 items-center">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-emerald-50/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Icon className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-2xl text-[#0b3b2c] leading-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
