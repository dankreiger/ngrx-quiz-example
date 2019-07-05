import { Component, Input } from '@angular/core';
import {
  NavigationBackground,
  NavigationHeadingTag,
  NavigationHorizontalPosition,
  NavigationOutlineStyle,
  NavigationVerticalSpace
} from './navigation.types';
import { INavigationData } from './navigation.interfaces';

@Component({
  selector: 'app-cmp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private _navigationData: INavigationData;
  public hasDivider = false;
  @Input() set navigationData(data: INavigationData) {
    if (data.outlineStyle === 'border') {
      this.hasDivider = true;
    }
    this._navigationData = data;
  }

  get navigationData(): INavigationData {
    return this._navigationData;
  }
}
