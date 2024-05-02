import { icons } from './ui-kit/Icons';

const Footer: React.FC = () => {
  return (
    <footer className='fixed bottom-0 left-0 text-light text-primary font-ralewaySemibold text-sm font-semibold bg-transparent'>
      <div className='py-5 px-8 flex justify-between items-center'>
        <div className='flex gap-x-3  '>
          {icons.map(({ id, ComponentSVG, className }) => (
            <ComponentSVG
              key={id}
              className={className}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
