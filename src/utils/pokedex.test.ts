import test from 'node:test';
import assert from 'node:assert/strict';
import { ADVENTURE_ITEMS, POKEMON_DATA } from '../data/pokemonData';
import {
  calculatePowerLevel,
  capturePokemon,
  filterAndSortGallery,
  filterItems,
  filterScannerPokemon,
  formatDexNumber,
  formatScannerNo,
  toggleTeamMember,
} from './pokedex';

test('formatDexNumber and formatScannerNo pad numbers properly', () => {
  assert.equal(formatDexNumber(25), '#0025');
  assert.equal(formatDexNumber(6), '#0006');
  assert.equal(formatDexNumber(150), '#0150');
  assert.equal(formatScannerNo(25), 'NO. 025');
});

test('filterScannerPokemon filters by name, number, type, generation, and ability', () => {
  const byName = filterScannerPokemon(POKEMON_DATA, {
    query: 'pika',
    type: 'All Types',
    generation: 'All Generations',
    ability: 'Any Ability',
  });
  assert.equal(byName.length, 1);
  assert.equal(byName[0].id, 'pikachu');

  const byNumber = filterScannerPokemon(POKEMON_DATA, {
    query: '0006',
    type: 'All Types',
    generation: 'All Generations',
    ability: 'Any Ability',
  });
  assert.equal(byNumber.length, 1);
  assert.equal(byNumber[0].id, 'charizard');

  const byFireAndBlaze = filterScannerPokemon(POKEMON_DATA, {
    query: '',
    type: 'Fire',
    generation: 'Gen I',
    ability: 'Blaze',
  });
  assert.equal(byFireAndBlaze.length, 3);
  assert.ok(byFireAndBlaze.every((p) => p.types.includes('Fire')));
});

test('filterAndSortGallery handles Legendary, Mega Evolved, and sorting modes', () => {
  const legendary = filterAndSortGallery(POKEMON_DATA, {
    query: '',
    category: 'Legendary',
    sortBy: 'number',
  });
  assert.ok(legendary.length >= 3);
  assert.ok(legendary.every((p) => p.isLegendary));

  const megasByPower = filterAndSortGallery(POKEMON_DATA, {
    query: '',
    category: 'Mega Evolved',
    sortBy: 'power',
  });
  assert.ok(megasByPower.length >= 4);
  assert.ok(
    calculatePowerLevel(megasByPower[0]) >= calculatePowerLevel(megasByPower[1])
  );

  const byAlpha = filterAndSortGallery(POKEMON_DATA, {
    query: '',
    category: 'All Types',
    sortBy: 'name',
  });
  assert.ok(byAlpha[0].name.localeCompare(byAlpha[1].name) <= 0);

  const featured = filterAndSortGallery(POKEMON_DATA, {
    query: '',
    category: 'All Types',
    sortBy: 'featured',
  });
  assert.deepEqual(
    featured.slice(0, 4).map((p) => p.id),
    ['charizard', 'lucario', 'rayquaza', 'gengar']
  );
});

test('toggleTeamMember enforces 6-slot team cap and toggles membership', () => {
  const step1 = toggleTeamMember(['pikachu'], 'charizard');
  assert.equal(step1.status, 'added');
  assert.deepEqual(step1.nextTeam, ['pikachu', 'charizard']);

  const step2 = toggleTeamMember(['pikachu', 'charizard'], 'pikachu');
  assert.equal(step2.status, 'removed');
  assert.deepEqual(step2.nextTeam, ['charizard']);

  const fullTeam = ['a', 'b', 'c', 'd', 'e', 'f'];
  const step3 = toggleTeamMember(fullTeam, 'g', 6);
  assert.equal(step3.status, 'full');
  assert.equal(step3.nextTeam.length, 6);
});

test('capturePokemon records unique captures', () => {
  const first = capturePokemon(['pikachu'], 'charizard');
  assert.equal(first.newlyCaptured, true);
  assert.deepEqual(first.nextCaptured, ['pikachu', 'charizard']);

  const duplicate = capturePokemon(first.nextCaptured, 'charizard');
  assert.equal(duplicate.newlyCaptured, false);
  assert.deepEqual(duplicate.nextCaptured, ['pikachu', 'charizard']);
});

test('filterItems filters by category and search query', () => {
  const balls = filterItems(ADVENTURE_ITEMS, '', 'Poké Balls');
  assert.equal(balls.length, 3);
  assert.ok(balls.every((i) => i.category === 'Poké Balls'));

  const search = filterItems(ADVENTURE_ITEMS, '120 hp', 'All Items');
  assert.equal(search.length, 1);
  assert.equal(search[0].id, 'hyper-potion');
});
