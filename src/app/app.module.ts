/* angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

/* ngrx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

/* enviroment */
import { environment } from '@environments/environment';

/* reducers */
import { reducers, metaReducers } from '@state/reducers';

/* interceptors */
import { BaseApiUrlInterceptor } from '@interceptors/baseApiUrl.interceptor';

/* effects */
import { QuizEffects } from '@state/effects/quiz.effects';

/* app */
import { AppComponent } from './app.component';

/* layouts */
import { HeaderComponent } from '@layouts/header/header.component';

/* components */
import { NavigationComponent } from '@components/navigation/navigation.component';

/* pipes */
import { NavigationClassesPipe } from '@components/navigation/navigation-classes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationClassesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([QuizEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseApiUrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
