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
import { environment } from '../environments/environment';

/* reducers */
import { reducers, metaReducers } from './reducers';

/* interceptors */
import { BaseApiUrlInterceptor } from './interceptors/baseApiUrl.interceptor';

/* effects */
import { QuizEffects } from './effects/quiz.effects';

/* components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
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
