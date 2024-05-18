'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Children } from '@/types/Children';

const Modal: React.FC<Children> = ({ children }) => {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const onModalClose = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlayRef}
      className='w-full flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-stone-600 opacity-90 z-20'
      onClick={onModalClose}>
      {children}
    </div>
  );
};

export default Modal;
