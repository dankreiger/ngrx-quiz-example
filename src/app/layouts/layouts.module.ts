import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { NavigationClassesPipe } from '@components/navigation/navigation-classes.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NavigationClassesPipe
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutsModule {}
