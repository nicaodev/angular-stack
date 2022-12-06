import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  public emitEvent = new EventEmitter();
  //A partir que emitir um evento vamos nos increver nele e sempre que o evento fizer algo vamos estar lá "inscritos" esperando
  // Uma vez subscrito vai ficar até quando findar o retorno das informações.


  constructor() { }


  private list: Array<string> = [
    "X Bacon",
    "X Salada",
    "X Fitness",
    "Coca Cola 2L"
  ];

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    this.FoodListAlert(value);
    return this.list.push(value);
  }

  public FoodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}


