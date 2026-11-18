import { useState } from 'react';
import { Bell, Menu, Search, User, X } from 'lucide-react';
import type { AppView } from '../types/pokemon';

interface HeaderProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
  searchQuery: string;
  onSearchSubmit: (query: string) => void;
  unreadNotifications: number;
  teamCount: number;
  onOpenNotifications: () => void;
  onOpenTeamDrawer: () => void;
}

const NAV_ITEMS: { id: AppView; label: string }[] = [
  { id: 'explore', label: 'Explore' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'pokedex', label: 'Pokédex' },
  { id: 'items', label: 'Items' },
];

export function Header({
  activeView,
  onNavigate,
  searchQuery,
  onSearchSubmit,
  unreadNotifications,
  teamCount,
  onOpenNotifications,
  onOpenTeamDrawer,
}: HeaderProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isNavActive = (itemId: AppView) => {
    if (itemId === 'pokedex' && activeView === 'detail') return true;
    return activeView === itemId;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(localSearch);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b-[3px] border-[#1b1c1c] shadow-[4px_4px_0px_0px_#ffcb09]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => onNavigate('explore')}
          className="text-xl sm:text-2xl font-black italic font-display tracking-tight uppercase text-[#1b1c1c] whitespace-nowrap shrink-0 cursor-pointer hover:text-[#bc0100] transition-colors focus-visible:outline-2 focus-visible:outline-[#3c4dcb]"
        >
          PokéDex Adventure
        </button>

        {/* Zone 2: Nav Links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`font-display font-bold tracking-tight uppercase text-sm whitespace-nowrap shrink-0 cursor-pointer transition-all pb-1 focus-visible:outline-2 focus-visible:outline-[#3c4dcb] ${
                  active
                    ? 'text-[#bc0100] border-b-4 border-[#bc0100]'
                    : 'text-slate-600 hover:text-[#bc0100]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Search + Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {activeView !== 'pokedex' && (
            <form onSubmit={handleSubmit} className="hidden lg:flex items-center relative">
              <Search
                className="w-4 h-4 text-slate-500 absolute left-3 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                aria-label="Quick search Pokémon"
                placeholder="Search Pokémon..."
                className="w-48 xl:w-56 pl-9 pr-3 py-1.5 bg-white border-2 border-[#1b1c1c] font-label text-sm focus:outline-none focus:border-[#3c4dcb] transition-colors"
              />
            </form>
          )}

          <button
            type="button"
            onClick={onOpenNotifications}
            aria-label={`Notifications (${unreadNotifications} unread)`}
            className="relative p-2.5 rounded-full border-2 border-transparent hover:border-[#1b1c1c] hover:bg-slate-100 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3c4dcb]"
          >
            <Bell className="w-5 h-5 text-[#1b1c1c]" aria-hidden="true" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#bc0100] text-white font-label text-[10px] font-bold flex items-center justify-center border border-[#1b1c1c]">
                {unreadNotifications}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenTeamDrawer}
            aria-label={`Trainer Team (${teamCount} of 6)`}
            className="relative p-2.5 rounded-full bg-white border-2 border-[#1b1c1c] shadow-[2px_2px_0px_0px_#1b1c1c] hover:bg-[#ffcb09] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3c4dcb]"
          >
            <User className="w-5 h-5 text-[#1b1c1c]" aria-hidden="true" />
            <span className="sr-only">Open Trainer Team</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 border-2 border-[#1b1c1c] bg-white cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#1b1c1c]" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-[#1b1c1c]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#1b1c1c] bg-white px-4 py-4 space-y-3">
          <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2.5 px-3 border-2 border-[#1b1c1c] font-display font-bold uppercase text-sm text-left cursor-pointer ${
                    active
                      ? 'bg-[#bc0100] text-white'
                      : 'bg-[#fcf9f8] text-[#1b1c1c]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              setMobileMenuOpen(false);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              aria-label="Mobile search Pokémon"
              placeholder="Search Pokémon..."
              className="flex-1 px-3 py-2 border-2 border-[#1b1c1c] font-label text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#1b1c1c] text-white font-label text-xs uppercase font-bold"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
