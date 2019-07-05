import { IRandomQuestion } from './RandomQuestion.interface';
import { IAnswer } from './Answer.interface';

export interface IQuizState {
  error?: any;
  loading: boolean;
  question: IRandomQuestion | null;
  answers?: IAnswer[] | null;
}
