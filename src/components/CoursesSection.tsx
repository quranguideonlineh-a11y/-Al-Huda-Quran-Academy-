import React, { useState } from 'react';
import { BookOpen, Sparkles, HeartHandshake, Compass, Smile, Flame, Check, Clock, User, ArrowRight } from 'lucide-react';
import { COURSES } from '../data/academyData';
import { Course } from '../types';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Sparkles,
  HeartHandshake,
  Compass,
  Smile,
  Flame,
};

interface CoursesSectionProps {
  onOpenTrialModal: (courseId?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenTrialModal }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Our Online Quran Courses
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
            Comprehensive Online Quran & Islamic Programs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tailored curriculums designed for children, beginners, and advanced adult learners with individualized one-on-one attention.
          </p>
        </div>

        {/* Feature Hero Card with study material image */}
        <div className="mb-12 bg-emerald-900 rounded-2xl overflow-hidden shadow-xl text-white grid grid-cols-1 lg:grid-cols-12 border border-emerald-800">
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-emerald-950 font-bold px-3 py-1 rounded-md text-xs self-start">
              ⭐ Featured Program
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Noorani Qaida & Quran Reading with Tajweed
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              The cornerstone of our academy. Absolute beginners start with the Noorani Qaida, learning Arabic letter recognition and articulation points (Makharij). Then, transition seamlessly to fluent Quran recitation with authentic Tajweed rules.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-100/90 pt-1">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Word-by-word recitation drill</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Tajweed phonetic rules</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Male & female teacher options</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Free digital course materials</span>
              </div>
            </div>
            <div className="pt-3">
              <button
                onClick={() => onOpenTrialModal('noorani-qaida')}
                className="bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-6 py-3 rounded-xl transition-all shadow cursor-pointer text-sm inline-flex items-center gap-2"
              >
                <span>Enroll with 3 Days Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src="/src/assets/images/noorani_qaida_quran_1793068476966.jpg"
              alt="Noorani Qaida and Holy Quran study materials"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-emerald-950/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* 6 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => {
            const Icon = iconMap[course.iconName] || BookOpen;
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Course Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-700 group-hover:text-amber-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {course.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-heading font-bold text-lg text-[#0b3b2c] group-hover:text-emerald-700 transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  <div className="text-right text-xs text-emerald-800/80 font-arabic font-semibold mt-0.5">
                    {course.arabicTitle}
                  </div>

                  <p className="text-xs text-slate-500 font-medium italic mt-1.5 mb-3">
                    {course.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Curriculum Highlights
                    </p>
                    {course.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Card Footer */}
                <div className="bg-slate-50 p-5 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-emerald-600" />
                      {course.suitableFor}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenTrialModal(course.id)}
                    className="w-full bg-[#15803d] hover:bg-[#0b3b2c] text-white py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Book 3 Days Free Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
