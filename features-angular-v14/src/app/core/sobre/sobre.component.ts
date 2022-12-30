import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { getRouteParams } from 'src/app/helpers/get-route-params';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // importando modulos direto no componente em uso.
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  public form = this.fb.group({
    email: ['abc@g.com'],
    senha: ['']
  })

  public rotaIdAtual = getRouteParams('id')

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    console.log(this.form.value);
    console.log('Rota ID', this.rotaIdAtual);
  }
}
