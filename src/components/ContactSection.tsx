import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, Globe } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Get In Touch
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b2c] tracking-tight">
            Contact Al-Huda Quran Academy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions or need assistance enrolling? Reach out to our 24/7 student support team via phone, WhatsApp, or through the contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5">
              <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-200 pb-3">
                Direct Contact Lines
              </h3>

              {/* UK Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    United Kingdom Line
                  </span>
                  <a
                    href={`tel:${ACADEMY_INFO.phoneUK.replace(/\s+/g, '')}`}
                    className="text-base font-extrabold text-[#0b3b2c] hover:text-emerald-700 transition-colors"
                  >
                    {ACADEMY_INFO.phoneUK}
                  </a>
                  <p className="text-[11px] text-slate-500">Available Mon - Sun (24 Hours)</p>
                </div>
              </div>

              {/* USA Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    USA & International Line
                  </span>
                  <a
                    href={`tel:${ACADEMY_INFO.phoneUSA.replace(/\s+/g, '')}`}
                    className="text-base font-extrabold text-[#0b3b2c] hover:text-emerald-700 transition-colors"
                  >
                    {ACADEMY_INFO.phoneUSA}
                  </a>
                  <p className="text-[11px] text-slate-500">Available Mon - Sun (24 Hours)</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Official WhatsApp
                  </span>
                  <a
                    href={ACADEMY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-extrabold text-emerald-800 hover:text-emerald-900 transition-colors flex items-center gap-1.5"
                  >
                    <span>{ACADEMY_INFO.whatsapp}</span>
                    <span className="text-xs bg-[#25D366] text-white px-2 py-0.5 rounded font-bold">Chat Now</span>
                  </a>
                  <p className="text-[11px] text-slate-500">Instant answers from academic advisor</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Email Support
                  </span>
                  <a
                    href={`mailto:${ACADEMY_INFO.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    {ACADEMY_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500">Inquiries answered within 2 hours</p>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Head Office
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {ACADEMY_INFO.address}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="font-heading font-extrabold text-xl text-[#0b3b2c] mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the form and our administrator will respond promptly.
              </p>

              {submitted ? (
                <div className="bg-emerald-100/70 border border-emerald-300 rounded-xl p-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-emerald-950">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-md mx-auto">
                    Thank you <strong className="text-slate-900">{formData.name}</strong>. We have received your inquiry regarding <em>"{formData.subject}"</em>. Our support team will get in touch with you at <strong className="text-slate-900">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="text-xs text-emerald-800 font-bold hover:underline cursor-pointer pt-2"
                  >
                    Send another inquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Khan"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                      />
                    </div>

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
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp (with country code) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7123 456789"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-800"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="3 Days Free Trial Question">3 Days Free Trial Question</option>
                        <option value="Schedule Timings">Class Scheduling / Timings</option>
                        <option value="Fee Structure & Discount">Fee Structure & Sibling Discount</option>
                        <option value="Female Teacher Request">Female Teacher Request</option>
                        <option value="Payment Method Assistance">Payment Method Assistance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message or Inquiry *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can assist you, your preferred class days, or any questions about our courses..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#15803d] hover:bg-[#0b3b2c] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
