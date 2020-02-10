import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthFacade } from '~core/auth/auth.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private readonly authFacade: AuthFacade) {}

  ngOnInit() {
    this.authFacade.hydrate();
  }
}
