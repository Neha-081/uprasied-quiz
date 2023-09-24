// Helpers

import Image from "next/image";
import { getBGColor, getCheckboxColor } from "./helper";

type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  onClick: (answer: string, currentQuestionIndex: number) => void;
  imageurl: string
};

const QuestionCard: React.FC<Props> = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  onClick,
  correctAnswer,
  imageurl
}) => {

  return (
    <div>
      <p
        className="text-[15px] max-w-[400px] font-bold text-black mt-16"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      {/* {
        <Image
        className="h-[50px] w-full m-auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ690Ti09dMcVFzbOsqwa4j9B6ha1IIusTijQ&usqp=CAU'"
        width={0}
        height={0}
        alt="nav"
      />
} */}
{imageurl &&
<img src={imageurl}
className="m-auto p-2 max-h-[100px]"
/>
}
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
              )} mx-2 w-5 h-5 rounded-full checkbox-round`}
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
