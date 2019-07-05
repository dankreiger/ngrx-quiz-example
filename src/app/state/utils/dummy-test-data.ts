import { IAnswer } from '@state/interfaces/Answer.interface';

export const dummyRandomQuestion = {
  id: '1',
  answerId: '123',
  text: 'What is a text?',
  category: 'Philosophy'
};

export const dummyAnswers: IAnswer[] = [
  { id: '2', label: 'woof' },
  { id: '3', label: 'meow' }
];
