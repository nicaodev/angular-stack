import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

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
    return this.list.push(value);
  }
}
