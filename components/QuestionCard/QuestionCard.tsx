// Helpers
import { useEffect, useState } from "react";
import { getBGColor } from "./helper";

// Define the props that the QuestionCard component receives.
type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  onClick: (answer: string, currentQuestionIndex: number) => void;
  imageurl: string;
  timeTaken: number;
};

const QuestionCard: React.FC<Props> = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  onClick,
  correctAnswer,
  imageurl,
  timeTaken,
}) => {
  const [timeTakenn, setTimeTakenn] = useState(0);

  // Reset the timeTaken when the userAnswer changes.
  useEffect(() => {
    setTimeTakenn(0);
  }, [userAnswer]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setTimeTakenn(timeTakenn + 1);
    }, 1000);

    // Clean up the timer when the component unmounts.
    return () => {
      clearInterval(timeout);
    };
  }, [timeTakenn]);

  return (
    <div>
      {!userAnswer && (
        <p className="text-black font-base">
          Time:<span className="text-red-500 font-bold"> {timeTaken}s</span>
        </p>
      )}
      <p
        className="text-[15px] max-w-[400px] font-bold text-black mt-16"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      {imageurl && <img src={imageurl} className="m-auto p-2 max-h-[100px]" />}
      <div className="flex flex-col items-center pt-8">
        {answers.map((answer) => (
          <div
            key={answer}
            onClick={() => onClick(answer, currentQuestionIndex)}
            className={`${getBGColor(
              userAnswer,
              correctAnswer,
              answer
            )} cursor-pointer text-sm flex items-center justify-left select-none text-black font-light min-h-[60px] max-w-[400] w-full my-2 rounded-[10px]`}
          >
            <span
              className="truncate mx-10"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
