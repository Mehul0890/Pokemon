import type { AdventureItem, Pokemon, PokemonType } from '../types/pokemon';

export const EXPLORE_ASSETS = {
  heroMountains:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4hjvedx7Z1EzxJ4wpck7ZBuKCcbxm3_1zLh3n72oEx0TiMP8ZjmnAiPZDHk00XRo9vReGtxqE1XmOEiNWwRRexqRr5XRoY-AYCJbn_NGwG7puaVDenM5rbXnrdscIoPIOTJ2VgupH4qHSe2Ok9xZ89hraAl9TMRrcFHBbzzXK18JIiKHfSAhzcf6A_EJcLZVH4oY8B9i6KaCLaHsg6nvfYGKeQl9lh4MUqSP4L5_x2VfBYQg2bp3sa1YaeewAgnlX9kz27MD5QwaI',
  battleArena:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCTiKK2EXZMu1DhbDxbTpTovPDarJXk2KyBMB68A_EmRVETjjdb3sHzdnVgYdGgUEyr5a6SGczJDiPOhvDnjGeBXh80tQdOMgvV2ak83ZuyRWt4EjUiC-qmG2179Rr4dkbawnXd2z4Ud0mSEcD0Z1HWFtB-dWeQKUAcEEuPWmeg9WG3FgKTO3Q8jyCvIKczyAz9u3RLxvnh0fJNzO3oFg3NKGbyHCCpjNhZAXysY3f9OyZp72rgQ9W_Rm_4ARCwedFq3kLAV4vFLkhh',
  trainerAcademy:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuALgtZ-uAvKwjDOp6CjyOR7E4JmySAx1rWx3Z1iFvuku4iqcgTsMoXZAwPCTLMLt8RPkoA-5jMw64FkJtXw78Ez_6o8xxo0JA5ejHLQN26tAQtQNsW2St_FYh8yROjn3hanRR7hyIuDCJ-wYFmfj-D0fvcVJuQTd0zZNlAInyc0vSoWTeoXQXJQa1hKTwDl7haBHSiGIUhiacTq23xMOx49K38meJrmFEBvciuUdhIbBEW6QYE0A9SD8BNa0RyCH2YRBbwKPsvmXNzm',
};

