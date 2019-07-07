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
  StartQuiz = '[Quiz Service] Start Quiz',
  EndQuiz = '[Quiz Service] End Quiz',
  IncrementCorrectAnswers = '[Quiz Service] Increment Correct Answers',
  IncrementIncorrectAnswers = '[Quiz Service] Increment Incorrect Answers',
  ResetQuizData = '[Quiz Service] Reset Quiz Data',
  SetLevel = '[Quiz Service] Set Level',
  ResetScores = '[Quiz Service] Reset Scores',
  LaunchConfirmation = '[Quiz Service] Launch Confirmation',
  AcceptConfirmation = '[Quiz Service] Accept Confirmation',
  CloseConfirmation = '[Quiz Service] Close Confirmation',
  ResetConfirmation = '[Quiz Service] Reset Confirmation',
  StartAnswerButtonsEntering = '[Quiz Service] StartAnswerButtonsEntering',
  FinishAnswerButtonsEntering = '[Quiz Service] Finish Answer Buttons Entering'
}
