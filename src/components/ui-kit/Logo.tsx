import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href={'/'}>
      <Image
        src='/img/icons/logo.svg'
        width={134}
        height={50}
        alt='Logo'
      />
    </Link>
  );
};

export default Logo;
