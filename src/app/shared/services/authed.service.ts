import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { IEscola } from '../interfaces/escola';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class AuthedService {
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
    this._user = JSON.parse(user.value) || [];
    this.user$.next(this._user);
    return this._user as unknown as IEscola;
  }


  clear() {
    Storage.remove({ key: 'user' });
    this.user$.next(undefined);
  }
}
