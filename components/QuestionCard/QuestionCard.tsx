// Helpers

import { getBGColor, getCheckboxColor } from "./helper";

type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  onClick: (answer: string, currentQuestionIndex: number) => void;
};

const QuestionCard: React.FC<Props> = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  onClick,
  correctAnswer,
}) => {
  console.log(correctAnswer, "correctAnswer");

  return (
    <div>
      <p
        className="text-[15px] max-w-[400px] font-bold text-black mt-10"
        dangerouslySetInnerHTML={{ __html: question }}
      />
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
            <input
              type="checkbox"
              value=""
              className={`${getCheckboxColor(
                userAnswer,
                correctAnswer,
                answer
              )} mx-2 w-5 h-5 rounded-full`}
            />
            <span
              className="truncate mx-5"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
