import { Injectable } from '@angular/core';
import { EscolaService } from './escola.service';
import { AuthedService } from './authed.service';
import { async } from '@angular/core/testing';
import { ITurma } from '../interfaces/turma';
import { ApiResponseService } from './api-response.service';

@Injectable({
  providedIn: 'root'
})
export class TurmaService extends EscolaService {

  constructor(private authedService: AuthedService, private apiresponseService: ApiResponseService) {
    super();
  }

  public async getTurmas() {
    const { turmas } = await this.authedService.loaduser();
    return turmas;
  }

  public async getTurma(codTurma: string) {
    const turmas = await this.getTurmas();

    const turma = turmas.find(turma => {
      if (codTurma === turma.codTurma) {
        return turma;
      }
    });
    if (!turma) {
      this.apiresponseService.danger({ message: 'Turma não encontrada' });
    }
    else {
      return turma;
    }
  }
  public async saveTurmas(body: ITurma[]) {
    try {
      // tslint:disable-next-line: prefer-const
      let escola = await this.authedService.loaduser();
      escola.turmas = escola.turmas.length ? escola.turmas.concat(body) : body;
      await this.saveEscola(escola);
      this.authedService.user = escola;
      this.apiresponseService.success({ message: 'Turma(s) criadas com sucesso' });
    } catch (error) {
      this.apiresponseService.danger({ message: 'Algo deu Errado' });
    }

  }
  public async updateTurma(body: ITurma) {
    try {
      const escola = await this.authedService.loaduser();
      escola.turmas = escola.turmas.filter(turma => {
        if (turma.codTurma !== body.codTurma) {
          return turma;
        }
      });
      escola.turmas.push(body);
      await this.saveEscola(escola);
      this.authedService.user = escola;
      this.apiresponseService.success({ message: 'Turma atualizada com sucesso' });
    } catch (error) {
      this.apiresponseService.danger({ error });
    }
  }
  public async excluirTurma(codTurma: string) {
    try {
      const escola = await this.authedService.loaduser();
      escola.turmas = escola.turmas.filter(turma => {
        if (turma.codTurma !== codTurma) {
          return turma;
        }
      });
      await this.saveEscola(escola);
      this.authedService.user = escola;
      this.apiresponseService.success({ message: 'Turma excluida com sucesso' });
    } catch (error) {
      this.apiresponseService.danger({ error });
    }
  }


}
