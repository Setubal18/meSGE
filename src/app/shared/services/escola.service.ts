import { Injectable } from '@angular/core';
import { IEscola } from '../interfaces/escola';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  private escolas: IEscola[] = [];
  constructor() { }

  public async saveEscola(body: IEscola) {
    try {
      const escolas = await this.getEscolasList();
      if (!body.cod) {
        body.cod = Date.now();
      }
      escolas.push(body);
      Storage.set({
        key: 'escolas',
        value: JSON.stringify(escolas)
      });
      return { messagem: 'Sucesso ao Cadastrar' };
    } catch (error) {
      return { error };
    }

  }

  public async getEscolasList(): Promise<IEscola[]> {
    const escolaList = await Storage.get({ key: 'escolas' });
    return JSON.parse(escolaList.value) || [];
  }

}
