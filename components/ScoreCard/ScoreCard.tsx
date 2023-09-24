"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import HeaderImg from "../../app/assets/headerImage.png";
import { useRouter } from "next/navigation";
import ReactSpeedometer from "react-d3-speedometer";

type Props = {
  score: number;
  totalQuestions: number;
};

const ScoreCard: React.FC<Props> = ({ score, totalQuestions }) => {
  console.log(score, "score");

  const router = useRouter();
  console.log((score / totalQuestions) * 100, "score/totalQuestions * 100");

  return (
    <div className="h-full relative bg-[#AF9CF3]">
      <div className="rounded-t-[30px] bg-white p-5 h-full">
        <p className="text-black font-bold text-center text-2xl">Your Result</p>
        <div className="max-h-[200px] mt-5">
          <ReactSpeedometer
            value={score}
            maxValue={totalQuestions}
            currentValueText={`${(score / totalQuestions) * 100}%`}
          />
        </div>
        <div className="flex flex-col items-center pt-8">
          <div
            className={`bg-green-100 cursor-pointer text-sm flex items-center justify-left select-none text-black font-light min-h-[60px] max-w-[400] w-full my-2 rounded-[10px]`}
          >
            <p className="h-3 w-3 rounded-full bg-[#44B77B] mx-3"></p>
            <p className="truncate">
              <span className="font-bold text-base"> {score} </span> Correct
            </p>
          </div>
        </div>
        <div
          className={`bg-red-100 cursor-pointer text-sm flex items-center justify-left select-none text-black font-light min-h-[60px] max-w-[400] w-full my-2 rounded-[10px]`}
        >
          <p className="h-3 w-3 rounded-full bg-[#FF3B3F] mx-3"></p>
          <p className="truncate">
            <span className="font-bold text-base">
              {" "}
              {totalQuestions - score}{" "}
            </span>{" "}
            Inorrect
          </p>
        </div>
        <div className="flex justify-between mt-8">
          {/* <Button text='Prev' onClick={() => handleChangeQuestion(-1)} /> */}
          <Button
            text={"Start Again"}
            onClick={() => router.push("/")}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
