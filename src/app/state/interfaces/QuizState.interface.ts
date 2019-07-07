import { IRandomQuestion } from './RandomQuestion.interface';
import { IAnswer } from './Answer.interface';
import { Level } from '@state/types/Level.types';

export interface IQuizState {
  quizStarted: boolean;
  questionLoading: boolean;
  question: IRandomQuestion | null;
  answersLoading: boolean;
  answers: IAnswer[];
  correctAnswers: number;
  incorrectAnswers: number;
  level: Level;
  confirmationModalOpen: boolean;
  confirmationAccepted: boolean;
  answerButtonsEntering: boolean;
  error?: any;
}
