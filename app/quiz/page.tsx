// Utils
import { shuffleArray } from "@/utils/arrayUtils";
// Components
import Quiz from "./Quiz";

// Types
import { Question, QuestionsState } from "@/types";

const TOTAL_QUESTIONS = 5;

const getQuestions = async (): Promise<QuestionsState> => {
  // Define the API endpoint URL.
  const endpoint = `https://mocki.io/v1/06d5e9e1-3cf4-4fd1-85f2-42ad7b8a28ef`;

  //fetching data on starting the quiz
  const data = await (await fetch(endpoint, { cache: "no-store" })).json();

  // Transform the fetched data by shuffling answer choices for each question.
  return data.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

const Home = async () => {
  const questions = await getQuestions();

  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};

export default Home;
