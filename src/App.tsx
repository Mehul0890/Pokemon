import { useEffect, useState } from 'react';
import { ExploreView, type ExploreFeatureModalId } from './components/ExploreView';
import { Footer } from './components/Footer';
import { GalleryView } from './components/GalleryView';
import { Header } from './components/Header';
import { ItemsView } from './components/ItemsView';
import {
  FeatureInfoModal,
  NotificationsModal,
  ShareCardModal,
  TeamDrawer,
} from './components/ModalsAndDrawers';
import { PokedexScannerView } from './components/PokedexScannerView';
import { PokemonDetailView } from './components/PokemonDetailView';
import { ADVENTURE_ITEMS, POKEMON_DATA } from './data/pokemonData';
import type {
  AdventureItem,
  AppView,
  GalleryCategory,
  Pokemon,
  TrainerNotification,
} from './types/pokemon';
import { capturePokemon, toggleTeamMember } from './utils/pokedex';

const STORAGE_KEY = 'pokedex_adventure_state_v1';

interface PersistedState {
  capturedIds: string[];
  teamIds: string[];
  lastEncounteredId: string;
  bagCounts: Record<string, number>;
  notifications: TrainerNotification[];
}

function getDefaultBagCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const item of ADVENTURE_ITEMS) {
    counts[item.id] = item.initialQty;
  }
  return counts;
}

function loadInitialState(): PersistedState {
  const defaultNotifications: TrainerNotification[] = [
    {
      id: 'init-1',
      title: 'Live Scanner v2.0 Calibrated',
      detail: 'Viridian Forest & Sky Pillar encounter frequencies updated.',
      timestamp: 'Just now',
      unread: true,
    },
    {
      id: 'init-2',
      title: 'Lugia Sighted near Whirl Islands',
      detail: 'Rare Psychic/Flying guardian logged on regional radar.',
      timestamp: '14m ago',
      unread: false,
    },
  ];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<PersistedState>;
      return {
        capturedIds: Array.isArray(parsed.capturedIds)
          ? parsed.capturedIds
          : ['bulbasaur'],
        teamIds: Array.isArray(parsed.teamIds)
          ? parsed.teamIds
          : ['pikachu'],
        lastEncounteredId: parsed.lastEncounteredId || 'lugia',
        bagCounts: parsed.bagCounts || getDefaultBagCounts(),
        notifications: Array.isArray(parsed.notifications)
          ? parsed.notifications
          : defaultNotifications,
      };
    }
  } catch {
    // Ignore storage errors and use clean defaults
  }

  return {
    capturedIds: ['bulbasaur'],
    teamIds: ['pikachu'],
    lastEncounteredId: 'lugia',
    bagCounts: getDefaultBagCounts(),
    notifications: defaultNotifications,
  };
}

function getInitialView(): AppView {
  const params = new URLSearchParams(window.location.search);
  if (params.get('autostart') === '1') return 'pokedex';
  const viewParam = params.get('view');
  if (
    viewParam === 'explore' ||
    viewParam === 'gallery' ||
    viewParam === 'pokedex' ||
    viewParam === 'detail' ||
    viewParam === 'items'
  ) {
    return viewParam;
  }
  return 'explore';
}

