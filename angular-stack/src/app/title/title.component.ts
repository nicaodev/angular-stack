import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() public title: string = "Teste Input Title"

  ngOnChanges(): void {
    console.log("Ciclo de vida: ngOnChanges - TitleComponent")
    console.log("Foi alterado com sucesso via @Input()");
  }

  ngOnInit(): void {
    console.log("Ciclo de vida: ngOnInit - TitleComponent")
  }

}

