// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { answerAdapter } from '@state/reducers/answers.reducer';

// const {
//   selectIds, // select the array of question ids
//   selectEntities, // select the dictionary of question entities
//   selectAll, // select the array of questions
//   selectTotal // select the total question count
// } = answerAdapter.getSelectors();

// export const selectAnswersState = createFeatureSelector<IAnswersState>(
//   'answersReducer'
// );

// export const selectAnswers = createSelector(
//   selectAnswersState,
//   (state: IAnswersState) => state.answers
// );

// // export const selectCurrentAnswers = createSelector(
// //   selectAnswersState,
// //   (state: IAnswersState): IAnswer[] => state.answers
// // );

// // export const selectCurrentQuestionId = createSelector(
// //   selectCurrentQuestion,
// //   (state: IQuestion) => state.id
// // );

// // export const selectCurrentQuestionText = createSelector(
// //   selectQuestionEntities,
// //   selectCurrentQuestionId,
// //   (questionEntities, questionId) => questionEntities[questionId]
// // );
