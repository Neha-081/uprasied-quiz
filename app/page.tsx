"use client";

import Image from "next/image";
import Quiz from "../app/assets/quiz.svg";
import Logo from "../app/assets/logo.svg";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

//function to start the quiz  
  const handleButtonClick = () => router.push("/quiz");

  return (
    <div className="flex flex-col justify-between text-center w-full min-h-screen relative p-5 bg-gradient-to-t from-[#AF9CF3] overflow-hidden">
      <div className="">
        <Image
          className="h-[40px] w-[290px] m-auto"
          src={Logo}
          width={0}
          height={0}
          alt="logo"
        />
      </div>
      <div className="m-auto">
        <Image
          className="h-[396px] w-[232px] m-auto"
          src={Quiz}
          width={0}
          height={0}
          alt="quiz-logo"
        />
      </div>
      <div className="fixed bottom-0 m-auto relative">
        <button
          className="bg-[#FF3B3F] w-full select-none text-2xl font-[600] h-[50px] min-w-[370px] rounded-full text-white"
          onClick={handleButtonClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
