import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AuthFacade } from '~core/auth/auth.facade';
import { SubscriptionsManagerService } from '~core/subscriptions-manager/subscriptions-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  private readonly usernameMinLength = 3;

  private readonly passwordMinLength = 3;

  usernameControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(this.usernameMinLength)
  ]);

  passwordControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(this.passwordMinLength)
  ]);

  form = this.fb.group({
    username: this.usernameControl,
    password: this.passwordControl
  });

  loggingIn$ = this.authFacade.loggingIn$;

  subscriptionsManager = this.subscriptionsManagerService.register(this);

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authFacade: AuthFacade,
    private readonly subscriptionsManagerService: SubscriptionsManagerService
  ) {}

  ngOnInit() {
    this.subscriptionsManager.add(
      this.authFacade.loggingIn$.subscribe((loggingIng) => {
        const formDisabled = this.form.disabled;

        if (!loggingIng && formDisabled) {
          this.form.enable();
        } else if (loggingIng && !formDisabled) {
          this.form.disable();
        }
      }),

      this.authFacade.loggedIn$
        .pipe(filter((loggedIn) => loggedIn))
        .subscribe(() => {
          this.router.navigate(['/']);
        })
    );
  }

  login() {
    this.authFacade.login(
      this.usernameControl.value,
      this.passwordControl.value
    );
  }
}
