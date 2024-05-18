import { QuestType } from '@/types/QuestType';
import Image from 'next/image';

interface Badge {
  src: string;
  alt: string;
  span: string;
}

const Badge: React.FC<Badge> = ({ src, alt, span }) => {
  return (
    <div className='flex pl-3 h-[26px] '>
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        priority
      />
      <span className='ml-1 h-full '>{span}</span>
    </div>
  );
};

export default Badge;
