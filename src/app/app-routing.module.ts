import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { QuizPageResolver } from '@pages/quiz-page/quiz-page.resolver';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  {
    path: 'quiz-page',
    component: QuizPageComponent,
    resolve: { quizPageData: QuizPageResolver },
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
