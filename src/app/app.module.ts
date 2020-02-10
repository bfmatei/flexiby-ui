import { NgModule } from '@angular/core';

import { CoreModule } from '~core/core.module';
import { LayoutModule } from '~modules/layout/layout.module';
import { SharedModule } from '~shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Shared module
    SharedModule,

    // Core modules
    CoreModule,

    // General modules
    AppRoutingModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
