import { Input } from '@angular/core';
import { INavigationData } from './navigation.interfaces';

export abstract class NavigationDefault {
  private _navData: INavigationData;
  private _incorrectAnswerCount: number;
  private _correctAnswerCount: number;
  private _quizStarted: boolean;
  private _answerButtonsEntering: boolean;
  private _currentUrl: string;

  private _hasDivider = false;

  @Input() set navigationData(data: INavigationData) {
    if (data.outlineStyle === 'border') {
      this.hasDivider = true;
    }
    this._navData = data;
  }

  get navigationData(): INavigationData {
    return this._navData;
  }

  set hasDivider(hasDivider: boolean) {
    this._hasDivider = hasDivider;
  }

  get hasDivider(): boolean {
    return this._hasDivider;
  }

  set incorrectAnswerCount(incorrectAnswerCount: number) {
    this._incorrectAnswerCount = incorrectAnswerCount;
  }
  get incorrectAnswerCount(): number {
    return this._incorrectAnswerCount;
  }

  set correctAnswerCount(correctAnswerCount: number) {
    this._correctAnswerCount = correctAnswerCount;
  }
  get correctAnswerCount(): number {
    return this._correctAnswerCount;
  }

  set quizStarted(quizStarted: boolean) {
    this._quizStarted = quizStarted;
  }
  get quizStarted(): boolean {
    return this._quizStarted;
  }

  set answerButtonsEntering(answerButtonsEntering: boolean) {
    this._answerButtonsEntering = answerButtonsEntering;
  }
  get answerButtonsEntering(): boolean {
    return this._answerButtonsEntering;
  }

  set currentUrl(currentUrl: string) {
    this._currentUrl = currentUrl;
  }
  get currentUrl(): string {
    return this._currentUrl;
  }
}
