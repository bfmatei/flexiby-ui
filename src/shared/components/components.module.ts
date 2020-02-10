import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessageComponent } from './message/message.component';

const components = [MessageComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: components
})
export class ComponentsModule {}
