import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, MessageSquare, BookOpen, Clock, User, Mail, Phone } from 'lucide-react';
import { COURSES, PRICING_PLANS, ACADEMY_INFO } from '../data/academyData';
import { TrialBookingFormData } from '../types';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  initialPlanId?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  initialCourseId,
  initialPlanId,
}) => {
  const [formData, setFormData] = useState<TrialBookingFormData>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    course: initialCourseId || 'noorani-qaida',
    tutorGender: 'any',
    preferredDays: 'Weekdays (Mon-Fri)',
    preferredTimezone: 'UK (GMT / BST)',
    skypeOrWhatsapp: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourseId) {
      setFormData((prev) => ({ ...prev, course: initialCourseId }));
    }
  }, [initialCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-[#0b3b2c] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-200 hover:text-white p-1 rounded-lg hover:bg-emerald-800/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>3 Days Free Trial • 100% Complimentary</span>
          </div>

          <h3 className="font-heading font-extrabold text-2xl text-white">
            Register for Free Quran Classes
          </h3>
          <p className="text-emerald-100/90 text-xs mt-1">
            Experience 1-on-1 personalized lessons at <strong className="text-white">Al-Huda Quran Academy</strong> before paying anything.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-emerald-700" />
              </div>

              <h4 className="font-heading font-extrabold text-2xl text-[#0b3b2c]">
                Trial Registration Confirmed!
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                JazakAllah Khair <strong className="text-slate-800">{formData.studentName}</strong>. Your registration has been received. Our coordinator will contact you at <strong className="text-slate-800">{formData.phone || formData.email}</strong> within 2 hours to confirm your trial schedule and assign your certified tutor.
              </p>

              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 text-xs text-emerald-900 space-y-2 text-left">
                <div className="font-bold flex items-center gap-1.5 text-emerald-950">
                  <span>Selected Details:</span>
                </div>
                <div>• <strong>Course:</strong> {COURSES.find(c => c.id === formData.course)?.title || formData.course}</div>
                <div>• <strong>Tutor Preference:</strong> {formData.tutorGender === 'any' ? 'Any Qualified Tutor' : formData.tutorGender === 'female' ? 'Female Quran Teacher' : 'Male Quran Teacher'}</div>
                <div>• <strong>Preferred Days:</strong> {formData.preferredDays}</div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={ACADEMY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Immediately on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Student's name"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="If student is a minor"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 7123 456789"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Course Desired *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 text-slate-800"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Country / Timezone *
                  </label>
                  <select
                    value={formData.preferredTimezone}
                    onChange={(e) => setFormData({ ...formData, preferredTimezone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 text-slate-800"
                  >
                    <option value="UK (GMT / BST)">🇬🇧 United Kingdom (GMT / BST)</option>
                    <option value="USA Eastern (EST)">🇺🇸 USA - Eastern (EST / EDT)</option>
                    <option value="USA Central (CST)">🇺🇸 USA - Central (CST / CDT)</option>
                    <option value="USA Pacific (PST)">🇺🇸 USA - Pacific (PST / PDT)</option>
                    <option value="Canada (EST / PST)">🇨🇦 Canada</option>
                    <option value="Australia (AEST)">🇦🇺 Australia (Sydney / Melbourne)</option>
                    <option value="Europe (CET)">🇪🇺 Europe (CET / CEST)</option>
                    <option value="Other">🌍 Other International</option>
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
                    { id: 'female', label: 'Female Teacher' },
                    { id: 'male', label: 'Male Teacher' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, tutorGender: t.id as any })}
                      className={`py-2 px-2 rounded-lg font-medium text-center border cursor-pointer transition-colors ${
                        formData.tutorGender === t.id
                          ? 'bg-[#0b3b2c] text-white border-[#0b3b2c]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Days / Timings
                </label>
                <input
                  type="text"
                  value={formData.preferredDays}
                  onChange={(e) => setFormData({ ...formData, preferredDays: e.target.value })}
                  placeholder="e.g. Weekdays 5 PM, or Saturday & Sunday mornings"
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#15803d] hover:bg-[#0b3b2c] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>Submit 3 Days Free Trial Request</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>No credit card required • Cancel anytime without fees</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
