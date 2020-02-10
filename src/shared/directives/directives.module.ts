import { NgModule } from '@angular/core';

// TODO: Remove type after adding a directive since it infers the type
const directives: any[] = [];

@NgModule({
  declarations: directives,
  exports: directives
})
export class DirectivesModule {}
