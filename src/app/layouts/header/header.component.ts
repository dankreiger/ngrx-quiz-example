import { Component, ChangeDetectionStrategy } from '@angular/core';
import { INavigationData } from '@components/navigation/navigation.interfaces';
import { headerNavigationData } from './header.data';

@Component({
  selector: 'app-layouts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  /* navigation data */
  public headerNavigationData: INavigationData = headerNavigationData;
}
