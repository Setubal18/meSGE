import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EscolaService } from '../../../shared/services/escola.service';
import { ApiResponseService } from '../../../shared/services/api-response.service';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss'],
})
export class EscolaComponent implements OnInit {
  public escolaForm: FormGroup;

  constructor(
    private escolaService: EscolaService,
    private apiResponseService: ApiResponseService
  ) { }

  ngOnInit() {
    this.initform();
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
    });
  }

  save() {
    console.log(this.escolaForm.value);
    this.escolaService.saveEscola(this.escolaForm.value).then(res => {
      console.log(res);
      this.apiResponseService.success(res);
    }, (error) => {
      this.apiResponseService.danger(error);
    });
  }

}
