import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './auth.effects';
import { AuthFacade } from './auth.facade';
import { AuthInterceptor } from './auth.interceptor';
import { reducer } from './auth.reducer';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthFacade,
    AuthService,
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {}
