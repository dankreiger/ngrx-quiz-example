/* angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* ngrx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

/* enviroment */
import { environment } from '@environments/environment';

/* reducers */
import { reducers, metaReducers } from '@state/reducers';

/* interceptors */
import { BaseApiUrlInterceptor } from '@core/interceptors/baseApiUrl.interceptor';

/* effects */
import { QuizEffects } from '@state/effects/quiz.effects';

/* app */
import { AppComponent } from './app.component';

/* pages */
import { QuizPageComponent } from '@pages/quiz-page/quiz-page.component';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { NotFoundPageComponent } from '@pages/not-found-page/not-found-page.component';

/* layouts */
import { LayoutsModule } from '@layouts/layouts.module';

/* components */
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { ScoreboardPageComponent } from './pages/scoreboard-page/scoreboard-page.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    QuizPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    QuizCardComponent,
    LoadingComponent,
    ErrorComponent,
    ConfirmationModalComponent,
    ScoreboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutsModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([QuizEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseApiUrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
