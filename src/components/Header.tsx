'use server';

import { listNavLink } from '@/helpers/constants';
import Logo from './ui-kit/Logo';
import Navigation from './ui-kit/Navigation';
import Link from 'next/link';
import { cookies } from 'next/headers';

const Header: React.FC = () => {
  const cookieStore = cookies();
  const auth = cookieStore.get('auth');

  return (
    <header className='text-light fixed w-full bg-transparent text-primary font-ralewaySemibold text-sm font-semibold z-10'>
      <div className='py-5 px-8  top-0 left-0 flex justify-between items-center'>
        <div className='flex items-center hover:cursor-pointer'>
          <Logo />
        </div>

        <div className='flex items-center'>
          <Navigation
            listNavLink={listNavLink}
            variant='horizontal'
          />
        </div>
        <div className='flex items-center'>
          {auth?.value ? (
            <Link href='/'>Logout</Link>
          ) : (
            <>
              <Link
                href='/sign-up'
                className='hover:text-secondary hover:cursor-pointer'>
                Sign Up
              </Link>
              <Link
                href='/sign-in'
                className='hover:text-secondary hover:cursor-pointer ml-4'>
                Sign In
              </Link>
            </>
          )}
        </div>

        <div className='flex items-center'>
          <a
            href='tel:88001111111'
            className='hover:text-secondary	 hover:cursor-pointer'>
            8 (800) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
