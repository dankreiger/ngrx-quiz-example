import { Pipe, PipeTransform } from '@angular/core';
import { INavigationData } from './navigation.interfaces';
import { navigationClasses } from './navigation.styleguide';
import { NavigationLayoutArea } from './navigation.types';
/*
 * Produce correct classes given input data
 * Usage:
 *   navigationData | navigationClasses
 * Example:
 *   {{ navigationData | navigationClasses }}
 *   formats to: 1024
 */
@Pipe({ name: 'navigationClasses', pure: true })
export class NavigationClassesPipe implements PipeTransform {
  transform(
    navigationData: INavigationData,
    layoutArea?: NavigationLayoutArea
  ): string {
    const classes: string[] = [];
    const {
      outlineStyle,
      background,
      headingTag,
      horizontalPosition,
      verticalSpace
    } = navigationClasses;

    switch (layoutArea) {
      case 'outerContainer':
        classes.push(
          background[navigationData.background],
          outlineStyle[navigationData.outlineStyle]
        );
        break;
      case 'divider':
        classes.push(
          navigationClasses.outlineStyle[navigationData.horizontalPosition]
        );
        break;
      default:
        const baseClass = 'xng-navigation';
        classes.push(
          baseClass,
          horizontalPosition[navigationData.horizontalPosition],
          headingTag[navigationData.headingTag],
          verticalSpace[navigationData.verticalSpace]
        );
        break;
    }
    return classes.join(' ');
  }
}
