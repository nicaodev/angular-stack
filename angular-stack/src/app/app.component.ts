import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Mudando via app.component"></app-title>
  {{valor}}
  <button (click)="adicionar()">Add</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor() { }

  public valor: number = 1;

  public adicionar(): number {
    return this.valor += 1;
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
