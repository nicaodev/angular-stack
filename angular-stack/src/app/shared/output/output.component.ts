import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public lista: Array<{ nome: string, idade: number }> =
    [
      { nome: "Nicolas", idade: 28 },
      { nome: "Eduardo", idade: 32 },
      { nome: "Mariah", idade: 26 },
      { nome: "Dayane", idade: 26 }
    ]

  public getDados(event: number) {

    this.enviarDados.emit(this.lista[event]);
  }
}
