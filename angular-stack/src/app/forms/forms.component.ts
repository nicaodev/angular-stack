import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {


  public submitForm(form: NgForm) {

    alert("enviado");
    console.log(form.value)

  }
}
