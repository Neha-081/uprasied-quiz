"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { usePathname } from "next/navigation";
import HeaderImg from "../assets/headerImage.png";
// Components
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types";
import Image from "next/image";
import ScoreCard from "@/components/ScoreCard/ScoreCard";
import Router from "next/router";

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};

const Quiz = ({ questions, totalQuestions }: Props) => {
  console.log(totalQuestions, "totalQuestions");

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [userData, setUserData] = useState<any>([]);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );
  console.log(userData, "userData");

  const pathname = usePathname();
  console.log(userAnswers, "userAnswers");

  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;
  console.log(isQuestionAnswered, "isQuestionAnswered");

  const router = useRouter();

  const handleOnAnswerClick = (
    answer: string,
    currentQuestionIndex: number
  ) => {
    if (!isQuestionAnswered) {
    }
    // If user has already answered, do nothing
    if (isQuestionAnswered) return;
    // Check answer against correct answer
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    // Add score if answer is correct
    if (isCorrect) setScore((prev) => prev + 1);
    // Save the answer in the object for user answers
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));

    // mock post API having payload for answer and timme taken for each answer by user
    fetch("https://mocki.io/v1/06d5e9e1-3cf4-4fd1-85f2-42ad7b8a28ef", {
      method: "POST",
      body: JSON.stringify({
        title: "userAnswers",
        body: {
          userAnswer: answer,
          timeTaken: 5000,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((post) => {
        setUserData((posts: any) => [post, ...posts]);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
      {isEnd ? (
        <ScoreCard score={score} totalQuestions={totalQuestions} />
      ) : (
        <>
          <div
            style={{ width: 120, height: 120 }}
            className="m-auto bg-white p-2 absolute rounded-full block top-16 left-0 right-0"
          >
            <CircularProgressbar
              value={((currentQuestionIndex + 1) / totalQuestions) * 100}
              text={`${currentQuestionIndex + 1}/${totalQuestions}`}
              // text={`${currentQuestionIndex + 1}/${totalQuestions}`}
              styles={{
                text: {
                  fontWeight: "bold",
                  fontSize: "25px",
                  fill: "#606265",
                },
                trail: {
                  stroke: "#f2f2f2",
                },
                path: {
                  stroke: "#44B77B",
                },
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
                text={
                  currentQuestionIndex === totalQuestions - 1 ? "End" : "Next"
                }
                onClick={
                  currentQuestionIndex === totalQuestions - 1
                    ? () => setIsEnd(true)
                    : () => handleChangeQuestion(1)
                }
                disabled={!isQuestionAnswered}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
