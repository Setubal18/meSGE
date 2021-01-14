import { Injectable } from '@angular/core';
import { EscolaService } from './escola.service';
import { AuthedService } from './authed.service';

@Injectable({
  providedIn: 'root'
})
export class TurmaService extends EscolaService {

  constructor(private authedService: AuthedService) {
    super();
  }

  public async getTurmas() {
    const { turmas } = await this.authedService.loaduser();
    return turmas;
  }

  public async excluirTurma() {
    return { message: 'Sucesso ao Excluir' };
  }


}
