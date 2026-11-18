import { ArrowLeft, Check, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { TYPE_BADGE_STYLES } from '../data/pokemonData';
import type { Pokemon } from '../types/pokemon';
import { formatDexNumber } from '../utils/pokedex';
import { PokeballButton } from './PokeballButton';
import { PokemonArtwork } from './PokemonArtwork';

interface PokemonDetailViewProps {
  pokemon: Pokemon;
  allPokemon: Pokemon[];
  teamIds: string[];
  onBack: () => void;
  onToggleTeam: (pokemon: Pokemon) => void;
  onSelectEvolution: (pokemonId: string) => void;
  onShareTrainerCard: (pokemon: Pokemon) => void;
}

export function PokemonDetailView({
  pokemon,
  teamIds,
  onBack,
  onToggleTeam,
  onSelectEvolution,
  onShareTrainerCard,
}: PokemonDetailViewProps) {
  const isInTeam = teamIds.includes(pokemon.id);
  const heroArt = pokemon.scannerImageUrl || pokemon.imageUrl;

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8">
      {/* Breadcrumb / Back */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#bc0100] mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Back to Directory
      </button>

      {/* Hero Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-4 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="font-label text-sm font-bold text-[#3c4dcb] mb-2 tabular-nums">
            {formatDexNumber(pokemon.number)}
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1b1c1c] mb-5 uppercase tracking-tight">
            {pokemon.name}
          </h1>

          <div className="flex flex-wrap gap-3 mb-7">
            {pokemon.types.map((t) => (
              <span
                key={t}
                className={`${TYPE_BADGE_STYLES[t]} px-5 py-1.5 font-label text-xs font-bold rounded-full border-2 border-[#1b1c1c] shadow-[4px_4px_0px_0px_#1b1c1c] uppercase`}
              >
                {t}
              </span>
            ))}
          </div>

          <p className="font-body text-lg text-[#603e39] mb-8 max-w-md leading-relaxed">
            {pokemon.description}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <PokeballButton
              label={isInTeam ? 'In Active Team' : 'Add to Team'}
              size="md"
              active={isInTeam}
              icon={
                isInTeam ? (
                  <Check className="w-3.5 h-3.5 text-[#1b1c1c]" aria-hidden="true" />
                ) : undefined
              }
              onClick={() => onToggleTeam(pokemon)}
            />

            <button
              type="button"
              onClick={() => onShareTrainerCard(pokemon)}
              className="inline-flex items-center gap-2 font-label text-sm font-bold text-[#1b1c1c] hover:text-[#bc0100] transition-colors cursor-pointer uppercase tracking-wide py-2"
            >
              <Share2 className="w-4 h-4" aria-hidden="true" />
              Share Trainer Card
            </button>
          </div>
        </div>

        {/* Right Artwork Showcase */}
        <div className="order-1 lg:order-2 flex justify-center relative px-4 py-4">
          <div className="w-full max-w-[480px] aspect-square rounded-[2rem] border-4 border-[#1b1c1c] bg-white hard-shadow-red overflow-hidden flex items-center justify-center p-8 group">
            <PokemonArtwork
              src={heroArt}
              alt={pokemon.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 animate-float-slow"
            />
          </div>

          {/* Floating Height / Weight Chips */}
          <div className="absolute top-0 left-2 sm:left-6 bg-[#3c4dcb] border-2 border-[#1b1c1c] px-4 py-2.5 rounded-xl hard-shadow-sm text-white">
            <span className="font-label text-xs sm:text-sm font-bold uppercase tabular-nums">
              Height: {pokemon.heightM.toFixed(1)} M
            </span>
          </div>

          <div className="absolute bottom-0 right-2 sm:right-6 bg-[#ffcb09] border-2 border-[#1b1c1c] px-4 py-2.5 rounded-xl hard-shadow-sm text-[#1b1c1c]">
            <span className="font-label text-xs sm:text-sm font-bold uppercase tabular-nums">
              Weight: {pokemon.weightKg.toFixed(1)} KG
            </span>
          </div>
        </div>
      </section>

      {/* Base Statistics Bento Row */}
      <section className="py-16">
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-10 flex items-center gap-4 uppercase">
          <span className="w-10 h-1 bg-[#bc0100]" aria-hidden="true" />
          Base Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <DetailStatCard
            label="Health Points"
            value={pokemon.stats.hp}
            barClass="bg-emerald-500"
          />
          <DetailStatCard
            label="Attack Power"
            value={pokemon.stats.atk}
            barClass="bg-[#bc0100]"
          />
          <DetailStatCard
            label="Speed"
            value={pokemon.stats.spd}
            barClass="bg-blue-500"
          />
        </div>
      </section>

      {/* Evolutions & Signature Moves */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-10 py-10">
        {/* Evolutions (Left 2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase">
            Evolutions
          </h2>
          <div className="space-y-4">
            {pokemon.evolutions.map((stage) => {
              const isCurrent = stage.id === pokemon.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => onSelectEvolution(stage.id)}
                  className={`w-full flex items-center gap-5 p-4 rounded-2xl transition-all text-left cursor-pointer ${
                    isCurrent
                      ? 'bg-[#ffdad4] border-4 border-[#1b1c1c] hard-shadow-sm'
                      : 'bg-[#f0eded] border-2 border-[#1b1c1c] hover:shadow-[4px_4px_0px_0px_#1b1c1c]'
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-[#1b1c1c] rounded-xl overflow-hidden p-2 shrink-0">
                    <PokemonArtwork
                      src={stage.imageUrl}
                      alt={stage.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`font-label text-xs font-bold ${
                        isCurrent ? 'text-[#410000]' : 'text-slate-500'
                      }`}
                    >
                      {stage.levelLabel}
                    </p>
                    <h3
                      className={`font-display font-bold text-lg sm:text-xl truncate ${
                        isCurrent ? 'text-[#410000]' : 'text-[#1b1c1c]'
                      }`}
                    >
                      {stage.name}
                    </h3>
                  </div>
                  {isCurrent ? (
                    <CheckCircle2
                      className="w-6 h-6 ml-auto text-[#410000] shrink-0"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronRight
                      className="w-5 h-5 ml-auto text-slate-400 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Signature Moves (Right 3 Cols) */}
        <div className="lg:col-span-3">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6 uppercase">
            Signature Moves
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pokemon.moves.map((move) => (
              <div
                key={move.name}
                className="p-6 bg-white border-2 border-[#1b1c1c] rounded-xl hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#bc0100] transition-all"
              >
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="font-display font-bold text-lg uppercase text-[#1b1c1c]">
                    {move.name}
                  </h3>
                  <span
                    className={`${TYPE_BADGE_STYLES[move.type]} px-3 py-1 text-[11px] font-label font-black rounded-full uppercase shrink-0`}
                  >
                    {move.type}
                  </span>
                </div>
                <div className="flex gap-4 text-xs font-label font-bold text-slate-600 mb-2 tabular-nums">
                  <span>PWR: {move.power}</span>
                  <span>ACC: {move.accuracy}%</span>
                </div>
                <p className="font-body text-sm text-slate-600 leading-relaxed">
                  {move.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailStatCard({
  label,
  value,
  barClass,
}: {
  label: string;
  value: number;
  barClass: string;
}) {
  const pct = Math.min(100, Math.round((value / 150) * 100));
  return (
    <div className="bg-white border-2 border-[#1b1c1c] p-6 sm:p-8 rounded-xl hard-shadow-yellow hover:scale-[1.01] transition-transform">
      <div className="flex justify-between items-end mb-4">
        <span className="font-label text-xs font-bold text-slate-500 uppercase">
          {label}
        </span>
        <span className="font-display text-3xl font-black text-[#1b1c1c] tabular-nums">
          {value}
        </span>
      </div>
      <div className="h-5 bg-slate-100 border-2 border-[#1b1c1c] rounded-full overflow-hidden">
        <div
          className={`h-full ${barClass} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
