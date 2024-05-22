'use  client';

import { deleteAuthCookie } from '@/helpers/auth';
import React from 'react';

const Logout: React.FC = () => {
  const handleLogout = async () => {
    await deleteAuthCookie();
  };
  return (
    <button
      onClick={handleLogout}
      className='hover:text-secondary hover:cursor-pointer'>
      Logout
    </button>
  );
};

export default Logout;
