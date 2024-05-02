'use client';

import { ListNavLinkType } from '@/types/ListNavLinkType';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkItem: React.FC<ListNavLinkType> = ({ nameLink, path }) => {
  const pathName = usePathname();
  return (
    <li
      key={nameLink}
      className={`text-primary font-robotoMedium leading-4 font-medium ${
        pathName === path ? 'text-secondary' : 'text-primary'
      }`}>
      <Link
        href={path}
        scroll={false}>
        <span className='hover:text-secondary'>{nameLink}</span>
      </Link>
    </li>
  );
};

export default LinkItem;
