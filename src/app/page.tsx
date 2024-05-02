import { getQuests } from '@/actions/api';
import QuestsContent from '@/components/QuestsContent';

const Home: React.FC = async () => {
  const quests = await getQuests();
  return (
    <section className='container py-12 gradient-bg'>
      <div className='w-full'>
        <span className='font-ralewayMedium font-medium text-sm text-secondary'>
          Квести у Києві
        </span>
        <h1 className='mt-1 mb-12 font-ralewayExtrabold text-[64px] font-extrabold text-white'>
          Виберіть тематику
        </h1>
      </div>
      <QuestsContent quests={quests} />
    </section>
  );
};

export default Home;
