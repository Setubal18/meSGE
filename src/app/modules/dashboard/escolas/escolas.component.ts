import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscolaService } from '../../../shared/services/escola.service';
import { IEscola } from '../../../shared/interfaces/escola';
import { ApiResponseService } from '../../../shared/services/api-response.service';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss'],
})
export class EscolasComponent implements OnInit {
  public escolas: IEscola[];
  constructor(
    private escolaService: EscolaService,
    private router: Router,
    private apiResponseService: ApiResponseService
  ) { }

  ngOnInit() {
    this.getEscolas();
  }

  async getEscolas() {
    this.escolas = await this.escolaService.getEscolasList();
  }

  NavToNewSchool() {
    this.router.navigate(['escola', { relativeTo: Router }]);
  }

  async exluirEscola(id: string) {
    try {
      const { message } = await this.escolaService.excluirEscola(id);
      await this.getEscolas();
      this.apiResponseService.success({ message });
    } catch (error) {
      this.apiResponseService.danger({ error });
    }
  }


}
