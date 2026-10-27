import React, { useState } from 'react';
import { MessageSquare, Award, X } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenTrialModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* WhatsApp Tooltip Pill */}
      {showTooltip && (
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-3 max-w-xs text-xs text-slate-800 pointer-events-auto flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <p className="font-bold text-emerald-900">Need help with registration?</p>
            <p className="text-[11px] text-slate-500">
              Chat live with our Quran coordinator on WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button Row */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Quick Free Trial Button */}
        <button
          onClick={onOpenTrialModal}
          className="bg-amber-400 hover:bg-amber-500 text-emerald-950 px-3.5 py-3 rounded-full font-extrabold text-xs shadow-lg hover:shadow-xl transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer border-2 border-white"
        >
          <Award className="w-4 h-4 text-emerald-950" />
          <span className="hidden sm:inline">3 Days Free Trial</span>
          <span className="sm:hidden">Trial</span>
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href={ACADEMY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-transform hover:scale-110 relative group border-2 border-white"
          aria-label="Chat with Al-Huda Quran Academy on WhatsApp"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        </a>
      </div>

    </div>
  );
};
