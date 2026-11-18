import type { ReactNode } from 'react';

interface PokeballButtonProps {
  label: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  active?: boolean;
  icon?: ReactNode;
  ariaLabel?: string;
  className?: string;
}

export function PokeballButton({
  label,
  onClick,
  size = 'md',
  fullWidth = false,
  active = false,
  icon,
  ariaLabel,
  className = '',
}: PokeballButtonProps) {
  const heightClass =
    size === 'lg' ? 'h-16 px-6' : size === 'sm' ? 'h-12 px-4' : 'h-14 px-5';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={`group relative overflow-hidden border-[3px] border-[#1b1c1c] transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c4dcb] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[4px_4px_0px_0px_#1b1c1c] ${
        fullWidth ? 'w-full' : 'inline-flex min-w-[200px]'
      } ${heightClass} flex items-center justify-center ${className}`}
    >
      {/* Top Pokéball Red Half */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1/2 ${
          active ? 'bg-[#3c4dcb]' : 'bg-[#bc0100]'
        } transition-colors`}
      />
      {/* Bottom Crisp White Half */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-white"
      />
      {/* Center Band */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[4px] bg-[#1b1c1c]"
      />
      {/* Crisp High-Contrast Label + Side Pokéball Center Emblem (zero overlap) */}
      <span className="relative z-10 inline-flex items-center justify-center gap-3 whitespace-nowrap shrink-0">
        <span className="w-7 h-7 rounded-full border-[3px] border-[#1b1c1c] bg-white group-hover:bg-[#ffcb09] group-hover:shadow-[0_0_12px_#ffcb09] transition-all flex items-center justify-center shrink-0">
          {icon ?? (
            <span className="w-2.5 h-2.5 rounded-full border-2 border-[#1b1c1c] bg-white" />
          )}
        </span>
        <span className="bg-[#1b1c1c] text-white font-label text-xs sm:text-sm font-bold uppercase tracking-widest px-3 py-1 border-2 border-[#1b1c1c] group-hover:bg-[#ffcb09] group-hover:text-[#1b1c1c] transition-colors">
          {label}
        </span>
      </span>
    </button>
  );
}
