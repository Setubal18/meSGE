import { Injectable } from '@angular/core';
import { IEscola } from '../interfaces/escola';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  constructor() {
  }

  public async saveEscola(body: IEscola) {
    try {
      const escolas = await this.getEscolasList();
      if (!body.cod) {
        body.cod = Date.now().toString();
      }
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

  public async getEscola(cod: string) {
    try {
      const escolas = await this.getEscolasList();

      return escolas.find((escola: IEscola) => {
        return cod === escola.cod;
      });
    } catch (error) {
      return { error: 'Não Encontrado ou não existente' };
    }
  }


  set escolas(escolas: any) {
    Storage.set({
      key: 'escolas',
      value: JSON.stringify(escolas)
    });
  }

  public async excluirEscola(cod: string) {
    try {
      const escolas = await this.getEscolasList();
      this.escolas = escolas.filter((escola: IEscola) => {
        return cod !== escola.cod;
      });
      return { message: 'Sucesso ao Excluir' };
    } catch (error) {
      return { error };
    }
  }

}