const CHARMANDER_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDuzze7A4ST18-hays3FEfO3HL3uRP8lgXpQT9auW_BhVAAp0Xz7-rCyi9tsZrLNbVQXzPmRY14n__9ExQLME3zZDPQ4-NTSc2kzuukQUDAhTeN2wzpxcr4y7Z8jiOgEUlB99GuZHwTwv6xp95wvaCoFogNyYiHzjzcI9tbPZNIX9LL0e2k_wak10s_YD8lIKIxOxC0vgZXpXbHbGKM5PjYzMch9isSIEEjemo0cZhZEKqTVGRUEHM1InRQP6G9Zv8ZNLHWOOVSrvWr';
const CHARMELEON_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBMYp5BGX6WiZsRbtkfqPtTRMpYN5hz_wiXduTnaYv97uJwawAcWZXrelvgLLbCuMAAKTo7Yglshf3Ze2ewOqnjibZt0WRHOcyu3wqjaomXQ6O5y0DeX_YgRWbfCouJiOebOX3k-09UqQo1xNTzVPAygjnmU-U0Qtnd3fsQpM_PhfNEA4qD2dkOrYa00gaNWRcajsDU5Q9lWj_yU5D0vnG8hV8GOpRLRGtwm7VMJmjWWSfbAjmsw3SWOGYtjwGn_71n_OkGlLaiD_vx';
const CHARIZARD_DETAIL_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_Sql31HLmByFdiJZrh8b8HSE4PmEOPjLF1f48zQYffgg9wqtyASfMskibHiAdlT6F--GnV2y7r_hEAgHCqZ_hRhZEkZCsOXJdzTepISc-8_L82BdKBZ9G_7h5TUskjGPB3DdSRanpTkJzJP4iaMq0OjqtnpSaSBkJMOmbSr8J61H3W0QMep1H3dITmzHJAofC7aTeVEu8z2kHw8SDJZE3kYcrwmgnig8Pds0mzigFmf_SVL5Bjf3C5gbea40XfXUsVLL_Ntg6HU6r';
const CHARIZARD_CARD_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVopmL8KPD_uoaeCv5g4yUhoo8Hm57N9HOJAIXx7KJwR8RKM_GHzOF9wcUy8UCYgV_RpTeaCSd3m8UtumQtYUFXrJmMLoZ248FnLqmTr-ukTb-d8bab7DrC51r3hF0hFM0LP3G56nM_18zDi_-kWoTSyFCdCjRPUi0Xh5HUAQcvKXtR59CLvzm3QWh9e8bfgVFCXMPuu8WlhEXNaBpN2PmmHkibQQ1zwd8FgpTDcUJjwiU7zzgUv9rJbNY9O471MDXS_4RhQ9BJSDD';
const CHARIZARD_GALLERY_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDtXCnK8ECBWgrNh1p8yovvZmP6oVEGg9aU23bYkyBnr55Z5G2a7sgKbMBjTRQarZGx0A_pBltWTMq4qcbw6a8vVKTN62iIyo99eM1XLx6Xo84Se30GQ8FqlpL1E6zOUVqtGKLxWIXI22Y-0ob9V-51sgUnxTzaByILOOEpQ6mLDaKY6qtUkI2YBSFKDIhQzS6fydd1zJOSMtJxbVf2mkoR_FENEg3liN8Zx-hmws6VUoI4nEGv-JQHdbfqFcGXsMaGS3cyaI0pYYlL';
const PIKACHU_CARD_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ85Dr31v6xJKMpL_4iKFmWJT5MNXS7oCIhHZImfpLHvgQtI2cFoT_TshabDZHre9MH9B39ZNMcyFpQoGo0Up0NYN0n8Qb_wOLy7lgcI0SBDgr6SDWgwNTmlazPdV3Fko4cQvU6jWR0pIbLGl8dBjcbd7jY1ZdIhHjxs7HBflir_maD8KKcreA-5J4madIbd2IYl1mOf9XmXQ0265VDOV40eV_6stEt363GGeNH7zEHeEtlFmhIwlUloHrtCjsUgsMtdCAfdwZFh5t';
const PIKACHU_SCAN_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBerHUxGblvQtKw1YNP7c59Pf9zXl1ciAXtpiXl6FewBsCGowUxqCq0-mxsGH6kdRask8vH9WsUaMv4EJ6R5MUBIA2Yy46l1IMrHc7TdCR5qfGz0TkZfke3rPCTnfYNoGRs9LRrGUE4cOUn-OXfrUbcG13Lv6yeZhq_R1mxT7LSdM-BwyjpyPG65y65BtIGwHjPEItipllboDCJb1AdJYqtn3uagDzhRbQqvf5WNHnsMJaNr1H2aSCM6tnatgzd_X2gRsXO5AMvOrY6';
const PIKACHU_GALLERY_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD6SAovreBtrV0vg5dWjaAT5zihT_WhbtIVtsZjPVi59mquDyPen0rpgTZb_3wQ8vkdqtBT_UNLZPv9F89zdUhF8rvNvR3Ff5nd_GAwleLjgCBK3HxO-pDDUvP3bvvNs71MEEpyb2vZeMPZoSPKm9OqK1D7uIlxVwIFSkoAERds3NatbSarUH6M4TgACuHWM7NxhHMaI-JMU9btFc-sy22dDR8dlfoH6LKy_hubFjYMoK7JpmODiRKcRJtCsCC_qkOeMXuIfs9z3wFD';
const BULBASAUR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDKho1UrMpjQOF8k6CHmwLpTmc_5Xwf-QXvbtL2TNCg1EYV9uYWCqIv_BikJBmOlMAdU4EQxSA9aeQaNo_FZ2SAzTnEZYU5uc_paz2lvI6efz66W9V7M9f1d3_Wcbe5qzTF3c8LPMPq-ls-BglNEbnFEKdfoMkKlheGQbU7B3MV_OrEAYVjq-JGM6uXuam5m-h7li30amf_cNDYbKx_wUPCXtJZLaV_uIipuIfTohqzXNI4ZGddiya8v7HwBlOCQGhtDg4nYTApfBsH';
const MEWTWO_CARD_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Twub9delty0Devvb9UB0gKSYgGFgkZ4SvNv1KClp8zcKzyctDWUDH2H1sApfptkRGO5IoWB7DOw_5uoCGjrPPIiy0YSyz60AZQq9-5p9P5FjUH8mID6NoKSLYMfsknf5QlZkOrGpxZrihhL6eamGB-ZBW0sDrziqhmyhPKi3qcSZ7wizXpqxUqO_ZDsKMeWAJG-_51iDu8j_TbJteKV2zH97hzJ7vDe_uM5YOkFIGDUtY48jfV9Obh2PUXA4QNomsSeQ45Z9s98c';
const MEWTWO_GALLERY_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBybBRDgTNZmfmogcmQLdN0zmD7YuAPM-mqVn_bzA-NkJ6w_1f_B3_ZMP7oVkfTa0rXrAUy6NrT6cd_9U44C9D46rxD5G8eYz5u_lYknKDOylHh_JbEl0yYNO_dsv2eiymRZUDcxpPU4cUF4a4Lx9iltwLYkkOKgRM2EWw8sI7Foj8BWTmTVXTK1R5IF3MoK5Bfuj0bxRNsWcNsf3R0i0GhJbWM2ETZ425NBEsdHjzRmlTNVmG5LFEBmeMn4oGefQi7CffhARdq2-A6';
const LAPRAS_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA0xrCrSrELPIuICMjeDMXwc9W5aIKZWbAcWVN-23HqGR3Q4cC-loji45ArxeUarYs2TOQwDVXtoLJ9WWo1a15Odz9lDJUfjzLZph5W8dcFeho16ZaF8Cu9D7Wk16Yy6jWba_9OtJT79f_dRtzZ5DGfV0sK_JcjiQF6d0tPtMIfG-a_2QwENu1VQhEzlvv_hRjbK4mULjgwvii9tR4R74rrv1Zk_HTdLohYKHHO-IJMiSJljvmIte3DO2LqzyXZ5toH1wLwoujioolA';
const LUCARIO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBOUQqdSjWLbhBmnnFFaxSKaP2cO5vSJaxu8Ks0RbEUBy_S0PARFp6Iv3xBRTjnSGrDTleD0_Afb2wOTKoxMGkFhI4uqVHDDao7EJGyNz38QDVMFFdKW5IIbGMCKQZ91Iz3a_RdRCkY2oGZ5HtEA_lzpb7cpEIp53mTjNu7PIjQc4E8QJI5wq88dTIqfRcgRkWJ1P5Uf90_z2honFjvFhUanuutrSPy5qWSeL_CDhjJ8CfByke3Y-oMd4FDhhO8Fnzp112sjz-tGnFK';
const RAYQUAZA_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBFTJJiQlwyU79BkMXOAxNDA2CrTmGBDyQbLOKGZc013EGqJ2l1XNdBuE3yjJ1AGnVlvT7OS49xhzsrl48BxrTUn9G9y4gUovSn6K0G5qRX2vW73aUB9g5CuK-qh-Z8IVXmnrpf3FU52HXubL7cuDM55hRrkxfG7G35D9qIdWt0O14e_nnAQ31X37nHheA26M8kKBL1CMxLjSbVUr9IEJtcd795_3ZDcTSJdGhLNdT2v7IsKJkYqxyFff81MXw17N6a-Pwj8lBnNRZ6';
const GENGAR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDa1Jc4-GFWMXalTiHu06Ig61UD3qqGGfv3L7VVeSWj3MxnVOru5chPhrV6Mh6cS060cEHghMYOZmdGpEVEMF8fLlxcJGpeIPkAvKy1gCtqd7tpXg00CfyEbzmDgsQycROtCfn52Qfz1vifY4_jvMbMccKsFl2WYLS0y_ird5SNlKmratHkotDb6N0229EH_puyiPQ6LqIrs3q-uPQo8qrXuVs_7dbOh_RcIQa2h0r91U_6d1HKRPTkxSqTRQ0gT0pB5yHgSHIjlkfv';
const SYLVEON_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAlIVYpt5sxGmKJvnSPYXyjNYEfco6z6o3y64ZVku-uLNB4r6Pm6jZHPDQaWCMfohTUK1cvmFsSZBCCop_7hqafzypjWpVwe1HyLT9n3V4kDIoJ9Tmoqk6fLy0TYz3C6S49-IMAjmG_4oxbY0T7fu2FcnKurgAbPh0ZI3OdBZp0WhZJZGMd9R2d5QEh1-7zyWbSkitfYRr7_0iuo_vH0LTtkU0K2c7PuWHKZG3xU62-UbqW1rMRWFDSNe-j7cV7d_wzGItel2MJYa7d';
const BLASTOISE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDPLVU5IG8sOcJf8dXJ8QkdcFqm0vsd1G6vCWj2lMBR_RxTqt372hRviKQ1xCAV-2PgxYKFrVNtMQzet-AgKHOx_rRM2VNzad3uYBWtWTqVwNqiZ_x_X-z0HmqaUz3nh9Sm0FjQZHH9oydid-YzW-x0_DbKdLW2g9jxWsKtP-ZTF8c4n6eoum7pro_Z-wKbA0DbXChC51zFXDPGFvTdtj30Ldsxrk6syzIdjpWNFOB2vFQpWzNOk059HmGTKDCX2xKdQUZpjLn6kJEI';

