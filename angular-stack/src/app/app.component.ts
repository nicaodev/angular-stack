import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//
export class AppComponent implements
  OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor() { }

  public getDadosOutput: { nome: string, idade: number } | undefined;

  public addValor: number = 0;
  public valor: number = 1;
  public show: boolean = true;

  public adicionar(): number {
    return this.valor += 1;
  }
  public boolComponent(): void {
    this.show = !this.show;
    // Só para mostrar a ativação do ciclo de vida do componente.
  }
  ///////////////////////////////////////////////////
  ngOnInit(): void {
    console.log("Invocando: ngOnInit")
  }
  ngDoCheck(): void {
    //console.log("Invocando: ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("Invocando: ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    //console.log("Invocando: ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("Invocando: ngAfterViewInit")
  }
  /////////////////////////////////////////////////////


  public mudaValor() {
    this.addValor = Math.random();
  }

  public recebeDados(event: { nome: string, idade: number }) {
    this.getDadosOutput = event;
  }

}
