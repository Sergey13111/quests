import NotFound from '@/app/not-found';
import { QuestType } from '@/types/QuestType';
import QuestItem from './QuestItem';

interface QuestsList {
  filteredQuests: QuestType[];
}

const QuestsList: React.FC<QuestsList> = ({ filteredQuests }) => {
  !filteredQuests && NotFound();
  return (
    <div className='grid grid-cols-3 gap-5 w-full'>
      {filteredQuests.map((quest: QuestType) => (
        <QuestItem
          key={quest.id}
          quest={quest}
        />
      ))}
    </div>
  );
};

export default QuestsList;
