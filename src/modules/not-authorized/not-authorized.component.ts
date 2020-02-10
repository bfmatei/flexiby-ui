import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotAuthorizedComponent {}
