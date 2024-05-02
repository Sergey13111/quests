import { QuestType } from '@/types/QuestType';
import Image from 'next/image';
import Link from 'next/link';

type QuestPropsType = {
  quest: QuestType;
};

const QuestItem: React.FC<QuestPropsType> = ({ quest }) => {
  return (
    <div className='relative max-w-sm rounded flex overflow-hidden shadow-lg items-end h-[232px] '>
      <Link href={`/quests/${quest.id}`}>
        <div className='absolute inset-0'>
          <Image
            src={`/${quest.previewImg}`}
            fill
            alt='Quest'
            priority
          />
        </div>
        <div className='flex relative p-5 flex-col '>
          <h2 className='font-ralewayBold font-bold	 text-2xl mb-4 text-white w-full'>
            {quest.title}
          </h2>
          <div className='font-ralewayMedium flex text-primary text-sm font-medium opacity-80 w-full'>
            <div className='flex gap-2 p-1 pr-3 border-r'>
              {' '}
              <Image
                src='/img/icons/person.svg'
                alt='Person'
                width={16}
                height={16}
                priority
              />
              <span>{`${quest.peopleCount[0]}-${quest.peopleCount[1]} люд`}</span>
            </div>
            <div className='flex gap-2   p-1 pl-3'>
              <Image
                src='/img/icons/puzzle.svg'
                alt='Puzzle'
                width={16}
                height={16}
                priority
              />
              <span>{quest.level}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default QuestItem;
