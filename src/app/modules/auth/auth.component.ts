import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginValidators } from '../../shared/validators/loginValidators';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { ApiResponseService } from '../../shared/services/api-response.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      user: new FormControl('', Validators.required),
      matricula: new FormControl('', Validators.required)
    }, { validators: LoginValidators.UserExist });
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).then((res) => {
      console.log('aqui')
      if (res === 200) {
        this.router.navigate(['dashboard']);
      }
    });

  }
}
