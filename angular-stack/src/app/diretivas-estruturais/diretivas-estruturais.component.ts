import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})

export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public list: Array<{ nome: string }> = [{ nome: "Nicolas Alexandre" }, { nome: "Larissa" }];

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition)
        this.condition = false;
      else
        this.condition = true;
    }, 2000)
  }

}
