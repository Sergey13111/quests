'use client';

import React, { useState } from 'react';
import NavBar from './NavBar';
import QuestsList from './QuestsList';
import { QuestType } from '@/types/QuestType';
import { QuestsListPropsType } from '@/types/QuestsListPropsType';
import { GenreType } from '@/types/GenreType';

const QuestsContent: React.FC<QuestsListPropsType> = ({ quests }) => {
  const [selectedGenre, setSelectedGenre] = useState('all');

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  const filteredQuests = quests.filter(
    (quest: QuestType) => selectedGenre === 'all' || quest.type === selectedGenre
  );
  return (
    <div className='flex flex-wrap'>
      <NavBar onGenreChange={handleGenreChange} />
      <QuestsList filteredQuests={filteredQuests} />
    </div>
  );
};

export default QuestsContent;
