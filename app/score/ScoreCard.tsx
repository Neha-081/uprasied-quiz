"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderImg from "../assets/headerImage.png";

type Props = {};

const ScoreCard: React.FC<Props> = ({}) => {
  const router = useRouter();

  const scoreArr = [
    { type: "correct", number: "3" },
    { type: "incorrect", number: "2" },
  ];

  return (
    <div className="h-full relative bg-[#AF9CF3]">
      <div className="">
        <Image
          className="h-[120px] w-full m-auto"
          src={HeaderImg}
          width={0}
          height={0}
          alt="nav"
        />
      </div>
      {/* <p className='p-8 font-bold text-[20px]'>Score: {score}</p> */}
      {/* </div> */}
      <div className="rounded-t-[30px] bg-white p-5 h-full">
        <p className="text-black font-bold text-center text-2xl">Your Result</p>
        <div className="flex flex-col items-center pt-8">
          <div
            className={`bg-green-100 cursor-pointer text-sm flex items-center justify-left select-none text-black font-light min-h-[60px] max-w-[400] w-full my-2 rounded-[10px]`}
          >
            <span className="h-3 w-3 rounded-full bg-[#44B77B] mx-3"></span>
            <span className="truncate">Correct</span>
          </div>
        </div>
        <div
            className={`bg-red-100 cursor-pointer text-sm flex items-center justify-left select-none text-black font-light min-h-[60px] max-w-[400] w-full my-2 rounded-[10px]`}
          >
             <span className="h-3 w-3 rounded-full bg-[#FF3B3F] mx-3"></span>
            <span className="truncate">Incorrect</span>
          </div>
      </div>
      <div className="flex justify-between mt-5">
        {/* <Button text='Prev' onClick={() => handleChangeQuestion(-1)} /> */}
        <Button
          text={"Start Again"}
          onClick={() => router.push("/")}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default ScoreCard;