export const TYPE_BADGE_STYLES: Record<PokemonType, string> = {
  Electric: 'bg-[#ffcb09] text-[#1b1c1c]',
  Fire: 'bg-[#bc0100] text-white',
  Flying: 'bg-[#5768e6] text-white',
  Grass: 'bg-emerald-500 text-white',
  Psychic: 'bg-purple-600 text-white',
  Water: 'bg-blue-500 text-white',
  Fighting: 'bg-blue-800 text-white',
  Steel: 'bg-zinc-500 text-white',
  Dragon: 'bg-emerald-700 text-white',
  Ghost: 'bg-purple-800 text-white',
  Poison: 'bg-fuchsia-800 text-white',
  Fairy: 'bg-pink-400 text-white',
};

export const POKEMON_DATA: Pokemon[] = [
  {
    id: 'pikachu',
    number: 25,
    name: 'Pikachu',
    types: ['Electric'],
    generation: 'Gen I',
    abilities: ['Static', 'Lightning Rod'],
    description:
      'When several of these POKÉMON gather, their electricity could build and cause lightning storms.',
    trainerTip:
      'Pikachu is extremely rare in the wild. Check the Viridian Forest during the morning hours for a better encounter rate!',
    heightM: 0.4,
    weightKg: 6.0,
    stats: { hp: 35, atk: 55, spd: 90 },
    imageUrl: PIKACHU_CARD_IMG,
    scannerImageUrl: PIKACHU_SCAN_IMG,
    galleryImageUrl: PIKACHU_GALLERY_IMG,
    isLegendary: false,
    hasMega: false,
    isShinyAvailable: true,
    region: 'Kanto',
    evolutions: [
      { id: 'pikachu', name: 'PIKACHU', levelLabel: 'Lv. 1 / Friendship', imageUrl: PIKACHU_CARD_IMG },
    ],
    moves: [
      {
        name: 'Thunderbolt',
        type: 'Electric',
        power: 90,
        accuracy: 100,
        description: 'A strong electric blast crashes down on the target. This may also leave the target with paralysis.',
      },
      {
        name: 'Volt Tackle',
        type: 'Electric',
        power: 120,
        accuracy: 100,
        description: 'The user electrifies itself and charges the target. This also damages the user quite a lot.',
      },
      {
        name: 'Quick Attack',
        type: 'Flying',
        power: 40,
        accuracy: 100,
        description: 'The user lunges at the target at a speed that makes it almost invisible. Always strikes first.',
      },
      {
        name: 'Iron Tail',
        type: 'Steel',
        power: 100,
        accuracy: 75,
        description: 'The target is slammed with a steel-hard tail. This may also lower the target’s Defense stat.',
      },
    ],
  },
  {
    id: 'charizard',
    number: 6,
    name: 'Charizard',
    types: ['Fire', 'Flying'],
    generation: 'Gen I',
    abilities: ['Blaze', 'Solar Power'],
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    trainerTip:
      'Charizard’s tail flame burns brighter after intense battles. Pair Flamethrower with Sunny Day for overwhelming fire power!',
    heightM: 1.7,
    weightKg: 90.5,
    stats: { hp: 78, atk: 84, spd: 100 },
    imageUrl: CHARIZARD_CARD_IMG,
    scannerImageUrl: CHARIZARD_DETAIL_IMG,
    galleryImageUrl: CHARIZARD_GALLERY_IMG,
    isLegendary: false,
    hasMega: true,
    isShinyAvailable: true,
    region: 'Kanto',
    evolutions: [
      { id: 'charmander', name: 'CHARMANDER', levelLabel: 'Lv. 1', imageUrl: CHARMANDER_IMG },
      { id: 'charmeleon', name: 'CHARMELEON', levelLabel: 'Lv. 16', imageUrl: CHARMELEON_IMG },
      { id: 'charizard', name: 'CHARIZARD', levelLabel: 'Lv. 36', imageUrl: CHARIZARD_DETAIL_IMG },
    ],
    moves: [
      {
        name: 'Flamethrower',
        type: 'Fire',
        power: 90,
        accuracy: 100,
        description: 'The target is scorched with an intense blast of fire. This may also leave the target with a burn.',
      },
      {
        name: 'Dragon Claw',
        type: 'Dragon',
        power: 80,
        accuracy: 100,
        description: 'The user slashes the target with huge, sharp claws. It does not have any secondary effect.',
      },
      {
        name: 'Air Slash',
        type: 'Flying',
        power: 75,
        accuracy: 95,
        description: 'The user attacks with a blade of air that slices even the sky. This may also make the target flinch.',
      },
      {
        name: 'Fire Spin',
        type: 'Fire',
        power: 35,
        accuracy: 85,
        description: 'The user traps the target inside a fierce vortex of fire that inflicts damage for four to five turns.',
      },
    ],
  },
  {
    id: 'bulbasaur',
    number: 1,
    name: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    generation: 'Gen I',
    abilities: ['Overgrow', 'Chlorophyll'],
    description:
      'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKÉMON.',
    trainerTip:
      'Bulbasaur thrives in sunlit clearings near Cerulean City. Use Leech Seed early to sustain HP during gym challenges!',
    heightM: 0.7,
    weightKg: 6.9,
    stats: { hp: 45, atk: 49, spd: 45 },
    imageUrl: BULBASAUR_IMG,
    scannerImageUrl: BULBASAUR_IMG,
    galleryImageUrl: BULBASAUR_IMG,
    isLegendary: false,
    hasMega: false,
    region: 'Kanto',
    evolutions: [
      { id: 'bulbasaur', name: 'BULBASAUR', levelLabel: 'Lv. 1', imageUrl: BULBASAUR_IMG },
    ],
    moves: [
      {
        name: 'Vine Whip',
        type: 'Grass',
        power: 45,
        accuracy: 100,
        description: 'The target is struck with slender, whiplike vines to inflict damage.',
      },
      {
        name: 'Razor Leaf',
        type: 'Grass',
        power: 55,
        accuracy: 95,
        description: 'Sharp-edged leaves are launched to slash at opposing Pokémon. Critical hits land more easily.',
      },
      {
        name: 'Sludge Bomb',
        type: 'Poison',
        power: 90,
        accuracy: 100,
        description: 'Unsanitary sludge is hurled at the target. This may also poison the target.',
      },
      {
        name: 'Solar Beam',
        type: 'Grass',
        power: 120,
        accuracy: 100,
        description: 'A two-turn attack that gathers sunlight, then blasts a bundled beam on the next turn.',
      },
    ],
  },
  {
    id: 'mewtwo',
    number: 150,
    name: 'Mewtwo',
    types: ['Psychic'],
    generation: 'Gen I',
    abilities: ['Pressure', 'Unnerve'],
    description:
      'Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.',
    trainerTip:
      'Deep inside Cerulean Cave awaits Mewtwo. Bring Ultra Balls or a Master Ball and watch out for its blazing speed!',
    heightM: 2.0,
    weightKg: 122.0,
    stats: { hp: 106, atk: 110, spd: 130 },
    imageUrl: MEWTWO_CARD_IMG,
    scannerImageUrl: MEWTWO_CARD_IMG,
    galleryImageUrl: MEWTWO_GALLERY_IMG,
    isLegendary: true,
    hasMega: true,
    isShinyAvailable: true,
    region: 'Kanto',
    evolutions: [
      { id: 'mewtwo', name: 'MEWTWO', levelLabel: 'Legendary', imageUrl: MEWTWO_CARD_IMG },
    ],
    moves: [
      {
        name: 'Psystrike',
        type: 'Psychic',
        power: 100,
        accuracy: 100,
        description: 'The user materializes an odd psychic wave to attack the target. Deals physical-grade impact.',
      },
      {
        name: 'Aura Sphere',
        type: 'Fighting',
        power: 80,
        accuracy: 100,
        description: 'The user lets loose a blast of aura power from deep within its body. This attack never misses.',
      },
      {
        name: 'Shadow Ball',
        type: 'Ghost',
        power: 80,
        accuracy: 100,
        description: 'The user hurls a shadowy blob at the target. This may also lower the target’s Special Defense.',
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        power: 90,
        accuracy: 100,
        description: 'The target is hit by a strong telekinetic force. This may also lower Special Defense.',
      },
    ],
  },
  {
    id: 'lapras',
    number: 131,
    name: 'Lapras',
    types: ['Water'],
    generation: 'Gen I',
    abilities: ['Water Absorb', 'Shell Armor'],
    description:
      'A gentle soul that can read the minds of people. It can ferry people across the sea on its back.',
    trainerTip:
      'Listen for Lapras’s resonant song along coastal routes on Friday evenings—it can carry trainers across deep channels.',
    heightM: 2.5,
    weightKg: 220.0,
    stats: { hp: 130, atk: 85, spd: 60 },
    imageUrl: LAPRAS_IMG,
    scannerImageUrl: LAPRAS_IMG,
    galleryImageUrl: LAPRAS_IMG,
    isLegendary: false,
    hasMega: false,
    region: 'Kanto',
    evolutions: [
      { id: 'lapras', name: 'LAPRAS', levelLabel: 'Rare Coastal', imageUrl: LAPRAS_IMG },
    ],
    moves: [
      {
        name: 'Hydro Pump',
        type: 'Water',
        power: 110,
        accuracy: 80,
        description: 'The target is blasted by a huge volume of water launched under great pressure.',
      },
      {
        name: 'Surf',
        type: 'Water',
        power: 90,
        accuracy: 100,
        description: 'The user attacks everything around it by swamping its surroundings with a giant wave.',
      },
      {
        name: 'Body Slam',
        type: 'Fighting',
        power: 85,
        accuracy: 100,
        description: 'The user drops onto the target with its full body weight. This may leave the target paralyzed.',
      },
      {
        name: 'Psychic Noise',
        type: 'Psychic',
        power: 75,
        accuracy: 100,
        description: 'The user attacks with unpleasant sound waves that prevent the target from recovering HP.',
      },
    ],
  },
  {
    id: 'lucario',
    number: 448,
    name: 'Lucario',
    types: ['Fighting', 'Steel'],
    generation: 'Gen IV',
    abilities: ['Steadfast', 'Inner Focus'],
    description:
      'By catching the aura emanating from others, it can read their thoughts and movements from over half a mile away.',
    trainerTip:
      'Train Riolu with high friendship during daytime to evolve into Lucario and unlock its signature Aura Sphere.',
    heightM: 1.2,
    weightKg: 54.0,
    stats: { hp: 70, atk: 110, spd: 90 },
    imageUrl: LUCARIO_IMG,
    scannerImageUrl: LUCARIO_IMG,
    galleryImageUrl: LUCARIO_IMG,
    isLegendary: false,
    hasMega: true,
    isShinyAvailable: true,
    region: 'Sinnoh',
    evolutions: [
      { id: 'lucario', name: 'LUCARIO', levelLabel: 'Friendship', imageUrl: LUCARIO_IMG },
    ],
    moves: [
      {
        name: 'Aura Sphere',
        type: 'Fighting',
        power: 80,
        accuracy: 100,
        description: 'The user lets loose a blast of aura power from deep within its body. Never misses.',
      },
      {
        name: 'Close Combat',
        type: 'Fighting',
        power: 120,
        accuracy: 100,
        description: 'The user fights the target up close without guarding itself.',
      },
      {
        name: 'Flash Cannon',
        type: 'Steel',
        power: 80,
        accuracy: 100,
        description: 'The user gathers all its light energy and releases it all at once.',
      },
      {
        name: 'Meteor Mash',
        type: 'Steel',
        power: 90,
        accuracy: 90,
        description: 'The target is hit with a hard punch fired like a meteor. May raise Attack.',
      },
    ],
  },
  {
    id: 'rayquaza',
    number: 384,
    name: 'Rayquaza',
    types: ['Dragon', 'Flying'],
    generation: 'Gen III',
    abilities: ['Air Lock'],
    description:
      'It lives in the ozone layer far above the clouds and cannot be seen from the ground.',
    trainerTip:
      'Rayquaza descends to Sky Pillar when atmospheric pressure drops. Its Air Lock negates all weather hazards!',
    heightM: 7.0,
    weightKg: 206.5,
    stats: { hp: 105, atk: 150, spd: 95 },
    imageUrl: RAYQUAZA_IMG,
    scannerImageUrl: RAYQUAZA_IMG,
    galleryImageUrl: RAYQUAZA_IMG,
    isLegendary: true,
    hasMega: true,
    isShinyAvailable: true,
    region: 'Hoenn',
    evolutions: [
      { id: 'rayquaza', name: 'RAYQUAZA', levelLabel: 'Sky Pillar', imageUrl: RAYQUAZA_IMG },
    ],
    moves: [
      {
        name: 'Dragon Ascent',
        type: 'Flying',
        power: 120,
        accuracy: 100,
        description: 'After soaring upward, the user attacks its target by dropping out of the sky at high speeds.',
      },
      {
        name: 'Outrage',
        type: 'Dragon',
        power: 120,
        accuracy: 100,
        description: 'The user rampages and attacks for two to three turns before becoming confused.',
      },
      {
        name: 'Draco Meteor',
        type: 'Dragon',
        power: 130,
        accuracy: 90,
        description: 'Comets are summoned down from the sky onto the target.',
      },
      {
        name: 'Air Slash',
        type: 'Flying',
        power: 75,
        accuracy: 95,
        description: 'The user attacks with a blade of air that slices even the sky.',
      },
    ],
  },
  {
    id: 'gengar',
    number: 94,
    name: 'Gengar',
    types: ['Ghost', 'Poison'],
    generation: 'Gen I',
    abilities: ['Cursed Body'],
    description:
      'Under a full moon, this POKÉMON likes to mimic the shadows of people and laugh at their fright.',
    trainerTip:
      'Notice a sudden 5-degree temperature drop in Lavender Tower? A wild Gengar may be hiding right in your shadow!',
    heightM: 1.5,
    weightKg: 40.5,
    stats: { hp: 60, atk: 65, spd: 110 },
    imageUrl: GENGAR_IMG,
    scannerImageUrl: GENGAR_IMG,
    galleryImageUrl: GENGAR_IMG,
    isLegendary: false,
    hasMega: true,
    isShinyAvailable: true,
    region: 'Kanto',
    evolutions: [
      { id: 'gengar', name: 'GENGAR', levelLabel: 'Trade Evo', imageUrl: GENGAR_IMG },
    ],
    moves: [
      {
        name: 'Shadow Ball',
        type: 'Ghost',
        power: 80,
        accuracy: 100,
        description: 'The user hurls a shadowy blob at the target. May lower Special Defense.',
      },
      {
        name: 'Sludge Wave',
        type: 'Poison',
        power: 95,
        accuracy: 100,
        description: 'The user strikes everything around it by swamping the area with a giant sludge wave.',
      },
      {
        name: 'Hex',
        type: 'Ghost',
        power: 65,
        accuracy: 100,
        description: 'This relentless attack does massive damage to a target affected by status conditions.',
      },
      {
        name: 'Dazzling Gleam',
        type: 'Fairy',
        power: 80,
        accuracy: 100,
        description: 'The user damages opposing Pokémon by emitting a powerful flash.',
      },
    ],
  },
  {
    id: 'sylveon',
    number: 700,
    name: 'Sylveon',
    types: ['Fairy'],
    generation: 'Gen VI',
    abilities: ['Cute Charm', 'Pixilate'],
    description:
      'It sends a soothing aura from its ribbonlike feelers to calm fights and wrap around its beloved trainer’s arm.',
    trainerTip:
      'Sylveon’s Pixilate ability transforms normal strikes into Fairy-type powerhouses against Dragon teams!',
    heightM: 1.0,
    weightKg: 23.5,
    stats: { hp: 95, atk: 65, spd: 60 },
    imageUrl: SYLVEON_IMG,
    scannerImageUrl: SYLVEON_IMG,
    galleryImageUrl: SYLVEON_IMG,
    isLegendary: false,
    hasMega: false,
    isShinyAvailable: true,
    region: 'Kalos',
    evolutions: [
      { id: 'sylveon', name: 'SYLVEON', levelLabel: 'Affection', imageUrl: SYLVEON_IMG },
    ],
    moves: [
      {
        name: 'Moonblast',
        type: 'Fairy',
        power: 95,
        accuracy: 100,
        description: 'Borrowing the power of the moon, the user attacks the target. May lower Special Attack.',
      },
      {
        name: 'Dazzling Gleam',
        type: 'Fairy',
        power: 80,
        accuracy: 100,
        description: 'The user damages opposing Pokémon by emitting a powerful flash.',
      },
      {
        name: 'Psyshock',
        type: 'Psychic',
        power: 80,
        accuracy: 100,
        description: 'The user materializes an odd psychic wave to attack the target.',
      },
      {
        name: 'Draining Kiss',
        type: 'Fairy',
        power: 50,
        accuracy: 100,
        description: 'The user steals the target’s energy with a kiss, restoring over half the damage dealt.',
      },
    ],
  },
  {
    id: 'blastoise',
    number: 9,
    name: 'Blastoise',
    types: ['Water'],
    generation: 'Gen I',
    abilities: ['Torrent', 'Rain Dish'],
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    trainerTip:
      'Blastoise anchors its heavy shell into the ground before firing twin pressurized water cannons that punch through steel.',
    heightM: 1.6,
    weightKg: 85.5,
    stats: { hp: 79, atk: 83, spd: 78 },
    imageUrl: BLASTOISE_IMG,
    scannerImageUrl: BLASTOISE_IMG,
    galleryImageUrl: BLASTOISE_IMG,
    isLegendary: false,
    hasMega: true,
    region: 'Kanto',
    evolutions: [
      { id: 'blastoise', name: 'BLASTOISE', levelLabel: 'Lv. 36', imageUrl: BLASTOISE_IMG },
    ],
    moves: [
      {
        name: 'Hydro Cannon',
        type: 'Water',
        power: 150,
        accuracy: 90,
        description: 'The target is hit with a watery blast. The user can’t move on the next turn.',
      },
      {
        name: 'Flash Cannon',
        type: 'Steel',
        power: 80,
        accuracy: 100,
        description: 'The user gathers all its light energy and releases it all at once.',
      },
      {
        name: 'Surf',
        type: 'Water',
        power: 90,
        accuracy: 100,
        description: 'The user attacks everything around it by swamping its surroundings with a giant wave.',
      },
      {
        name: 'Aqua Tail',
        type: 'Water',
        power: 90,
        accuracy: 90,
        description: 'The user attacks by swinging its tail as if it were a vicious wave in a raging storm.',
      },
    ],
  },
  {
    id: 'charmander',
    number: 4,
    name: 'Charmander',
    types: ['Fire'],
    generation: 'Gen I',
    abilities: ['Blaze', 'Solar Power'],
    description:
      'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.',
    trainerTip:
      'Keep Charmander sheltered during heavy downpours; its tail flame reflects both its vitality and fighting spirit!',
    heightM: 0.6,
    weightKg: 8.5,
    stats: { hp: 39, atk: 52, spd: 65 },
    imageUrl: CHARMANDER_IMG,
    scannerImageUrl: CHARMANDER_IMG,
    galleryImageUrl: CHARMANDER_IMG,
    isLegendary: false,
    hasMega: false,
    region: 'Kanto',
    evolutions: [
      { id: 'charmander', name: 'CHARMANDER', levelLabel: 'Lv. 1', imageUrl: CHARMANDER_IMG },
      { id: 'charmeleon', name: 'CHARMELEON', levelLabel: 'Lv. 16', imageUrl: CHARMELEON_IMG },
      { id: 'charizard', name: 'CHARIZARD', levelLabel: 'Lv. 36', imageUrl: CHARIZARD_DETAIL_IMG },
    ],
    moves: [
      {
        name: 'Ember',
        type: 'Fire',
        power: 40,
        accuracy: 100,
        description: 'The target is attacked with small flames. It may also leave the target with a burn.',
      },
      {
        name: 'Dragon Breath',
        type: 'Dragon',
        power: 60,
        accuracy: 100,
        description: 'The user exhales a mighty gust that inflicts damage. May also leave the target paralyzed.',
      },
      {
        name: 'Fire Fang',
        type: 'Fire',
        power: 65,
        accuracy: 95,
        description: 'The user bites with flame-cloaked fangs. May make the target flinch or burn.',
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        power: 90,
        accuracy: 100,
        description: 'The target is scorched with an intense blast of fire.',
      },
    ],
  },
  {
    id: 'charmeleon',
    number: 5,
    name: 'Charmeleon',
    types: ['Fire'],
    generation: 'Gen I',
    abilities: ['Blaze', 'Solar Power'],
    description:
      'When it swings its burning tail, it elevates the temperature to unbearably high levels.',
    trainerTip:
      'Charmeleon seeks strong rivals in rocky canyons like Rock Tunnel—watch for its razor-sharp claws!',
    heightM: 1.1,
    weightKg: 19.0,
    stats: { hp: 58, atk: 64, spd: 80 },
    imageUrl: CHARMELEON_IMG,
    scannerImageUrl: CHARMELEON_IMG,
    galleryImageUrl: CHARMELEON_IMG,
    isLegendary: false,
    hasMega: false,
    region: 'Kanto',
    evolutions: [
      { id: 'charmander', name: 'CHARMANDER', levelLabel: 'Lv. 1', imageUrl: CHARMANDER_IMG },
      { id: 'charmeleon', name: 'CHARMELEON', levelLabel: 'Lv. 16', imageUrl: CHARMELEON_IMG },
      { id: 'charizard', name: 'CHARIZARD', levelLabel: 'Lv. 36', imageUrl: CHARIZARD_DETAIL_IMG },
    ],
    moves: [
      {
        name: 'Flame Burst',
        type: 'Fire',
        power: 70,
        accuracy: 100,
        description: 'The user attacks the target with a bursting flame that scorches nearby foes.',
      },
      {
        name: 'Dragon Claw',
        type: 'Dragon',
        power: 80,
        accuracy: 100,
        description: 'The user slashes the target with huge, sharp claws.',
      },
      {
        name: 'Fire Spin',
        type: 'Fire',
        power: 35,
        accuracy: 85,
        description: 'Traps the target inside a fierce vortex of fire for four to five turns.',
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        power: 90,
        accuracy: 100,
        description: 'The target is scorched with an intense blast of fire.',
      },
    ],
  },
  {
    id: 'lugia',
    number: 249,
    name: 'Lugia',
    types: ['Psychic', 'Flying'],
    generation: 'Gen II',
    abilities: ['Pressure', 'Multiscale'],
    description:
      'It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm.',
    trainerTip:
      'A single flap of Lugia’s wings can blow apart houses—approach the Whirl Islands with a Silver Wing!',
    heightM: 5.2,
    weightKg: 216.0,
    stats: { hp: 106, atk: 90, spd: 110 },
    imageUrl: LAPRAS_IMG,
    scannerImageUrl: MEWTWO_CARD_IMG,
    galleryImageUrl: MEWTWO_GALLERY_IMG,
    isLegendary: true,
    hasMega: false,
    isShinyAvailable: true,
    region: 'Johto',
    evolutions: [
      { id: 'lugia', name: 'LUGIA', levelLabel: 'Whirl Islands', imageUrl: MEWTWO_CARD_IMG },
    ],
    moves: [
      {
        name: 'Aeroblast',
        type: 'Flying',
        power: 100,
        accuracy: 95,
        description: 'A vortex of air is shot at the target to inflict damage. Critical hits land more easily.',
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        power: 90,
        accuracy: 100,
        description: 'The target is hit by a strong telekinetic force.',
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        power: 110,
        accuracy: 80,
        description: 'Blasts the target with a huge volume of water launched under great pressure.',
      },
      {
        name: 'Dragon Pulse',
        type: 'Dragon',
        power: 85,
        accuracy: 100,
        description: 'The target is attacked with a shock wave generated by the user’s gaping mouth.',
      },
    ],
  },
];

