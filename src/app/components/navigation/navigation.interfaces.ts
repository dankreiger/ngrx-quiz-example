import {
  NavigationBackground,
  NavigationHeadingTag,
  NavigationHorizontalPosition,
  NavigationOutlineStyle,
  NavigationVerticalSpace
} from './navigation.types';

export interface INavigationData {
  background: NavigationBackground;
  headingTag: NavigationHeadingTag;
  horizontalPosition: NavigationHorizontalPosition;
  outlineStyle: NavigationOutlineStyle;
  verticalSpace: NavigationVerticalSpace;
}
