import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '~modules/layout/layout.component';
import { LoggedInGuard } from '~shared/guards/logged-in.guard';
import { GuestOnlyGuard } from '~shared/guards/guest-only.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        canActivate: [GuestOnlyGuard],
        loadChildren: () =>
          import('~modules/login/login.module').then(
            (module) => module.LoginModule
          )
      },
      {
        path: 'not-authorized',
        loadChildren: () =>
          import('~modules/not-authorized/not-authorized.module').then(
            (module) => module.NotAuthorizedModule
          )
      },
      {
        path: '',
        component: LayoutComponent,
        canActivate: [LoggedInGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () =>
              import('~modules/home/home.module').then(
                (module) => module.HomeModule
              )
          }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
