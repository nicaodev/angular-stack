import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';

// ng g m shared //Cria modulo compartilhado
// ng g c shared/novoComponente // cria componente compartilhado no modulo.

@NgModule({
  declarations: [
    NovoComponenteComponent
  ],
  exports:[NovoComponenteComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
