import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir" title="Mudando via app.component"></app-title>
  <button (click)="adicionar()">Add</button>
  <br>
  {{valor}}
  <br>
  <br>
  <button (click)="destruirComponent()">Destruir Componente</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements
OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor() { }


  public valor: number = 1;
  public destruir: boolean = true;

  public adicionar(): number {
    return this.valor += 1;
  }
  public destruirComponent(): void {
    this.destruir = false;
  }

  ngOnInit(): void {
    console.log("Invocando: ngOnInit")
  }
  ngDoCheck(): void {
    console.log("Invocando: ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("Invocando: ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("Invocando: ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("Invocando: ngAfterViewInit")
  }


}
