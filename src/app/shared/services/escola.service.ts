import { Injectable } from '@angular/core';
import { IEscola } from '../interfaces/escola';
import { Plugins } from '@capacitor/core';
import { ApiResponseService } from './api-response.service';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  constructor() {
  }

  public async saveEscola(body: IEscola) {
    try {
      if (!body.id) {
        body.id = Date.now().toString();
      }
      if (body.id) {
        await this.excluirEscola(body.id);
      }
      const escolas = await this.getEscolasList();
      escolas.push(body);
      Storage.set({
        key: 'escolas',
        value: JSON.stringify(escolas)
      });
      return { message: 'Sucesso ao Cadastrar' };
    } catch (error) {
      return { error };
    }

  }

  public async getEscolasList(): Promise<IEscola[]> {
    const escolaList = await Storage.get({ key: 'escolas' });
    return JSON.parse(escolaList.value) || [];
  }

  public async getEscola(id: string) {
    try {
      const escolas = await this.getEscolasList();
      const escola = escolas.find((escola: IEscola) => {
        if (id === escola.id) {
          return escola;
        }
      });
      return escola;
    } catch (error) {
      console.log(error)
    }
  }


  set escolas(escolas: any) {
    Storage.set({
      key: 'escolas',
      value: JSON.stringify(escolas)
    });
  }

  public async excluirEscola(id: string) {
    try {
      const escolas = await this.getEscolasList();
      this.escolas = escolas.filter((escola: IEscola) => {
        return id !== escola.id;
      });
      return { message: 'Sucesso ao Excluir' };
    } catch (error) {
      return { error };
    }
  }

}
