import { IRandomQuestion } from './RandomQuestion.interface';

export interface IQuizState {
  loading: boolean;
  question: IRandomQuestion | null;
}
