import { useState } from 'react';
import {
  Camera,
  Check,
  ExternalLink,
  Lightbulb,
  QrCode,
  Radar,
  RotateCcw,
  Search,
} from 'lucide-react';
import { TYPE_BADGE_STYLES } from '../data/pokemonData';
import type { Pokemon } from '../types/pokemon';
import {
  filterScannerPokemon,
  formatDexNumber,
  formatScannerNo,
} from '../utils/pokedex';
import { PokeballButton } from './PokeballButton';
import { PokemonArtwork } from './PokemonArtwork';

interface PokedexScannerViewProps {
  allPokemon: Pokemon[];
  selectedPokemon: Pokemon;
  capturedIds: string[];
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSelectPokemon: (pokemon: Pokemon) => void;
  onCapturePokemon: (pokemon: Pokemon) => void;
  onOpenDetail: (pokemon: Pokemon) => void;
}

const TYPE_OPTIONS = [
  'All Types',
  'Electric',
  'Fire',
  'Water',
  'Grass',
  'Psychic',
  'Dragon',
  'Ghost',
  'Fighting',
  'Fairy',
];

const GENERATION_OPTIONS = [
  'All Generations',
  'Gen I',
  'Gen II',
  'Gen III',
  'Gen IV',
  'Gen VI',
];

const ABILITY_OPTIONS = [
  'Any Ability',
  'Static',
  'Blaze',
  'Overgrow',
  'Pressure',
  'Torrent',
  'Air Lock',
  'Cursed Body',
  'Pixilate',
  'Water Absorb',
  'Steadfast',
];

