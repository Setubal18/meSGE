import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss'],
})
export class EscolaComponent implements OnInit {
  public escolaForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.initform()
  }


  initform() {
    this.escolaForm = new FormGroup({
      cod: new FormControl(),
      nomeEscola: new FormControl(),
      matricula: new FormControl(),
      nomeReitor: new FormControl(),
      tel: new FormControl(),
      email: new FormControl(),
      endereco: new FormGroup({
        rua: new FormControl(),
        bairro: new FormControl(),
        numero: new FormControl(),
        alameda: new FormControl(),
      }),
      turmas: new FormControl({})
    })
  }


  save() {
    console.log(this.escolaForm.value)
  }

}
