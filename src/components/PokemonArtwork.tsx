import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PokemonArtworkProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function PokemonArtwork({
  src,
  alt,
  className = 'w-full h-full object-contain',
  fallbackLabel,
}: PokemonArtworkProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#ffdad4] via-[#fcf9f8] to-[#dfe0ff] p-4 text-center"
        aria-label={alt}
      >
        <div className="w-16 h-16 rounded-full border-[3px] border-[#1b1c1c] bg-white flex items-center justify-center mb-2 shadow-[3px_3px_0px_0px_#1b1c1c]">
          <Sparkles className="w-7 h-7 text-[#bc0100]" aria-hidden="true" />
        </div>
        <span className="font-display font-extrabold text-sm uppercase text-[#1b1c1c]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
