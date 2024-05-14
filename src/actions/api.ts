import { API_BASE_URL } from '@/helpers/constants';
import { OrderQuestType } from '@/types/OrderQuestType';

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

export const orderQuests = async (formData: OrderQuestType) => {
  try {
    const url = `${API_BASE_URL}/orders`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: err?.message,
      };
    }
  }
};
