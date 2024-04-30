import { NavigationPropsType } from '@/types/NavigationPropsType';
import LinkItem from './LinkItem';

const Navigation: React.FC<NavigationPropsType> = ({ variant, listNavLink }) => {
  const ulClasses = `text-secondary flex  ${
    variant === 'horizontal' ? ' gap-x-10' : 'gap-y-5 flex-col'
  }`;
  return (
    <nav>
      <ul className={ulClasses}>
        {listNavLink?.map(({ nameLink, path }) => (
          <LinkItem
            key={nameLink}
            nameLink={nameLink}
            path={path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
