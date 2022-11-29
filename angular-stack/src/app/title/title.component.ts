import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }

  @Input() public title: string = "Teste Input Title"

  ngOnChanges(): void {
    console.log("Ciclo de vida: ngOnChanges - TitleComponent.\nFoi alterado com sucesso via @Input()")
  }

  ngOnInit(): void {
    console.log("Ciclo de vida: ngOnInit - TitleComponent")
  }

  ngOnDestroy(): void {
    console.log("Ciclo de vida: ngOnDestroy\n Componente foi destruído.")
  }

}

