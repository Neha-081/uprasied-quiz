"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HeaderImg from "../assets/headerImage.png";
// Components
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types";
import Image from "next/image";

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};

const Quiz = ({ questions, totalQuestions }: Props) => {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );

  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;

  const router = useRouter();

  const handleOnAnswerClick = (
    answer: string,
    currentQuestionIndex: number
  ) => {
    // If user has already answered, do nothing
    if (isQuestionAnswered) return;
    // Check answer against correct answer
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    // Add score if answer is correct
    if (isCorrect) setScore((prev) => prev + 1);
    // Save the answer in the object for user answers
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const percentage = 66;

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setCurrentQuestionIndex(newQuestionIndex);
  };


  return (
    <div className="h-full relative bg-[#AF9CF3]">
      <div>
      <Image
        className="h-[120px] w-full m-auto"
        src={HeaderImg}
        width={0}
        height={0}
        alt="nav"
      />
      </div>
      <div
        style={{ width: 120, height: 120 }}
        className="m-auto bg-white p-2 absolute rounded-full block top-16 left-0 right-0"
      >
        <CircularProgressbar
          value={(currentQuestionIndex + 1)/totalQuestions * 100}
          text={`${currentQuestionIndex + 1}/${totalQuestions}`}
          // text={`${currentQuestionIndex + 1}/${totalQuestions}`}
          styles={{
            text: {
              fontWeight: "bold", fontSize: "25px", fill: "#606265"
            },
            trail : {
              stroke: "#f2f2f2"
            },
            path: {
              stroke: "#44B77B"
            }
            // trailColor: "#f2f2f2",
            // pathColor: "#44B77B",
            // textColor: "black",
            // textSize: "25px",
          }}
        />
      </div>
      <div className="rounded-t-[30px] bg-white p-5 h-full">
        <QuestionCard
          currentQuestionIndex={currentQuestionIndex}
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          userAnswer={userAnswers[currentQuestionIndex]}
          imageurl={questions[currentQuestionIndex].imageurl}
          correctAnswer={questions[currentQuestionIndex].correct_answer}
          onClick={handleOnAnswerClick}
        />
        <div className="flex justify-between mt-5">
          {/* <Button text='Prev' onClick={() => handleChangeQuestion(-1)} /> */}
          <Button
            text={currentQuestionIndex === totalQuestions - 1 ? "End" : "Next"}
            onClick={
              currentQuestionIndex === totalQuestions - 1
                ? () => router.push("/")
                : () => handleChangeQuestion(1)
            }
          />
        </div>
      </div>
      {/* <p className='p-8 font-bold text-[20px]'>Score: {score}</p> */}
      {/* </div> */}
    </div>
  );
};

export default Quiz;
