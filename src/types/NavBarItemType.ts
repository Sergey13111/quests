import { GenreType } from './GenreType';

export type NavBarItemType = {
  genre: GenreType;
  onGenreChange: (genre: string) => void;
};
