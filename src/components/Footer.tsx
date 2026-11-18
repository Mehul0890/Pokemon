import { Compass, Share2 } from 'lucide-react';
import type { AppView } from '../types/pokemon';

interface FooterProps {
  onNavigate: (view: AppView) => void;
  onOpenPolicy: (title: string) => void;
  onOpenShare: () => void;
}

export function Footer({ onNavigate, onOpenPolicy, onOpenShare }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white border-t-[4px] border-[#bc0100] mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <span className="text-xl font-black italic uppercase font-display tracking-tight">
            PokéDex Adventure
          </span>
          <p className="font-display text-sm text-slate-400">
            © 2026 PokéDex Adventure. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {[
            'Privacy Policy',
            'Terms of Service',
            'Contact Support',
            'Trainer Guidelines',
          ].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => onOpenPolicy(label)}
              className="text-slate-400 hover:text-white font-display text-sm tracking-wide transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#ffcb09]"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onOpenShare}
            aria-label="Share Trainer Card"
            className="w-10 h-10 border-2 border-[#ffcb09] flex items-center justify-center text-[#ffcb09] hover:bg-[#ffcb09] hover:text-slate-900 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('explore')}
            aria-label="Return to Explore"
            className="w-10 h-10 border-2 border-[#ffcb09] flex items-center justify-center text-[#ffcb09] hover:bg-[#ffcb09] hover:text-slate-900 transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
