import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Clock, Award, Star, ArrowRight, User, Mail, Phone, BookOpen, Send } from 'lucide-react';
import { COURSES } from '../data/academyData';

interface HeroProps {
  onOpenTrialModal: (courseId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'noorani-qaida',
    tutorGender: 'any',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative bg-islamic-pattern text-white overflow-hidden py-12 lg:py-16">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Copy & Key Benefits */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/50 text-amber-300 text-xs font-semibold shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Certified Online Quran Academy for Worldwide Learners</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white">
              Learn Holy Quran Online <br />
              <span className="text-amber-400">With Proper Tajweed</span>
            </h1>

            {/* Description */}
            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Join <strong className="text-white font-semibold">Al-Huda Quran Academy</strong> for live, 1-on-1 interactive Quran classes from the comfort and safety of your home. Learn Noorani Qaida, Tajweed rules, Quran memorization, and Islamic values with qualified male & female tutors at your own flexible pace.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 text-sm text-emerald-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>3 Days Free Trial First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>1-on-1 Interactive Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Certified Male & Female Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Flexible Scheduling</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenTrialModal()}
                className="bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer text-base"
              >
                <span>Get 3 Days Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('fee-structure')}
                className="bg-emerald-800/80 hover:bg-emerald-700/80 text-white font-semibold px-5 py-3.5 rounded-xl border border-emerald-600/70 transition-all flex items-center gap-2 cursor-pointer text-base"
              >
                <span>View Fee Structure</span>
              </button>
            </div>

            {/* Trust Mini Note */}
            <div className="flex items-center gap-4 pt-2 text-xs text-emerald-200/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                No Credit Card Required
              </span>
              <span className="text-emerald-700">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                Cancel Anytime
              </span>
              <span className="text-emerald-700">•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                Ijazah Verified Tutors
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual & Embedded Quick Trial Form */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Embedded Registration Box */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-slate-800 border-4 border-amber-400/80">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-extrabold text-xl text-[#0b3b2c]">
                    Book 3 Days Free Trial
                  </h3>
                  <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 rounded-full">
                    100% Free
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Start learning with <span className="font-semibold text-emerald-800">Al-Huda Quran Academy</span> today.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-emerald-900">
                    Registration Received!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    JazakAllah Khair <strong className="text-slate-800">{formData.name}</strong>. Our student coordinator will contact you at <strong className="text-slate-800">{formData.phone || formData.email}</strong> within a few hours to arrange your 3 complimentary trial sessions.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-emerald-700 font-bold hover:underline cursor-pointer pt-2 inline-block"
                  >
                    Submit another registration →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student / Parent Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Brother Zaid / Sister Fatima"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@email.com"
                          className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-slate-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 or +1 ..."
                          className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-slate-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Desired Course *
                    </label>
                    <div className="relative">
                      <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-slate-50 text-slate-800"
                      >
                        {COURSES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tutor Preference
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {[
                        { id: 'any', label: 'Any Tutor' },
                        { id: 'female', label: 'Female Tutor' },
                        { id: 'male', label: 'Male Tutor' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, tutorGender: t.id })}
                          className={`py-1.5 px-2 rounded-md font-medium text-center border cursor-pointer transition-colors ${
                            formData.tutorGender === t.id
                              ? 'bg-emerald-800 text-white border-emerald-800'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#15803d] hover:bg-[#0f3d2e] text-white py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Register For Free Trial</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    🔒 100% Privacy Guaranteed. Your details are safe with us.
                  </p>
                </form>
              )}
            </div>

            {/* Quick Hero Banner Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-emerald-700/50 shadow-xl group">
              <img
                src="/src/assets/images/hero_quran_student_1793068441273.jpg"
                alt="Children learning Holy Quran online at Al-Huda Quran Academy"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full text-xs">
                  <div>
                    <p className="font-bold text-white text-sm">Interactive 1-on-1 Sessions</p>
                    <p className="text-emerald-200">Personalized attention for every child</p>
                  </div>
                  <div className="bg-amber-400 text-emerald-950 font-bold px-2.5 py-1 rounded-md text-xs">
                    Live Demo Class
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
