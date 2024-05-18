export type QuestType = {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  coverImg: string;
  type: string;
  level: 'easy' | 'medium' | 'hard';
  peopleCount: [number, number];
  duration: number;
};
