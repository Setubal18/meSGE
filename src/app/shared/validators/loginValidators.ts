import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Injectable()
export class LoginValidators {
  constructor() {
  }

  static UserExist(abstControl: AbstractControl) {
    const user = abstControl.get('user');
    const matricula = abstControl.get('matricula');
    const regex = RegExp('([A-a]+[D-n]+[M-m]+[I+i]+[N+n])');
    if (user.value) {
      setTimeout(() => {
        if (regex.test(user.value)) {
          matricula.clearValidators();
          matricula.disable();
          console.log(user);
        }
        else {
          matricula.enable();
          matricula.setValidators(Validators.required);
        }
      }, 500);
    }
    else {
      return null;
    }
    user.valueChanges.pipe();


  }




}
