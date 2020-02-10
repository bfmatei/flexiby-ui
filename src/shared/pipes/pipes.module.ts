import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApplyFnPipe } from './apply-fn.pipe';

const pipes = [ApplyFnPipe];

@NgModule({
  declarations: pipes,
  imports: [CommonModule],
  exports: pipes
})
export class PipesModule {}
