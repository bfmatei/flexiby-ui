import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { environment } from '~env/environment';

import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { PortalsModule } from './portals/portals.module';
import { StateModule } from './state/state.module';
import { StorageModule } from './storage/storage.module';
import { SubscriptionsManagerModule } from './subscriptions-manager/subscriptions-manager.module';

const modules = [
  StateModule,
  ApiModule,
  AuthModule,
  MessagesModule,
  PortalsModule,
  StorageModule,
  SubscriptionsManagerModule
];

const importsExports = [
  BrowserModule,
  NoopAnimationsModule,
  HttpClientModule,
  RouterModule,
  ...modules
];

@NgModule({
  providers: [
    {
      provide: 'ApiEndpoint',
      useValue: environment.apiEndpoint
    },
    {
      provide: 'AuthTokenValueKey',
      useValue: environment.authTokenValueKey
    },
    {
      provide: 'AuthTokenExpirationKey',
      useValue: environment.authTokenExpirationKey
    }
  ],
  imports: importsExports,
  exports: importsExports
})
export class CoreModule {}
