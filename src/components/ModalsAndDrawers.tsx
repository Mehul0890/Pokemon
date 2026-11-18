import { useState } from 'react';
import {
  Check,
  Copy,
  MapPin,
  Shield,
  Sparkles,
  Swords,
  Trash2,
  X,
} from 'lucide-react';
import { TYPE_BADGE_STYLES } from '../data/pokemonData';
import type { Pokemon, TrainerNotification } from '../types/pokemon';
import { calculatePowerLevel, formatDexNumber } from '../utils/pokedex';
import type { ExploreFeatureModalId } from './ExploreView';
import { PokemonArtwork } from './PokemonArtwork';

interface TeamDrawerProps {
  open: boolean;
  onClose: () => void;
  teamPokemon: Pokemon[];
  capturedCount: number;
  totalCount: number;
  onRemoveFromTeam: (id: string) => void;
  onInspectPokemon: (pokemon: Pokemon) => void;
  onOpenShare: () => void;
}

export function TeamDrawer({
  open,
  onClose,
  teamPokemon,
  capturedCount,
  totalCount,
  onRemoveFromTeam,
  onInspectPokemon,
  onOpenShare,
}: TeamDrawerProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Trainer Team and Profile"
    >
      <div className="w-full max-w-md bg-[#fcf9f8] border-l-[4px] border-[#1b1c1c] h-full flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          <div className="flex items-center justify-between border-b-2 border-[#1b1c1c] pb-4 mb-6">
            <div>
              <p className="font-label text-xs font-bold uppercase text-[#3c4dcb]">
                Active Roster
              </p>
              <h2 className="font-display font-black text-2xl uppercase">
                Trainer Team ({teamPokemon.length}/6)
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Trainer Team"
              className="p-2 border-2 border-[#1b1c1c] bg-white hover:bg-[#ffcb09] cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="bg-white border-2 border-[#1b1c1c] p-4 mb-6 hard-shadow-sm flex items-center justify-between">
            <div>
              <span className="font-label text-[11px] uppercase font-bold text-slate-500 block">
                Pokédex Completion
              </span>
              <span className="font-display font-extrabold text-xl tabular-nums">
                {capturedCount} / {totalCount} Caught
              </span>
            </div>
            <span className="px-3 py-1 bg-[#ffcb09] border-2 border-[#1b1c1c] font-label text-xs font-bold uppercase">
              Ace Rank
            </span>
          </div>

          {teamPokemon.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-[#1b1c1c] p-8 text-center">
              <p className="font-display font-bold text-lg mb-1">
                Your party is empty
              </p>
              <p className="font-body text-sm text-slate-600">
                Open any Pokémon detail page and click &ldquo;Add to Team&rdquo; to
                build a 6-member lineup.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {teamPokemon.map((p) => (
                <div
                  key={p.id}
                  className="bg-white border-2 border-[#1b1c1c] p-3 flex items-center gap-3 hard-shadow-sm"
                >
                  <div className="w-14 h-14 bg-slate-50 border-2 border-[#1b1c1c] p-1 shrink-0">
                    <PokemonArtwork
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <button
                      type="button"
                      onClick={() => {
                        onInspectPokemon(p);
                        onClose();
                      }}
                      className="font-display font-bold text-base uppercase hover:text-[#bc0100] text-left cursor-pointer truncate block"
                    >
                      {p.name}
                    </button>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-label text-[11px] text-slate-500 tabular-nums">
                        {formatDexNumber(p.number)}
                      </span>
                      <span className="font-label text-[11px] font-bold text-[#3c4dcb] tabular-nums">
                        PWR {calculatePowerLevel(p)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveFromTeam(p.id)}
                    aria-label={`Remove ${p.name} from team`}
                    className="p-2 border-2 border-[#1b1c1c] bg-white hover:bg-[#bc0100] hover:text-white transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenShare();
          }}
          className="mt-6 w-full py-3.5 bg-[#bc0100] text-white border-[3px] border-[#1b1c1c] font-label text-sm font-bold uppercase hard-shadow-sm hover:bg-[#1b1c1c] transition-colors cursor-pointer"
        >
          Share Trainer Card
        </button>
      </div>
    </div>
  );
}

interface NotificationsModalProps {
  open: boolean;
  onClose: () => void;
  notifications: TrainerNotification[];
  onMarkAllRead: () => void;
}

export function NotificationsModal({
  open,
  onClose,
  notifications,
  onMarkAllRead,
}: NotificationsModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Trainer Activity Log"
    >
      <div className="w-full max-w-lg bg-white border-[4px] border-[#1b1c1c] hard-shadow-lg p-6">
        <div className="flex items-center justify-between border-b-2 border-[#1b1c1c] pb-4 mb-4">
          <h2 className="font-display font-black text-2xl uppercase">
            Field Notifications
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onMarkAllRead}
              className="px-3 py-1.5 border-2 border-[#1b1c1c] bg-[#ffcb09] font-label text-xs font-bold uppercase cursor-pointer"
            >
              Mark Read
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close notifications"
              className="p-1.5 border-2 border-[#1b1c1c] bg-white hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-3 border-2 border-[#1b1c1c] ${
                n.unread ? 'bg-[#ffdad4]/40' : 'bg-slate-50'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-display font-bold text-sm text-[#1b1c1c]">
                  {n.title}
                </span>
                <span className="font-label text-[11px] text-slate-500">
                  {n.timestamp}
                </span>
              </div>
              <p className="font-body text-xs text-slate-600">{n.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ShareCardModalProps {
  open: boolean;
  onClose: () => void;
  focusPokemon: Pokemon;
  teamPokemon: Pokemon[];
  capturedCount: number;
}

export function ShareCardModal({
  open,
  onClose,
  focusPokemon,
  teamPokemon,
  capturedCount,
}: ShareCardModalProps) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;

  const summary = `PokéDex Adventure Trainer Card — Featured: ${focusPokemon.name} (${formatDexNumber(
    focusPokemon.number
  )}) | Party: ${teamPokemon.map((p) => p.name).join(', ') || 'None'} | Dex Caught: ${capturedCount}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Share Trainer Card"
    >
      <div className="w-full max-w-md bg-white border-[4px] border-[#1b1c1c] hard-shadow-red p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="font-label text-xs font-bold uppercase text-[#bc0100] tracking-wider">
            Official Trainer Pass
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Trainer Card"
            className="p-1.5 border-2 border-[#1b1c1c] cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="bg-[#fcf9f8] border-2 border-[#1b1c1c] p-4 mb-5 flex items-center gap-4">
          <div className="w-20 h-20 bg-white border-2 border-[#1b1c1c] p-1 shrink-0">
            <PokemonArtwork
              src={focusPokemon.imageUrl}
              alt={focusPokemon.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="font-label text-xs text-slate-500 tabular-nums">
              {formatDexNumber(focusPokemon.number)}
            </p>
            <h3 className="font-display font-black text-2xl uppercase">
              {focusPokemon.name}
            </h3>
            <div className="flex gap-1.5 mt-1">
              {focusPokemon.types.map((t) => (
                <span
                  key={t}
                  className={`${TYPE_BADGE_STYLES[t]} px-2 py-0.5 text-[10px] font-label font-bold uppercase rounded-full`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="font-label text-xs font-bold uppercase text-slate-500 mb-2">
            Active Party ({teamPokemon.length}/6) · Caught: {capturedCount}
          </p>
          <p className="font-body text-xs bg-slate-100 border border-slate-300 p-3 text-slate-700">
            {summary}
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="w-full py-3 bg-[#ffcb09] text-[#1b1c1c] border-2 border-[#1b1c1c] font-label text-sm font-bold uppercase hard-shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" aria-hidden="true" />
              Trainer Card Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" aria-hidden="true" />
              Copy Trainer Card Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}

interface FeatureInfoModalProps {
  feature: ExploreFeatureModalId | null;
  policyTitle: string | null;
  onClose: () => void;
  onJumpToPokedex: () => void;
}

export function FeatureInfoModal({
  feature,
  policyTitle,
  onClose,
  onJumpToPokedex,
}: FeatureInfoModalProps) {
  if (!feature && !policyTitle) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={policyTitle || 'Adventure Feature Details'}
    >
      <div className="w-full max-w-lg bg-white border-[4px] border-[#1b1c1c] hard-shadow-lg p-6 sm:p-8">
        <div className="flex justify-between items-start gap-4 mb-5">
          <div className="flex items-center gap-3">
            {feature === 'arena' && (
              <Swords className="w-7 h-7 text-[#bc0100]" aria-hidden="true" />
            )}
            {feature === 'map' && (
              <MapPin className="w-7 h-7 text-[#bc0100]" aria-hidden="true" />
            )}
            {feature === 'academy' && (
              <Shield className="w-7 h-7 text-[#3c4dcb]" aria-hidden="true" />
            )}
            {policyTitle && (
              <Sparkles className="w-7 h-7 text-[#ffcb09]" aria-hidden="true" />
            )}
            <h2 className="font-display font-black text-2xl uppercase">
              {feature === 'arena' && 'Competitive Battle Arena'}
              {feature === 'map' && 'Live Region Heatmap'}
              {feature === 'academy' && 'Trainer Academy'}
              {policyTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 border-2 border-[#1b1c1c] cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {feature === 'arena' && (
          <div className="space-y-4 font-body text-sm text-slate-700">
            <p>
              Season 14 Ladder is active! Build a balanced 6-Pokémon squad using the
              Pokédex Scanner and Detail views to maximize speed and type coverage.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="border-2 border-[#1b1c1c] p-3 bg-[#fcf9f8]">
                <span className="block font-label text-xs text-slate-500">TIER</span>
                <span className="font-display font-black text-lg">ULTRA</span>
              </div>
              <div className="border-2 border-[#1b1c1c] p-3 bg-[#fcf9f8]">
                <span className="block font-label text-xs text-slate-500">FORMAT</span>
                <span className="font-display font-black text-lg">6v6</span>
              </div>
              <div className="border-2 border-[#1b1c1c] p-3 bg-[#fcf9f8]">
                <span className="block font-label text-xs text-slate-500">WEATHER</span>
                <span className="font-display font-black text-lg">CLEAR</span>
              </div>
            </div>
          </div>
        )}

        {feature === 'map' && (
          <div className="space-y-3 font-body text-sm text-slate-700">
            <p>Active regional encounter spikes detected across 3 zones:</p>
            <ul className="space-y-2">
              <li className="p-3 border-2 border-[#1b1c1c] bg-[#ffcb09]/25 flex justify-between">
                <span className="font-bold">Viridian Forest (Kanto)</span>
                <span className="font-label text-xs uppercase">Pikachu · Bulbasaur</span>
              </li>
              <li className="p-3 border-2 border-[#1b1c1c] bg-slate-50 flex justify-between">
                <span className="font-bold">Whirl Islands (Johto)</span>
                <span className="font-label text-xs uppercase">Lugia · Lapras</span>
              </li>
              <li className="p-3 border-2 border-[#1b1c1c] bg-slate-50 flex justify-between">
                <span className="font-bold">Sky Pillar (Hoenn)</span>
                <span className="font-label text-xs uppercase">Rayquaza</span>
              </li>
            </ul>
          </div>
        )}

        {feature === 'academy' && (
          <div className="space-y-3 font-body text-sm text-slate-700">
            <p className="font-bold text-[#1b1c1c]">
              Core Competitive &amp; Capture Fundamentals:
            </p>
            <div className="p-3 border-2 border-[#1b1c1c] bg-slate-50">
              <strong>1. Effort Values (EVs):</strong> Invest 252 Speed EVs on fast
              sweepers like Charizard and Gengar to outspeed key threats.
            </div>
            <div className="p-3 border-2 border-[#1b1c1c] bg-slate-50">
              <strong>2. Held Items:</strong> Equip Choice Scarf for +50% Speed or
              match Fire/Electric stones to evolve key partners.
            </div>
          </div>
        )}

        {policyTitle && (
          <p className="font-body text-sm text-slate-700 leading-relaxed">
            {policyTitle}: PokéDex Adventure stores your captured species, trainer
            party roster, and item supply counts locally in your browser session.
            Always respect regional sanctuary rules when scanning wild Pokémon.
          </p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 border-2 border-[#1b1c1c] font-label text-xs font-bold uppercase cursor-pointer"
          >
            Close
          </button>
          {feature && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onJumpToPokedex();
              }}
              className="px-5 py-2.5 bg-[#bc0100] text-white border-2 border-[#1b1c1c] font-label text-xs font-bold uppercase hard-shadow-sm cursor-pointer"
            >
              Open Pokédex
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
