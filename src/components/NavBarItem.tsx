'use client';

import { NavBarItemType } from '@/types/NavBarItemType';
import Image from 'next/image';
import React from 'react';

const NavBarItem: React.FC<NavBarItemType> = ({ genre, onGenreChange }) => {
  const handleGenreChange = () => {
    if (onGenreChange) {
      onGenreChange(genre.text);
    } 
  };
  return (
    <button
      className='flex  items-center justify-center gap-3 w-full'
      onClick={handleGenreChange}>
      <Image
        src={genre.icon}
        alt={genre.text}
        width={30}
        height={35}
      />
      <span className=' hover:border-b-2 hover:border-secondary  cursor-pointer'>{genre.text}</span>
    </button>
  );
};

export default NavBarItem;
