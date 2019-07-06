import { Component, Input } from '@angular/core';
import { INavigationData } from './navigation.interfaces';

@Component({
  selector: 'app-cmp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private navData: INavigationData;
  public hasDivider = false;
  @Input() set navigationData(data: INavigationData) {
    if (data.outlineStyle === 'border') {
      this.hasDivider = true;
    }
    this.navData = data;
  }

  get navigationData(): INavigationData {
    return this.navData;
  }
}
