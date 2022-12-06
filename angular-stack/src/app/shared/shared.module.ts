import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { HttpClientModule } from '@angular/common/http';

// ng g m shared //Cria modulo compartilhado
// ng g c shared/novoComponente // cria componente compartilhado no modulo.

@NgModule({
  declarations: [
    NovoComponenteComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  exports: [
    NovoComponenteComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
