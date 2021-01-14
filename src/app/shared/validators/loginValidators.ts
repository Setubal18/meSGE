import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import AdminRegex from '../utils/adminRegex';

@Injectable()
export class LoginValidators {
  constructor() {
  }

  static UserExist(abstControl: AbstractControl) {
    const user = abstControl.get('user');
    const matricula = abstControl.get('matricula');
    if (user.value) {
      setTimeout(() => {
        if (AdminRegex.test(user.value)) {
          matricula.clearValidators();
          matricula.disable();
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
