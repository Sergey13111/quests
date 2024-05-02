import { Children } from '@/types/Children';

const Buttom: React.FC<Children> = ({ children }) => {
  return (
    <button className='bg-secondary rounded-[65px] w-64 h-16 hover:pointer hover:bg-btnHover'>
      {children}
    </button>
  );
};

export default Buttom;
