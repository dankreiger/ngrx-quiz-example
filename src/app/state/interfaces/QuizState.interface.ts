import { IRandomQuestion } from './RandomQuestion.interface';
import { IAnswer } from './Answer.interface';

export interface IQuizState {
  quizStarted: boolean;
  questionLoading: boolean;
  question: IRandomQuestion | null;
  answersLoading: boolean;
  answers: IAnswer[] | null;
  correctAnswers: number;
  incorrectAnswers: number;
  error?: any;
}
