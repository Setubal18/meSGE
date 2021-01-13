import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      nomeEscola: new FormControl('', Validators.required),
      matricula: new FormControl('', Validators.required),
      nomeReitor: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      email: new FormControl(''),
      endereco: new FormGroup({
        rua: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        complemento: new FormControl(),
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
