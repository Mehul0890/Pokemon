import { useState } from 'react';
import { ArrowUp, ChevronsDown } from 'lucide-react';
import { TYPE_BADGE_STYLES } from '../data/pokemonData';
import type {
  GalleryCategory,
  GallerySortOption,
  Pokemon,
} from '../types/pokemon';
import { filterAndSortGallery, formatDexNumber } from '../utils/pokedex';
import { PokeballButton } from './PokeballButton';
import { PokemonArtwork } from './PokemonArtwork';

interface GalleryViewProps {
  allPokemon: Pokemon[];
  searchQuery: string;
  initialCategory?: GalleryCategory;
  onSelectPokemon: (pokemon: Pokemon) => void;
}

const CATEGORIES: GalleryCategory[] = [
  'All Types',
  'Legendary',
  'Mega Evolved',
];

export function GalleryView({
  allPokemon,
  searchQuery,
  initialCategory = 'All Types',
  onSelectPokemon,
}: GalleryViewProps) {
  const [category, setCategory] = useState<GalleryCategory>(initialCategory);
  const [sortBy, setSortBy] = useState<GallerySortOption>('featured');
  const [visibleCount, setVisibleCount] = useState(8);

  const sortedPokemon = filterAndSortGallery(allPokemon, {
    query: searchQuery,
    category,
    sortBy,
  });

  const visiblePokemon = sortedPokemon.slice(0, visibleCount);
  const hasMore = visibleCount < sortedPokemon.length;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-14 sm:py-20">
      {/* Hero Header */}
      <section className="mb-14 text-center">
        <h1 className="font-display font-black text-4xl sm:text-5xl text-[#bc0100] mb-4 uppercase tracking-tighter text-balance">
          Pokémon Global Gallery
        </h1>
        <p className="font-body text-base sm:text-lg text-[#603e39] max-w-2xl mx-auto">
          Discover the rarest and most powerful species from across all regions. A
          curated collection for the ultimate trainer.
        </p>
      </section>

      {/* Filter Chips & Sort Controls */}
      <div className="flex flex-wrap justify-between items-center gap-6 mb-10 border-b-2 border-slate-200 pb-6">
        <div className="flex flex-wrap gap-3 pl-1" role="group" aria-label="Gallery category filters">
          {CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setCategory(cat);
                  setVisibleCount(8);
                }}
                aria-pressed={active}
                className={`px-6 py-2.5 font-label text-sm font-bold adventure-chip border-2 border-[#1b1c1c] cursor-pointer transition-colors whitespace-nowrap ${
                  active
                    ? 'bg-[#ffcb09] text-[#1b1c1c] shadow-[3px_3px_0px_0px_#1b1c1c]'
                    : 'bg-white text-[#1b1c1c] hover:bg-[#3c4dcb] hover:text-white'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <label
            htmlFor="gallery-sort"
            className="font-label text-xs sm:text-sm font-bold uppercase text-slate-500"
          >
            Sort By:
          </label>
          <select
            id="gallery-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as GallerySortOption)}
            className="border-2 border-[#1b1c1c] bg-white px-4 py-2 font-label text-sm font-bold focus:outline-none focus:border-[#3c4dcb] cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="number">Number #</option>
            <option value="name">Name A-Z</option>
            <option value="power">Power Level</option>
          </select>
        </div>
      </div>

      {/* Gallery Grid */}
      {visiblePokemon.length === 0 ? (
        <div className="bg-white border-2 border-[#1b1c1c] p-12 text-center hard-shadow">
          <p className="font-display font-bold text-xl text-[#1b1c1c] mb-2">
            No Pokémon found in this filter
          </p>
          <p className="font-body text-slate-600">
            Try switching to &ldquo;All Types&rdquo; or clearing the top search bar.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visiblePokemon.map((pokemon) => (
            <article
              key={pokemon.id}
              className="bg-white border-2 border-[#1b1c1c] p-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-[6px_6px_0px_0px_#ffcb09] flex flex-col justify-between group"
            >
              <div>
                <div className="relative bg-slate-100 mb-4 overflow-hidden rounded-lg aspect-square flex items-center justify-center border border-slate-200">
                  <PokemonArtwork
                    src={pokemon.galleryImageUrl || pokemon.imageUrl}
                    alt={pokemon.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 right-2 bg-[#1b1c1c] text-white font-label px-2 py-1 text-xs font-bold tabular-nums">
                    {formatDexNumber(pokemon.number)}
                  </span>
                </div>

                <div className="mb-4">
                  <h2 className="font-display text-xl uppercase font-black text-[#1b1c1c] truncate">
                    {pokemon.name}
                  </h2>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {pokemon.types.map((t) => (
                      <span
                        key={t}
                        className={`${TYPE_BADGE_STYLES[t]} text-[10px] font-label font-black uppercase px-2 py-0.5 rounded`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <PokeballButton
                label="View Details"
                fullWidth
                size="sm"
                ariaLabel={`View details for ${pokemon.name}`}
                onClick={() => onSelectPokemon(pokemon)}
              />
            </article>
          ))}
        </div>
      )}

      {/* Load More / Pagination */}
      <div className="mt-16 flex justify-center">
        {hasMore ? (
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="group inline-flex items-center gap-3 bg-[#1b1c1c] text-white px-8 py-4 font-display font-bold uppercase tracking-widest border-[3px] border-[#1b1c1c] hover:bg-white hover:text-[#1b1c1c] transition-colors cursor-pointer hard-shadow-sm"
          >
            Load More Species
            <ChevronsDown
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </button>
        ) : (
          <p className="font-label text-xs uppercase tracking-widest text-slate-500">
            Showing all {sortedPokemon.length} cataloged species
          </p>
        )}
      </div>

      {/* Scroll to Top FAB */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#bc0100] text-white rounded-full border-[3px] border-[#1b1c1c] hard-shadow flex items-center justify-center z-40 hover:-translate-y-1 transition-transform cursor-pointer"
      >
        <ArrowUp className="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
  );
}
