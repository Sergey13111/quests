'use client';

import React from 'react';
import { deleteAuthCookie } from '@/helpers/auth';

const Logout: React.FC = () => {
  const handleLogout = async () => {
    deleteAuthCookie();
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
