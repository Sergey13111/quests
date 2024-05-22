'use server';

import { cookies } from 'next/headers';
import { OrderQuestType } from '@/types/OrderQuestType';
import db from '@/app/modules/db';
import bcrypt from 'bcryptjs';

interface UserData {
  email: string;
  name: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const getQuests = async () => {
  const quests = await db.quest.findMany();
  return quests;
};

export const getDeteiledQuests = async (id: string) => {
  const quest = await db.quest.findUnique({
    where: {
      id: Number(id),
    },
  });
  return quest;
};

export const orderQuests = async (orderData: OrderQuestType) => {
  try {
    const order = await db.orderQuest.create({
      data: orderData,
    });
    return order;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const createUser = async (userData: UserData) => {
  try {
    const existingUser = await db.createUser.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new Error('An account with this data already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(userData.password, salt);
    userData.password = hash;

    const newUser = await db.createUser.create({
      data: userData,
    });

    cookies().set({
      name: 'auth',
      value: 'true',
      httpOnly: true,
    });
    return newUser;
  } catch (error) {
    console.error('Error creating account:', error);
    throw new Error((error as Error).message);
  } finally {
    await db.$disconnect();
  }
};

export const loginUser = async (userData: LoginData) => {
  try {
    const user = await db.createUser.findUnique({
      where: { email: userData.email },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password or email');
    } else {
      cookies().set('auth', 'true');
    }
  } catch (error) {
    console.error('Error creating account:', error);
    throw new Error((error as Error).message);
  }
};

// import { API_BASE_URL } from '@/helpers/constants';
// import { OrderQuestType } from '@/types/OrderQuestType';

// export const getQuests = async () => {
//   try {
//     const url = `${API_BASE_URL}/quests`;
//     const response = await fetch(url);
//     if (!response.ok) throw new Error('Network response was not ok');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// export const getDeteiledQuests = async (id: string) => {
//   try {
//     const url = `${API_BASE_URL}/quests/${id}`;
//     const response = await fetch(url);
//     if (!response.ok) throw new Error('Network response was not ok');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// export const orderQuests = async (formData: OrderQuestType) => {
//   try {
//     const url = `${API_BASE_URL}/orders`;
//     const response = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(formData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await response.json();
//     return data;
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       return {
//         error: err?.message,
//       };
//     }
//   }
// };
