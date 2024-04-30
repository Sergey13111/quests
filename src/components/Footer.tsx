import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='text-light text-primary font-ralewaySemibold text-sm font-semibold bg-transparent'>
      <div className='py-5 px-8 flex justify-between items-center'>
        <div className='flex gap-x-3'>
          <Image
            src='/img/icons/inst.svg'
            width={24}
            height={24}
            alt='Phone'
          />
          <Image
            src='/img/icons/twit.svg'
            width={24}
            height={24}
            alt='Phone'
          />
          <Image
            src='/img/icons/youtub.svg'
            width={24}
            height={24}
            alt='Phone'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