export function PokedexScannerView({
  allPokemon,
  selectedPokemon,
  capturedIds,
  searchQuery,
  onSearchQueryChange,
  onSelectPokemon,
  onCapturePokemon,
  onOpenDetail,
}: PokedexScannerViewProps) {
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [generationFilter, setGenerationFilter] = useState('All Generations');
  const [abilityFilter, setAbilityFilter] = useState('Any Ability');
  const [isScanningArea, setIsScanningArea] = useState(false);

  const filteredPokemon = filterScannerPokemon(allPokemon, {
    query: searchQuery,
    type: typeFilter,
    generation: generationFilter,
    ability: abilityFilter,
  });

  const hasFilters =
    searchQuery.trim() !== '' ||
    typeFilter !== 'All Types' ||
    generationFilter !== 'All Generations' ||
    abilityFilter !== 'Any Ability';

  const handleResetFilters = () => {
    onSearchQueryChange('');
    setTypeFilter('All Types');
    setGenerationFilter('All Generations');
    setAbilityFilter('Any Ability');
  };

  const handleTriggerWildScan = () => {
    if (isScanningArea) return;
    setIsScanningArea(true);
    const pool = allPokemon.filter((p) => p.id !== selectedPokemon.id);
    const next = pool[Math.floor(Math.random() * pool.length)] || allPokemon[0];
    setTimeout(() => {
      onSelectPokemon(next);
      setIsScanningArea(false);
    }, 450);
  };

  const isCaptured = capturedIds.includes(selectedPokemon.id);
  const scannerImage =
    selectedPokemon.scannerImageUrl || selectedPokemon.imageUrl;

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-10 pb-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: Search, Filters & Results Bento Grid */}
        <section className="w-full lg:w-2/3 space-y-8">
          {/* Search & Filters Box */}
          <div className="bg-white border-[3px] border-[#1b1c1c] p-6 sm:p-8 hard-shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="relative">
                <Search
                  className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchQueryChange(e.target.value)}
                  aria-label="Search by name or number"
                  placeholder="Search by name or number..."
                  className="w-full pl-12 pr-4 py-3.5 border-[3px] border-[#1b1c1c] font-label text-base sm:text-lg focus:outline-none focus:border-[#3c4dcb] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="scanner-type-filter"
                    className="block font-label text-xs uppercase tracking-widest text-slate-500 font-bold"
                  >
                    Type
                  </label>
                  <select
                    id="scanner-type-filter"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full border-[3px] border-[#1b1c1c] p-3 font-label font-bold bg-white cursor-pointer hover:bg-slate-50 focus:outline-none focus:border-[#3c4dcb]"
                  >
                    {TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="scanner-gen-filter"
                    className="block font-label text-xs uppercase tracking-widest text-slate-500 font-bold"
                  >
                    Generation
                  </label>
                  <select
                    id="scanner-gen-filter"
                    value={generationFilter}
                    onChange={(e) => setGenerationFilter(e.target.value)}
                    className="w-full border-[3px] border-[#1b1c1c] p-3 font-label font-bold bg-white cursor-pointer hover:bg-slate-50 focus:outline-none focus:border-[#3c4dcb]"
                  >
                    {GENERATION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="scanner-ability-filter"
                    className="block font-label text-xs uppercase tracking-widest text-slate-500 font-bold"
                  >
                    Ability
                  </label>
                  <select
                    id="scanner-ability-filter"
                    value={abilityFilter}
                    onChange={(e) => setAbilityFilter(e.target.value)}
                    className="w-full border-[3px] border-[#1b1c1c] p-3 font-label font-bold bg-white cursor-pointer hover:bg-slate-50 focus:outline-none focus:border-[#3c4dcb]"
                  >
                    {ABILITY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {hasFilters && (
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="font-label text-xs uppercase text-slate-600">
                    Showing {filteredPokemon.length} of {allPokemon.length} species
                  </span>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 font-label text-xs uppercase font-bold text-[#bc0100] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Results Bento Grid */}
          {filteredPokemon.length === 0 ? (
            <div className="bg-white border-[3px] border-[#1b1c1c] p-12 text-center hard-shadow">
              <p className="font-display font-bold text-2xl text-[#1b1c1c] mb-2">
                No Matching Species Detected
              </p>
              <p className="font-body text-slate-600 mb-6">
                Try clearing one of your Type, Generation, or Ability filters to scan
                the surrounding area.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-3 bg-[#bc0100] text-white border-2 border-[#1b1c1c] font-label text-sm font-bold uppercase hard-shadow-sm cursor-pointer"
              >
                Show All Pokémon
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredPokemon.slice(0, 2).map((pokemon) => (
                <ScannerPokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  isSelected={selectedPokemon.id === pokemon.id}
                  isCaptured={capturedIds.includes(pokemon.id)}
                  onSelect={() => onSelectPokemon(pokemon)}
                />
              ))}

              {/* Interactive Wild Area Scanner Tile (matches slot 3 in prototype) */}
              <button
                type="button"
                onClick={handleTriggerWildScan}
                aria-label="Scan nearby area for wild Pokémon"
                className="group bg-white border-[2px] border-[#1b1c1c] p-4 transition-all hover:scale-[1.03] hover:shadow-[6px_6px_0px_0px_#ffcb09] cursor-pointer text-left flex flex-col justify-between"
              >
                <div className="aspect-square bg-slate-50 border-[2px] border-dashed border-[#1b1c1c] mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-4">
                    <QrCode
                      className={`w-10 h-10 mx-auto mb-2 ${
                        isScanningArea
                          ? 'text-[#bc0100] animate-spin'
                          : 'text-slate-400 group-hover:text-[#bc0100] transition-colors'
                      }`}
                      aria-hidden="true"
                    />
                    <p className="text-xs font-label font-bold text-slate-500 uppercase">
                      {isScanningArea ? 'Locking Signal...' : 'Scanning Area...'}
                    </p>
                  </div>
                </div>
                <div className="h-11 bg-slate-100 border border-slate-200 px-3 flex items-center justify-between">
                  <span className="font-label text-[11px] uppercase text-slate-500 font-bold">
                    Tap for Wild Scan
                  </span>
                  <Radar className="w-4 h-4 text-[#3c4dcb]" aria-hidden="true" />
                </div>
              </button>

              {filteredPokemon.slice(2).map((pokemon) => (
                <ScannerPokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  isSelected={selectedPokemon.id === pokemon.id}
                  isCaptured={capturedIds.includes(pokemon.id)}
                  onSelect={() => onSelectPokemon(pokemon)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Right Column: Live Scanner v2.0 Hardware Panel */}
        <aside className="w-full lg:w-1/3 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white border-[4px] border-[#1b1c1c] hard-shadow-red overflow-hidden">
            {/* Pokédex Top Bezel */}
            <div className="bg-[#bc0100] p-4 border-b-[4px] border-[#1b1c1c] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-400 border-[3px] border-white shadow-inner" />
                <div className="w-2.5 h-2.5 rounded-full bg-red-700 border border-[#1b1c1c]" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-[#1b1c1c]" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 border border-[#1b1c1c]" />
              </div>
              <span className="font-label text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                Live Scanner v2.0
              </span>
            </div>

            <div className="p-6 sm:p-8">
              {/* CRT Viewport */}
              <div className="relative bg-slate-900 aspect-video mb-6 border-[3px] border-[#1b1c1c] flex items-center justify-center overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="animate-scanline top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffcb09] to-transparent absolute z-10 opacity-75 pointer-events-none"
                />
                <PokemonArtwork
                  src={scannerImage}
                  alt={`Scanning ${selectedPokemon.name}`}
                  className="w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(255,203,9,0.45)] relative z-[5]"
                />
                {/* Corner Reticle Brackets */}
                <div
                  aria-hidden="true"
                  className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#ffcb09]"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#ffcb09]"
                />
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-end border-b-2 border-slate-100 pb-2">
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1b1c1c]">
                    {selectedPokemon.name}
                  </h2>
                  <span className="font-label text-slate-400 font-bold tabular-nums">
                    {formatScannerNo(selectedPokemon.number)}
                  </span>
                </div>

                <p className="font-body text-slate-600 italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{selectedPokemon.description}&rdquo;
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 border-2 border-[#1b1c1c] p-3">
                    <span className="block font-label text-[10px] font-bold text-slate-400 uppercase">
                      Height
                    </span>
                    <span className="font-display font-bold text-xl tabular-nums">
                      {selectedPokemon.heightM.toFixed(1)} m
                    </span>
                  </div>
                  <div className="bg-slate-50 border-2 border-[#1b1c1c] p-3">
                    <span className="block font-label text-[10px] font-bold text-slate-400 uppercase">
                      Weight
                    </span>
                    <span className="font-display font-bold text-xl tabular-nums">
                      {selectedPokemon.weightKg.toFixed(1)} kg
                    </span>
                  </div>
                </div>

                {/* Base Stats */}
                <div className="space-y-3">
                  <h3 className="font-label text-xs font-bold uppercase tracking-widest text-slate-400">
                    Base Stats
                  </h3>
                  <div className="space-y-2.5">
                    <StatBar
                      label="HP"
                      value={selectedPokemon.stats.hp}
                      colorClass="bg-emerald-500"
                    />
                    <StatBar
                      label="ATK"
                      value={selectedPokemon.stats.atk}
                      colorClass="bg-[#bc0100]"
                    />
                    <StatBar
                      label="SPD"
                      value={selectedPokemon.stats.spd}
                      colorClass="bg-[#ffcb09]"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <PokeballButton
                    label={isCaptured ? 'Data Captured' : 'Capture Data'}
                    fullWidth
                    size="lg"
                    active={isCaptured}
                    icon={
                      isCaptured ? (
                        <Check className="w-4 h-4 text-[#1b1c1c]" aria-hidden="true" />
                      ) : undefined
                    }
                    onClick={() => onCapturePokemon(selectedPokemon)}
                  />

                  <button
                    type="button"
                    onClick={() => onOpenDetail(selectedPokemon)}
                    className="w-full py-2.5 px-4 bg-[#fcf9f8] border-2 border-[#1b1c1c] font-label text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#ffcb09] transition-colors cursor-pointer"
                  >
                    <span>Open Full Pokédex Entry</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Trainer Tip Card */}
          <div className="bg-[#5768e6] text-white border-[3px] border-[#1b1c1c] p-6 hard-shadow">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Trainer Tip</h3>
                <p className="font-body text-sm text-white/95 leading-relaxed">
                  {selectedPokemon.trainerTip}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile Quick Scan Button */}
      <button
        type="button"
        onClick={handleTriggerWildScan}
        aria-label="Quick Wild Scan"
        className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-[#bc0100] border-[3px] border-[#1b1c1c] rounded-full hard-shadow-sm flex items-center justify-center text-white cursor-pointer"
      >
        <Camera className="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
  );
}

function ScannerPokemonCard({
  pokemon,
  isSelected,
  isCaptured,
  onSelect,
}: {
  pokemon: Pokemon;
  isSelected: boolean;
  isCaptured: boolean;
  onSelect: () => void;
}) {
  const primaryType = pokemon.types[0];
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative bg-white border-[2px] border-[#1b1c1c] p-4 transition-all hover:scale-[1.03] text-left cursor-pointer ${
        isSelected
          ? 'shadow-[6px_6px_0px_0px_#ffcb09] ring-2 ring-[#1b1c1c]'
          : 'hover:shadow-[6px_6px_0px_0px_#ffcb09]'
      }`}
    >
      <div className="aspect-square bg-slate-50 border-[2px] border-[#1b1c1c] mb-4 flex items-center justify-center relative overflow-hidden">
        <PokemonArtwork
          src={pokemon.imageUrl}
          alt={pokemon.name}
          className="w-3/4 h-3/4 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
        />
        {isCaptured && (
          <span className="absolute top-2 right-2 z-20 bg-[#1b1c1c] text-[#ffcb09] text-[10px] font-label font-bold uppercase px-1.5 py-0.5">
            Caught
          </span>
        )}
      </div>

      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <span className="font-label text-slate-400 text-xs font-bold tracking-tight block tabular-nums">
            {formatDexNumber(pokemon.number)}
          </span>
          <h3 className="font-display font-bold text-lg sm:text-xl text-[#1b1c1c] truncate">
            {pokemon.name}
          </h3>
        </div>
        <span
          className={`${TYPE_BADGE_STYLES[primaryType]} border-2 border-[#1b1c1c] px-2 py-0.5 rounded-full font-label text-[10px] font-bold uppercase shrink-0`}
        >
          {primaryType}
        </span>
      </div>
    </button>
  );
}

function StatBar({
  label,
  value,
  colorClass,
}: {
  label: string;
  value: number;
  colorClass: string;
}) {
  const pct = Math.min(100, Math.round((value / 150) * 100));
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 font-label text-[11px] font-bold text-[#1b1c1c]">
        {label}
      </span>
      <div className="flex-1 h-3 bg-slate-100 border border-[#1b1c1c] overflow-hidden">
        <div
          className={`h-full ${colorClass} transition-all duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-right font-label text-[11px] font-bold text-slate-500 tabular-nums">
        {value}
      </span>
    </div>
  );
}
