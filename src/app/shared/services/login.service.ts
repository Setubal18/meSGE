import { Injectable } from '@angular/core';
import AdminRegex from '../utils/adminRegex';
import { EscolaService } from './escola.service';
import { AuthedService } from './authed.service';
import admin from '../utils/adminObject';
import { ApiResponseService } from './api-response.service';
interface ILogin {
  user: string;
  matricula?: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService extends EscolaService {

  constructor(private authedService: AuthedService, private apiResponseService: ApiResponseService) {
    super();
  }

  async login(body: ILogin) {
    const listaEscolas = await this.getEscolasList();
    if (AdminRegex.test(body.user)) {
      this.authedService.user = admin;
      return 200;
    }
    else {
      const result = listaEscolas.find(escola => {
        if ((escola.matricula === body.matricula) && (escola.nomeEscola === body.user || escola.nomeReitor === body.user)) {
          return escola;
        }
      });
      if (!result) {
        this.apiResponseService.danger({ error: 'Login Não Encontrado' });
        return 400;
      }
      else {
        console.log(result);
        this.authedService.user = result;
        return 200;
      }

    }
  }
}
