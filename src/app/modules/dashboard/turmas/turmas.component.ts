import { Component, OnDestroy, OnInit } from '@angular/core';
import { TurmaService } from '../../../shared/services/turma.service';
import { ITurma } from '../../../shared/interfaces/turma';
import { Router } from '@angular/router';
import { ApiResponseService } from 'src/app/shared/services/api-response.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss'],
})
export class TurmasComponent implements OnInit, OnDestroy {
  public turmas: ITurma[];
  constructor(
    private turmaService: TurmaService,
    private router: Router,
    private apiResponseService: ApiResponseService
  ) { }

  ngOnInit() {
    this.getTurmas();
  }

  ngOnDestroy(): void {
  }

  async getTurmas() {
    this.turmas = await this.turmaService.getTurmas();
  }

  NavToNewTurmas() {
    this.router.navigate(['turma', { relativeTo: Router }]);
  }

  async excluirTurma(codTurma: string) {
    try {
      await this.turmaService.excluirTurma(codTurma);
      await this.getTurmas();
    } catch (error) {
      this.apiResponseService.danger({ error });
    }

  }
}
