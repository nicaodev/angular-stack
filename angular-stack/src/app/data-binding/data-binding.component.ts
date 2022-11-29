import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  constructor() { }

  public nome: string = 'Nicolas';
  public checkedDisabled: boolean = false;

  public alerta(evento: MouseEvent) {
    console.log(evento);
  }

}
