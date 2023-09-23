'use client';

import Image from 'next/image';
import Quiz from '../app/assets/quiz.svg';
import Logo from '../app/assets/logo.svg';
import { useRouter } from 'next/navigation';
// Components
import Button from '@/components/Button/Button';

const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => router.push('/quiz');

  return (
    <div className='text-center w-full p-5 min-h-full relative'>
      <Image className="h-[40px] w-[290px] m-auto" src={Logo} width={0} height={0} alt='logo' />
      <Image className="h-[396px] w-[232px] m-auto" src={Quiz} width={0} height={0} alt='quiz-logo' />
      <Button text='Start' onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