export const ADVENTURE_ITEMS: AdventureItem[] = [
  {
    id: 'ultra-ball',
    name: 'Ultra Ball',
    category: 'Poké Balls',
    description: 'An ultra-high performance Poké Ball that provides a higher success rate for catching wild Pokémon than a Great Ball.',
    effect: '2.0× Catch Rate Modifier',
    cost: 800,
    rarity: 'Rare',
    accentColor: '#ffcb09',
    initialQty: 14,
  },
  {
    id: 'master-ball',
    name: 'Master Ball',
    category: 'Poké Balls',
    description: 'The very best Poké Ball with the ultimate level of performance. It catches any wild Pokémon without fail.',
    effect: 'Guaranteed Capture (255×)',
    cost: 0,
    rarity: 'Master',
    accentColor: '#5768e6',
    initialQty: 1,
  },
  {
    id: 'poke-ball',
    name: 'Poké Ball',
    category: 'Poké Balls',
    description: 'A device for catching wild Pokémon. It is thrown like a ball at a Pokémon, comfortably encapsulating its target.',
    effect: '1.0× Standard Catch Rate',
    cost: 200,
    rarity: 'Common',
    accentColor: '#bc0100',
    initialQty: 25,
  },
  {
    id: 'hyper-potion',
    name: 'Hyper Potion',
    category: 'Medicine',
    description: 'A spray-type medicine for treating wounds. It restores the HP of a single Pokémon by up to 120 points.',
    effect: 'Restores 120 HP',
    cost: 1500,
    rarity: 'Common',
    accentColor: '#10b981',
    initialQty: 8,
  },
  {
    id: 'max-revive',
    name: 'Max Revive',
    category: 'Medicine',
    description: 'A medicine that can revive fainted Pokémon. It fully restores a fainted Pokémon’s maximum HP.',
    effect: 'Revive + 100% Max HP',
    cost: 4000,
    rarity: 'Rare',
    accentColor: '#ffcb09',
    initialQty: 3,
  },
  {
    id: 'fire-stone',
    name: 'Fire Stone',
    category: 'Evolution',
    description: 'A peculiar stone that makes certain species of Pokémon evolve. It has a fiery orange heart.',
    effect: 'Triggers Fire Evolution',
    cost: 3000,
    rarity: 'Rare',
    accentColor: '#bc0100',
    initialQty: 2,
  },
  {
    id: 'thunder-stone',
    name: 'Thunder Stone',
    category: 'Evolution',
    description: 'A peculiar stone that makes certain species of Pokémon evolve. It has an unmistakable thunderbolt pattern.',
    effect: 'Triggers Electric Evolution',
    cost: 3000,
    rarity: 'Rare',
    accentColor: '#ffcb09',
    initialQty: 2,
  },
  {
    id: 'choice-scarf',
    name: 'Choice Scarf',
    category: 'Held Items',
    description: 'An item to be held by a Pokémon. This curious scarf boosts Speed, but allows the use of only one move.',
    effect: '+50% Speed in Battle',
    cost: 6000,
    rarity: 'Master',
    accentColor: '#3c4dcb',
    initialQty: 1,
  },
];
