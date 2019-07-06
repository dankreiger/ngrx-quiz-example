/**
 * @description quiz redux actions
 */
export enum EQuizActionType {
  GetRandomQuestionBegin = '[Quiz Effects] Get Questions Begin',
  GetRandomQuestionSuccess = '[Quiz Effects] Get Questions Success',
  GetRandomQuestionFailure = '[Quiz Effects] Get Questions Failure',
  GetAnswersBegin = '[Quiz Effects] Get Answer Begin',
  GetAnswersSuccess = '[Quiz Effects] Get Answer Success',
  GetAnswersFailure = '[Quiz Effects] Get Answer Failure',
  StartQuiz = '[Home Page] Start Quiz',
  StartQuizAutomatically = '[QuizPage Resolver] Start Quiz Automatically'
}
