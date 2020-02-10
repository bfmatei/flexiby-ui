import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { GuardsModule } from './guards/guards.module';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';

const modules = [
  ComponentsModule,
  DirectivesModule,
  GuardsModule,
  PipesModule,
  ServicesModule
];

const importsExports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  ...modules
];

@NgModule({
  imports: importsExports,
  exports: importsExports
})
export class SharedModule {}
