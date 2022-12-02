import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

// ng g m shared //Cria modulo compartilhado
// ng g c shared/novoComponente // cria componente compartilhado no modulo.

@NgModule({
  declarations: [
    NovoComponenteComponent,
    InputComponent,
    OutputComponent
  ],
  exports: [
    NovoComponenteComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
