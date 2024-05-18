import { NavBarPropsType } from '@/types/NavBarPropsType';
import NavBarItem from './NavBarItem';
import { genres } from '@/helpers/constants';

const NavBar: React.FC<NavBarPropsType> = ({ onGenreChange }) => {
  return (
    <nav className='flex justify-between items-center  divide-x text-primary py-2 w-full mb-6'>
      {genres.map((genre) => (
        <NavBarItem
          key={genre.text}
          onGenreChange={onGenreChange}
          genre={genre}
        />
      ))}
    </nav>
  );
};

export default NavBar;
