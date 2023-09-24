//helper function for styles of input box on condition
export const getBGColor = (userAnswer: string | undefined, correctAnswer: string, answer: string): string => {
    const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;
  
    if ((isAnswerCorrect === true && answer === userAnswer) || (isAnswerCorrect === false && answer === correctAnswer))
      return 'border-2 border-[#55AC78] text-black';
  
    if (isAnswerCorrect === false && answer === userAnswer) return 'border-2 border-[#AC5050] text-black';
  
    return 'bg-[#F3F4FA] text-[#9F50AC]';
  };
