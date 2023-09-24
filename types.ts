  export type Question = {
    category: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
    question: string;
    type: string;
    imageurl: string;
  };
  
  export type QuestionsState = Array<Question & { answers: Array<string> }>;
  