import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  keyframes
} from '@angular/animations';

export const quizItemAnimationDuration = 500;
const enterFrames = [
  style({ opacity: 0, transform: 'rotate3d(0, 1, 0, 90deg)' }),
  style({ opacity: 0.25, transform: 'rotate3d(0, 1, 0, 45deg)' }),
  style({ opacity: 0.5, transform: 'rotate3d(0, 1, 0, 10deg)' }),
  style({ opacity: 1, transform: 'rotate3d(0, 1, 0, 0deg)' })
];
export const enteringAnswerButtons = [
  trigger('staggerAnswerButtons', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          stagger(
            `${quizItemAnimationDuration}ms`,
            animate(
              `${quizItemAnimationDuration}ms cubic-bezier(.36,-0.64,.34,1.76)`,
              keyframes(enterFrames)
            )
          )
        ],
        { optional: true }
      )
    ])
  ])
];
