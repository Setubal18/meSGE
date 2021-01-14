import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { IEscola } from '../interfaces/escola';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class AuthedService {
  private frontStorage: any;
  private _user: IEscola;
  public user$: Subject<IEscola> = new Subject();
  constructor() {
  }

  set user(user: IEscola) {
    this.user$.next(user);
    Storage.set({
      key: 'user',
      value: JSON.stringify(user)
    });
    this._user = user;
  }

  public async loaduser() {
    const user = await Storage.get({ key: 'user' });
    this.user = JSON.parse(user.value) || [];
    this._user = this.user;
    return user as unknown as IEscola;
  }



  clear() {
    sessionStorage.removeItem('user');
    this.user$.next(undefined);
  }
}
