'use server';

import { cookies } from 'next/headers';

export const isAuthenticated = async () => {
  const cookieStore = cookies();
  const auth = cookieStore.get('auth');
  console.log('111', auth);

  return auth?.value === 'true';
};

// export const deleteAuthCookie = () => {
//   const cookieStore = cookies();
//   cookieStore.delete('auth');
// };

export function deleteAuthCookie() {
  const cookieStore = cookies();
  cookieStore.set('auth', '');
}
