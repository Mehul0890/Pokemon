export type AppView = 'explore' | 'gallery' | 'pokedex' | 'detail' | 'items';

export type PokemonType =
  | 'Electric'
  | 'Fire'
  | 'Flying'
  | 'Grass'
  | 'Psychic'
  | 'Water'
  | 'Fighting'
  | 'Steel'
  | 'Dragon'
  | 'Ghost'
  | 'Poison'
  | 'Fairy';

export interface PokemonMove {
  name: string;
  type: PokemonType;
  power: number;
  accuracy: number;
  description: string;
}

export interface EvolutionStage {
  id: string;
  name: string;
  levelLabel: string;
  imageUrl: string;
}

export interface Pokemon {
  id: string;
  number: number;
  name: string;
  types: PokemonType[];
  generation: 'Gen I' | 'Gen II' | 'Gen III' | 'Gen IV' | 'Gen VI';
  abilities: string[];
  description: string;
  trainerTip: string;
  heightM: number;
  weightKg: number;
  stats: {
    hp: number;
    atk: number;
    spd: number;
  };
  imageUrl: string;
  scannerImageUrl?: string;
  galleryImageUrl?: string;
  isLegendary: boolean;
  hasMega: boolean;
  isShinyAvailable?: boolean;
  region: string;
  evolutions: EvolutionStage[];
  moves: PokemonMove[];
}

export type GalleryCategory = 'All Types' | 'Legendary' | 'Mega Evolved';
export type GallerySortOption = 'featured' | 'number' | 'name' | 'power';

export type ItemCategory = 'All Items' | 'Poké Balls' | 'Medicine' | 'Evolution' | 'Held Items';

export interface AdventureItem {
  id: string;
  name: string;
  category: Exclude<ItemCategory, 'All Items'>;
  description: string;
  effect: string;
  cost: number;
  rarity: 'Common' | 'Rare' | 'Master';
  accentColor: string;
  initialQty: number;
}

export interface TrainerNotification {
  id: string;
  title: string;
  detail: string;
  timestamp: string;
  unread: boolean;
}
