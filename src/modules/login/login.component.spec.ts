import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthModule } from '~core/auth/auth.module';
import { StateModule } from '~core/state/state.module';
import { StorageModule } from '~core/storage/storage.module';
import { environment } from '~env/environment';
import { SharedModule } from '~shared/shared.module';

import { LoginComponent } from './login.component';

describe('[Modules][Login] Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule,
        StateModule,
        AuthModule,
        StorageModule
      ],
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
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
