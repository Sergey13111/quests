import { ListNavLinkType } from '@/types/ListNavLinkType';

export const listNavLink: ListNavLinkType[] = [
  { nameLink: 'КВЕСТИ', path: '/' },
  { nameLink: 'НОВАЧКАМ', path: '/beginners' },
  { nameLink: 'ВІДГУКИ', path: '/reviews' },
  { nameLink: 'АКЦІЇ', path: '/actions' },
  { nameLink: 'КОНТАКТИ', path: '/contacts' },
];

export const genres = [
  { icon: '/img/icons/all_quests.svg', text: 'all' },
  { icon: '/img/icons/adventures.svg', text: 'adventures' },
  { icon: '/img/icons/horror.svg', text: 'horror' },
  { icon: '/img/icons/mystic.svg', text: 'mystic' },
  { icon: '/img/icons/detective.svg', text: 'detective' },
  { icon: '/img/icons/sciFi.svg', text: 'sci-fi' },
];

export const API_BASE_URL = 'http://localhost:3001';
