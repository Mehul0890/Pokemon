import type {
  AdventureItem,
  GalleryCategory,
  GallerySortOption,
  ItemCategory,
  Pokemon,
} from '../types/pokemon';

export interface ScannerFilterCriteria {
  query: string;
  type: string;
  generation: string;
  ability: string;
}

export interface GalleryFilterCriteria {
  query: string;
  category: GalleryCategory;
  sortBy: GallerySortOption;
}

export function formatDexNumber(num: number): string {
  return `#${String(num).padStart(4, '0')}`;
}

export function formatScannerNo(num: number): string {
  return `NO. ${String(num).padStart(3, '0')}`;
}

export function calculatePowerLevel(pokemon: Pokemon): number {
  return pokemon.stats.hp + pokemon.stats.atk + pokemon.stats.spd;
}

export function filterScannerPokemon(
  list: Pokemon[],
  criteria: ScannerFilterCriteria
): Pokemon[] {
  const q = criteria.query.trim().toLowerCase();
  return list.filter((p) => {
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      String(p.number).includes(q) ||
      formatDexNumber(p.number).toLowerCase().includes(q);

    const matchesType =
      !criteria.type ||
      criteria.type === 'All Types' ||
      p.types.some((t) => t.toLowerCase() === criteria.type.toLowerCase());

    const matchesGen =
      !criteria.generation ||
      criteria.generation === 'All Generations' ||
      p.generation === criteria.generation;

    const matchesAbility =
      !criteria.ability ||
      criteria.ability === 'Any Ability' ||
      p.abilities.some((a) => a.toLowerCase() === criteria.ability.toLowerCase());

    return matchesQuery && matchesType && matchesGen && matchesAbility;
  });
}

const FEATURED_GALLERY_ORDER = [
  'charizard',
  'lucario',
  'rayquaza',
  'gengar',
  'sylveon',
  'blastoise',
  'mewtwo',
  'pikachu',
];

export function filterAndSortGallery(
  list: Pokemon[],
  criteria: GalleryFilterCriteria
): Pokemon[] {
  const q = criteria.query.trim().toLowerCase();
  const filtered = list.filter((p) => {
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      String(p.number).includes(q) ||
      formatDexNumber(p.number).toLowerCase().includes(q) ||
      p.types.some((t) => t.toLowerCase().includes(q));

    if (!matchesQuery) return false;

    if (criteria.category === 'Legendary') return p.isLegendary;
    if (criteria.category === 'Mega Evolved') return p.hasMega;
    return true;
  });

  return [...filtered].sort((a, b) => {
    if (criteria.sortBy === 'featured') {
      const ia = FEATURED_GALLERY_ORDER.indexOf(a.id);
      const ib = FEATURED_GALLERY_ORDER.indexOf(b.id);
      if (ia !== -1 && ib !== -1) return ia - ib;
      if (ia !== -1) return -1;
      if (ib !== -1) return 1;
      return a.number - b.number;
    }
    if (criteria.sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (criteria.sortBy === 'power') {
      return calculatePowerLevel(b) - calculatePowerLevel(a);
    }
    return a.number - b.number;
  });
}

export function toggleTeamMember(
  teamIds: string[],
  pokemonId: string,
  maxSlots = 6
): { nextTeam: string[]; status: 'added' | 'removed' | 'full' } {
  if (teamIds.includes(pokemonId)) {
    return {
      nextTeam: teamIds.filter((id) => id !== pokemonId),
      status: 'removed',
    };
  }
  if (teamIds.length >= maxSlots) {
    return {
      nextTeam: teamIds,
      status: 'full',
    };
  }
  return {
    nextTeam: [...teamIds, pokemonId],
    status: 'added',
  };
}

export function capturePokemon(
  capturedIds: string[],
  pokemonId: string
): { nextCaptured: string[]; newlyCaptured: boolean } {
  if (capturedIds.includes(pokemonId)) {
    return { nextCaptured: capturedIds, newlyCaptured: false };
  }
  return { nextCaptured: [...capturedIds, pokemonId], newlyCaptured: true };
}

export function filterItems(
  items: AdventureItem[],
  query: string,
  category: ItemCategory
): AdventureItem[] {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'All Items' || item.category === category;
    const matchesQuery =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.effect.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
}
