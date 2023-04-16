'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const route = useRouter();
  return (
    <div>
      <Image
        src={'/images/hauzilogo.png'}
        width={100}
        height={100}
        alt='logo'
        className='cursor-pointer'
      />
    </div>
  );
};

export default Logo;
