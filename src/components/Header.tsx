import { listNavLink } from '@/helpers/constants';
import Logo from './ui-kit/Logo';
import Navigation from './ui-kit/Navigation';

const Header: React.FC = () => {
  return (
    <header className='text-light text-primary font-ralewaySemibold text-sm font-semibold'>
      <div className='py-5 px-8 flex justify-between items-center'>
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
