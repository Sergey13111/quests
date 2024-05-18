'use client';

import React from 'react';
import Link from 'next/link';

interface ButtomProps {
  children: React.ReactNode;
  disabled?: boolean;
  type: 'submit' | 'button';
  href?: string;
  onClick?: () => void;
}

const Buttom: React.FC<ButtomProps> = ({ children, disabled, type, href, onClick }) => {
  const buttonContent = (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-[65px] w-64 h-16 hover:pointer ${
        disabled ? 'bg-disabled cursor-not-allowed' : 'bg-secondary hover:bg-btnHover'
      }`}>
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};
export default Buttom;
