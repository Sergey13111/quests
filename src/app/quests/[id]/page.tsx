import { getDeteiledQuests } from '@/actions/api';
import Image from 'next/image';
import Badge from '@/components/ui-kit/Badge';
import Buttom from '@/components/ui-kit/Buttom';
import { redirect } from 'next/navigation';

interface DetailsQuest {
  params: {
    id: string;
  };
}

const DetailsQuest: React.FC<DetailsQuest> = async ({ params }) => {
  const quest = await getDeteiledQuests(params?.id);
  const errForBadge = [
    { src: '/img/icons/clock.svg', alt: 'clock', span: `${quest?.duration} мин` },
    {
      src: '/img/icons/person.svg',
      alt: 'person',
      span: `${quest?.peopleCount[0]}-${quest?.peopleCount[1]} чел`,
    },
    { src: '/img/icons/puzzle.svg', alt: 'puzzle', span: `${quest?.duration} мин` },
  ];

  return (
    <section className='w-full h-full flex  h-dvh'>
      <Image
        src={`/${quest?.coverImg}`}
        style={{ position: 'absolute' }}
        alt='Background'
        fill
      />
      <div className='container flex w-full mt-[150px] p-4 truncate z-10'>
        <div className='w-1/2 ml-[50%] '>
          <div className='w-full max-w-[520px] truncate'>
            <span className='font-ralewayMedium font-medium text-sm text-secondary'>ужасы</span>
            <h1 className='mt-1 mb-10 font-ralewayExtrabold text-[92px] font-extrabold text-white leading-none	text-wrap	'>
              {quest?.title}
            </h1>
            <div className='flex  items-center gap-3 w-full mb-5 divide-x'>
              {errForBadge.map(({ src, alt, span }) => (
                <Badge
                  key={alt}
                  alt={alt}
                  src={src}
                  span={span}
                />
              ))}
            </div>
            <p className='w-full font-ralewayMedium font-medium text-pretty text-sm mb-10'>
              {quest?.description}
            </p>
            <Buttom
              type='button'
              href={`/quests/${params.id}/orderQuest`}>
              <span className='font-ralewayBold text-lg	font-bold text-white'>ЗАБРОНИРОВАТЬ</span>
            </Buttom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsQuest;
