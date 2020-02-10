import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotAuthorizedComponent } from './not-authorized.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NotAuthorizedComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotAuthorizedRoutingModule {}
