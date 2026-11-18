import { Disc, Map, Sparkles, Trophy } from 'lucide-react';
import { EXPLORE_ASSETS } from '../data/pokemonData';
import type { Pokemon } from '../types/pokemon';
import { PokeballButton } from './PokeballButton';
import { PokemonArtwork } from './PokemonArtwork';

export type ExploreFeatureModalId = 'arena' | 'map' | 'academy';

interface ExploreViewProps {
  lastEncountered: Pokemon;
  onBeginJourney: () => void;
  onSelectPokemonDetail: (pokemon: Pokemon) => void;
  onOpenShinyGallery: () => void;
  onOpenFeatureModal: (feature: ExploreFeatureModalId) => void;
}

export function ExploreView({
  lastEncountered,
  onBeginJourney,
  onSelectPokemonDetail,
  onOpenShinyGallery,
  onOpenFeatureModal,
}: ExploreViewProps) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[78vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4 sm:px-8 border-b-[3px] border-[#1b1c1c]">
        {/* Atmospheric Mountain Backdrop */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <PokemonArtwork
            src={EXPLORE_ASSETS.heroMountains}
            alt="Misty mountain peaks across Kanto, Johto, and Hoenn"
            className="w-full h-full object-cover grayscale brightness-75 scale-105"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-6 py-2 bg-[#ffcb09] border-[3px] border-[#1b1c1c] hard-shadow -rotate-2">
            <span className="font-label text-[#6f5700] uppercase tracking-widest text-sm sm:text-base font-bold">
              Region: Kanto / Johto / Hoenn
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#bc0100] font-black uppercase tracking-tighter leading-[0.95] drop-shadow-[4px_4px_0px_#1b1c1c]">
            Gotta Catch{' '}
            <br />
            &apos;Em All
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#1b1c1c]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Embark on an epic journey across vibrant landscapes. Track rare species,
            battle elite trainers, and become the champion you were born to be.
          </p>

          <div className="pt-6">
            <PokeballButton
              label="Begin Journey"
              size="lg"
              onClick={onBeginJourney}
              className="hover:scale-105"
            />
          </div>
        </div>

        {/* Floating Last Encountered Card */}
        <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-10 lg:left-16 z-20">
          <button
            type="button"
            onClick={() => onSelectPokemonDetail(lastEncountered)}
            className="bg-white border-[3px] border-[#1b1c1c] p-4 hard-shadow rotate-2 hover:rotate-0 hover:shadow-[6px_6px_0px_0px_#ffcb09] transition-all text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#bc0100] rounded-full border-[3px] border-[#1b1c1c] flex items-center justify-center shrink-0">
                <Disc className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-label text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                  Last Encountered
                </p>
                <p className="font-display font-extrabold text-lg text-[#1b1c1c] group-hover:text-[#bc0100] transition-colors">
                  {lastEncountered.name} #{lastEncountered.number}
                </p>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Adventure Features Bento Grid */}
      <section className="py-20 px-4 sm:px-8 max-w-[1280px] mx-auto">
        <div className="mb-14 text-center">
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight mb-4">
            Adventure Features
          </h2>
          <div className="h-2 w-28 bg-[#bc0100] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Feature: Competitive Battle Arena */}
          <button
            type="button"
            onClick={() => onOpenFeatureModal('arena')}
            className="md:col-span-2 relative group overflow-hidden border-[3px] border-[#1b1c1c] hard-shadow hover:shadow-[8px_8px_0px_0px_#ffcb09] hover:scale-[1.01] transition-all bg-[#3c4dcb] min-h-[300px] text-left cursor-pointer"
          >
            <PokemonArtwork
              src={EXPLORE_ASSETS.battleArena}
              alt="Competitive Battle Arena stadium"
              className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10 text-white">
              <span className="bg-[#bc0100] border-2 border-[#1b1c1c] px-3 py-1 text-xs font-label font-bold uppercase mb-3 inline-block w-fit">
                New Season
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl mb-2">
                Competitive Battle Arena
              </h3>
              <p className="font-body text-base sm:text-lg text-white/90 max-w-md">
                Rise through the ranks and face trainers from across the globe in our
                high-stakes competitive circuit.
              </p>
            </div>
          </button>

          {/* Small Feature 1: Shiny Hunter */}
          <button
            type="button"
            onClick={onOpenShinyGallery}
            className="bg-[#ffcb09] border-[3px] border-[#1b1c1c] hard-shadow hover:shadow-[8px_8px_0px_0px_#bc0100] hover:scale-[1.01] transition-all p-8 sm:p-10 flex flex-col justify-between text-left cursor-pointer min-h-[260px]"
          >
            <Sparkles className="w-12 h-12 text-[#1b1c1c]" aria-hidden="true" />
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1b1c1c] mb-2">
                Shiny Hunter
              </h3>
              <p className="font-body text-sm sm:text-base text-[#6f5700] font-medium">
                Integrated tools to track rare color variants and spawn patterns in
                real-time.
              </p>
            </div>
          </button>

          {/* Small Feature 2: Live Map */}
          <button
            type="button"
            onClick={() => onOpenFeatureModal('map')}
            className="bg-white border-[3px] border-[#1b1c1c] hard-shadow hover:shadow-[8px_8px_0px_0px_#ffcb09] hover:scale-[1.01] transition-all p-8 sm:p-10 flex flex-col justify-between text-left cursor-pointer min-h-[260px]"
          >
            <Map className="w-12 h-12 text-[#bc0100]" aria-hidden="true" />
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1b1c1c] mb-2">
                Live Map
              </h3>
              <p className="font-body text-sm sm:text-base text-slate-600">
                Navigate the wilderness with our precise terrain mapping and encounter
                heatmaps.
              </p>
            </div>
          </button>

          {/* Medium Feature: Trainer Academy */}
          <div className="md:col-span-2 bg-slate-900 text-white border-[3px] border-[#1b1c1c] hard-shadow hover:shadow-[8px_8px_0px_0px_#ffcb09] transition-all p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 text-[#ffcb09] mb-2">
                <Trophy className="w-4 h-4" aria-hidden="true" />
                <span className="font-label text-xs uppercase tracking-widest font-bold">
                  Pro Strategy
                </span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl mb-3">
                Trainer Academy
              </h3>
              <p className="font-body text-base text-slate-300 mb-6 leading-relaxed">
                Learn the deep mechanics of EV training, IV breeding, and held-item
                strategy from the pros.
              </p>
              <button
                type="button"
                onClick={() => onOpenFeatureModal('academy')}
                className="bg-white text-slate-900 px-6 py-3 font-label text-sm font-bold uppercase border-2 border-white hover:bg-[#ffcb09] hover:border-[#ffcb09] hover:text-[#1b1c1c] transition-colors cursor-pointer"
              >
                Start Learning
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <PokemonArtwork
                src={EXPLORE_ASSETS.trainerAcademy}
                alt="Retro handheld gaming consoles for Trainer Academy"
                className="w-full h-48 object-cover border-2 border-slate-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Scan FAB */}
      <button
        type="button"
        onClick={onBeginJourney}
        aria-label="Open Live Pokédex Scanner"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#bc0100] border-[3px] border-[#1b1c1c] rounded-full flex items-center justify-center hard-shadow hover:scale-110 active:scale-95 transition-all z-40 cursor-pointer group"
      >
        <Disc
          className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-500"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
