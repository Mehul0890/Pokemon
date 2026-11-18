import { useState } from 'react';
import { Backpack, Disc, Flame, HeartPulse, Search, Shield, Zap } from 'lucide-react';
import type { AdventureItem, ItemCategory } from '../types/pokemon';
import { filterItems } from '../utils/pokedex';

interface ItemsViewProps {
  items: AdventureItem[];
  bagCounts: Record<string, number>;
  onUseOrRestockItem: (item: AdventureItem, delta: number) => void;
}

const ITEM_CATEGORIES: ItemCategory[] = [
  'All Items',
  'Poké Balls',
  'Medicine',
  'Evolution',
  'Held Items',
];

function ItemIcon({ item }: { item: AdventureItem }) {
  if (item.category === 'Poké Balls') {
    return <Disc className="w-7 h-7 text-[#1b1c1c]" aria-hidden="true" />;
  }
  if (item.category === 'Medicine') {
    return <HeartPulse className="w-7 h-7 text-[#1b1c1c]" aria-hidden="true" />;
  }
  if (item.id === 'fire-stone') {
    return <Flame className="w-7 h-7 text-[#1b1c1c]" aria-hidden="true" />;
  }
  if (item.category === 'Evolution') {
    return <Zap className="w-7 h-7 text-[#1b1c1c]" aria-hidden="true" />;
  }
  return <Shield className="w-7 h-7 text-[#1b1c1c]" aria-hidden="true" />;
}

export function ItemsView({
  items,
  bagCounts,
  onUseOrRestockItem,
}: ItemsViewProps) {
  const [category, setCategory] = useState<ItemCategory>('All Items');
  const [query, setQuery] = useState('');

  const filtered = filterItems(items, query, category);

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-14 sm:py-20">
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ffcb09] border-2 border-[#1b1c1c] mb-4 hard-shadow-sm">
            <Backpack className="w-4 h-4 text-[#1b1c1c]" aria-hidden="true" />
            <span className="font-label text-xs font-bold uppercase tracking-wider text-[#1b1c1c]">
              Trainer Supply Pack
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#bc0100] uppercase tracking-tight">
            Adventure Items
          </h1>
          <p className="font-body text-base sm:text-lg text-[#603e39] mt-2 max-w-xl">
            Manage Poké Balls, healing gear, evolution stones, and competitive held
            items for your active party.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search bag items"
            placeholder="Search items..."
            className="w-full pl-10 pr-4 py-3 bg-white border-[3px] border-[#1b1c1c] font-label text-sm focus:outline-none focus:border-[#3c4dcb]"
          />
        </div>
      </section>

      {/* Category Filter Chips */}
      <div
        className="flex flex-wrap gap-3 mb-10 border-b-2 border-slate-200 pb-6"
        role="group"
        aria-label="Item categories"
      >
        {ITEM_CATEGORIES.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={active}
              className={`px-5 py-2 font-label text-xs sm:text-sm font-bold adventure-chip border-2 border-[#1b1c1c] cursor-pointer transition-colors ${
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

      {/* Items Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white border-2 border-[#1b1c1c] p-10 text-center hard-shadow">
          <p className="font-display font-bold text-xl mb-1">No matching items</p>
          <p className="font-body text-slate-600">
            Clear your search or switch item categories.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => {
            const qty = bagCounts[item.id] ?? item.initialQty;
            return (
              <article
                key={item.id}
                className="bg-white border-[2px] border-[#1b1c1c] p-5 flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_#ffcb09] transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div
                      className="w-14 h-14 border-2 border-[#1b1c1c] flex items-center justify-center"
                      style={{ backgroundColor: `${item.accentColor}22` }}
                    >
                      <ItemIcon item={item} />
                    </div>
                    <span className="bg-[#1b1c1c] text-white font-label text-xs font-bold px-2.5 py-1 tabular-nums">
                      ×{qty}
                    </span>
                  </div>

                  <p className="font-label text-[11px] font-bold uppercase text-[#3c4dcb] mb-1">
                    {item.category} · {item.rarity}
                  </p>
                  <h2 className="font-display font-extrabold text-xl text-[#1b1c1c] mb-2">
                    {item.name}
                  </h2>
                  <p className="font-body text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-200">
                  <div className="flex justify-between items-center font-label text-xs font-bold">
                    <span className="text-slate-500 uppercase">Effect</span>
                    <span className="text-[#1b1c1c]">{item.effect}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      disabled={qty <= 0}
                      onClick={() => onUseOrRestockItem(item, -1)}
                      className="py-2 px-3 border-2 border-[#1b1c1c] font-label text-xs font-bold uppercase bg-white hover:bg-[#bc0100] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      Use Item
                    </button>
                    <button
                      type="button"
                      onClick={() => onUseOrRestockItem(item, 1)}
                      className="py-2 px-3 border-2 border-[#1b1c1c] font-label text-xs font-bold uppercase bg-[#ffcb09] text-[#1b1c1c] hover:bg-[#1b1c1c] hover:text-white transition-colors cursor-pointer"
                    >
                      Restock +1
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