export default function App() {
  const [persisted, setPersisted] = useState<PersistedState>(loadInitialState);
  const [activeView, setActiveView] = useState<AppView>(getInitialView);
  const [previousView, setPreviousView] = useState<AppView>('pokedex');

  const [scannerSelectedId, setScannerSelectedId] = useState<string>('pikachu');
  const [detailPokemonId, setDetailPokemonId] = useState<string>('charizard');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [galleryInitialCategory, setGalleryInitialCategory] =
    useState<GalleryCategory>('All Types');

  const [teamDrawerOpen, setTeamDrawerOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [sharePokemon, setSharePokemon] = useState<Pokemon | null>(null);
  const [exploreFeatureModal, setExploreFeatureModal] =
    useState<ExploreFeatureModalId | null>(null);
  const [policyModalTitle, setPolicyModalTitle] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
    } catch {
      // Ignore storage quota errors
    }
  }, [persisted]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2800);
  };

  const addNotification = (title: string, detail: string) => {
    setPersisted((prev) => ({
      ...prev,
      notifications: [
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          title,
          detail,
          timestamp: 'Just now',
          unread: true,
        },
        ...prev.notifications.slice(0, 14),
      ],
    }));
  };

  const findPokemon = (id: string): Pokemon =>
    POKEMON_DATA.find((p) => p.id === id) || POKEMON_DATA[0];

  const scannerSelectedPokemon = findPokemon(scannerSelectedId);
  const detailPokemon = findPokemon(detailPokemonId);
  const lastEncounteredPokemon = findPokemon(persisted.lastEncounteredId);
  const teamPokemon = persisted.teamIds
    .map((id) => POKEMON_DATA.find((p) => p.id === id))
    .filter((p): p is Pokemon => Boolean(p));

  const unreadCount = persisted.notifications.filter((n) => n.unread).length;

  const handleNavigate = (view: AppView) => {
    if (view !== 'detail') {
      setPreviousView(view);
    }
    if (view === 'gallery') {
      setGalleryInitialCategory('All Types');
    }
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDetail = (pokemon: Pokemon) => {
    if (activeView !== 'detail') {
      setPreviousView(activeView);
    }
    setDetailPokemonId(pokemon.id);
    setPersisted((prev) => ({ ...prev, lastEncounteredId: pokemon.id }));
    setActiveView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCapturePokemon = (pokemon: Pokemon) => {
    const { nextCaptured, newlyCaptured } = capturePokemon(
      persisted.capturedIds,
      pokemon.id
    );
    if (newlyCaptured) {
      setPersisted((prev) => ({
        ...prev,
        capturedIds: nextCaptured,
        lastEncounteredId: pokemon.id,
      }));
      addNotification(
        `Captured ${pokemon.name}!`,
        `Registered #${String(pokemon.number).padStart(4, '0')} in your Live Scanner log.`
      );
      showToast(`${pokemon.name} data captured!`);
    } else {
      showToast(`${pokemon.name} is already registered in your Pokédex.`);
    }
  };

  const handleToggleTeam = (pokemon: Pokemon) => {
    const result = toggleTeamMember(persisted.teamIds, pokemon.id, 6);
    if (result.status === 'full') {
      showToast('Active team is full (6/6). Remove a member first.');
      setTeamDrawerOpen(true);
      return;
    }
    setPersisted((prev) => ({
      ...prev,
      teamIds: result.nextTeam,
      capturedIds:
        result.status === 'added'
          ? capturePokemon(prev.capturedIds, pokemon.id).nextCaptured
          : prev.capturedIds,
    }));
    if (result.status === 'added') {
      addNotification(
        `${pokemon.name} joined your team`,
        `Party size is now ${result.nextTeam.length}/6.`
      );
      showToast(`Added ${pokemon.name} to your active team!`);
    } else {
      showToast(`Removed ${pokemon.name} from your active team.`);
    }
  };

  const handleRemoveFromTeam = (id: string) => {
    const p = findPokemon(id);
    setPersisted((prev) => ({
      ...prev,
      teamIds: prev.teamIds.filter((tid) => tid !== id),
    }));
    showToast(`Removed ${p.name} from your team.`);
  };

  const handleUseOrRestockItem = (item: AdventureItem, delta: number) => {
    setPersisted((prev) => {
      const current = prev.bagCounts[item.id] ?? item.initialQty;
      const nextVal = Math.max(0, current + delta);
      return {
        ...prev,
        bagCounts: {
          ...prev.bagCounts,
          [item.id]: nextVal,
        },
      };
    });
    showToast(
      delta > 0
        ? `Restocked ${item.name} (+1)`
        : `Used ${item.name} (${item.effect})`
    );
  };

  const handleHeaderSearch = (query: string) => {
    setSearchQuery(query);
    if (activeView !== 'pokedex' && activeView !== 'gallery') {
      setActiveView('pokedex');
    }
  };

  const handleMarkAllRead = () => {
    setPersisted((prev) => ({
      ...prev,
      notifications: prev.notifications.map((n) => ({ ...n, unread: false })),
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden">
      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchSubmit={handleHeaderSearch}
        unreadNotifications={unreadCount}
        teamCount={teamPokemon.length}
        onOpenNotifications={() => setNotificationsOpen(true)}
        onOpenTeamDrawer={() => setTeamDrawerOpen(true)}
      />

      <main className="flex-1">
        {activeView === 'explore' && (
          <ExploreView
            lastEncountered={lastEncounteredPokemon}
            onBeginJourney={() => handleNavigate('pokedex')}
            onSelectPokemonDetail={handleOpenDetail}
            onOpenShinyGallery={() => {
              setGalleryInitialCategory('Legendary');
              setActiveView('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenFeatureModal={(feature) => setExploreFeatureModal(feature)}
          />
        )}

        {activeView === 'pokedex' && (
          <PokedexScannerView
            allPokemon={POKEMON_DATA}
            selectedPokemon={scannerSelectedPokemon}
            capturedIds={persisted.capturedIds}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onSelectPokemon={(p) => setScannerSelectedId(p.id)}
            onCapturePokemon={handleCapturePokemon}
            onOpenDetail={handleOpenDetail}
          />
        )}

        {activeView === 'gallery' && (
          <GalleryView
            key={galleryInitialCategory}
            allPokemon={POKEMON_DATA}
            searchQuery={searchQuery}
            initialCategory={galleryInitialCategory}
            onSelectPokemon={handleOpenDetail}
          />
        )}

        {activeView === 'detail' && (
          <PokemonDetailView
            pokemon={detailPokemon}
            allPokemon={POKEMON_DATA}
            teamIds={persisted.teamIds}
            onBack={() =>
              handleNavigate(
                previousView === 'detail' ? 'pokedex' : previousView
              )
            }
            onToggleTeam={handleToggleTeam}
            onSelectEvolution={(evoId) => {
              setDetailPokemonId(evoId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShareTrainerCard={(p) => setSharePokemon(p)}
          />
        )}

        {activeView === 'items' && (
          <ItemsView
            items={ADVENTURE_ITEMS}
            bagCounts={persisted.bagCounts}
            onUseOrRestockItem={handleUseOrRestockItem}
          />
        )}
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenPolicy={(title) => setPolicyModalTitle(title)}
        onOpenShare={() => setSharePokemon(detailPokemon)}
      />

      {/* Drawers & Modals */}
      <TeamDrawer
        open={teamDrawerOpen}
        onClose={() => setTeamDrawerOpen(false)}
        teamPokemon={teamPokemon}
        capturedCount={persisted.capturedIds.length}
        totalCount={POKEMON_DATA.length}
        onRemoveFromTeam={handleRemoveFromTeam}
        onInspectPokemon={handleOpenDetail}
        onOpenShare={() => setSharePokemon(teamPokemon[0] || detailPokemon)}
      />

      <NotificationsModal
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        notifications={persisted.notifications}
        onMarkAllRead={handleMarkAllRead}
      />

      <ShareCardModal
        open={Boolean(sharePokemon)}
        onClose={() => setSharePokemon(null)}
        focusPokemon={sharePokemon || detailPokemon}
        teamPokemon={teamPokemon}
        capturedCount={persisted.capturedIds.length}
      />

      <FeatureInfoModal
        feature={exploreFeatureModal}
        policyTitle={policyModalTitle}
        onClose={() => {
          setExploreFeatureModal(null);
          setPolicyModalTitle(null);
        }}
        onJumpToPokedex={() => handleNavigate('pokedex')}
      />

      {/* Accessible Live Toast Feedback */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1b1c1c] text-[#ffcb09] border-[3px] border-[#ffcb09] px-6 py-3 font-label text-xs sm:text-sm font-bold uppercase tracking-wide hard-shadow"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
