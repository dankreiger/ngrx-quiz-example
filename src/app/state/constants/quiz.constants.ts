import { GetRandomQuestionPath, GetAnswersPath } from '../types/ApiPath.types';
import { Level } from '@state/types/Level.types';

/**
 * @description api paths
 */
export const getRandomQuestionPath: GetRandomQuestionPath =
  '/getRandomQuestion';
export const getAnswersPath: GetAnswersPath = '/getAnswers';

/**
 * @description difficulty levels
 */

export const EASY: Level = 'Easy';
export const MEDIUM: Level = 'Medium';
export const HARD: Level = 'Hard';
