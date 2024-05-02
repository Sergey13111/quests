import { API_BASE_URL } from '@/helpers/constants';

export const getQuests = async () => {
  try {
    const url = `${API_BASE_URL}/quests`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getDeteiledQuests = async (id: string) => {
  try {
    const url = `${API_BASE_URL}/quests/${id}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
