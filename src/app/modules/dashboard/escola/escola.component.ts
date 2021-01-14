import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EscolaService } from '../../../shared/services/escola.service';
import { ApiResponseService } from '../../../shared/services/api-response.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormIncrementalTurmasComponent } from '../../../shared/components/form-incremental-turmas/form-incremental-turmas.component';
@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.scss'],
})
export class EscolaComponent implements OnInit, OnDestroy {
  @ViewChild(FormIncrementalTurmasComponent) FormIncrementalTurmasComponent: FormIncrementalTurmasComponent;
  public id;
  public escolaForm: FormGroup;
  private routeSub;
  constructor(
    private escolaService: EscolaService,
    private apiResponseService: ApiResponseService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.routeSubscription();
  }

  ngOnInit() {
    this.initform();
  }
  ngOnDestroy(): void {
    this.routeUnsubscribe();
  }

  snapshot() {
    this.id = this.activatedRoute.snapshot.params?.id || '';
  }

  initform() {
    this.escolaForm = new FormGroup({
      id: new FormControl(),
      nomeEscola: new FormControl('', Validators.required),
      matricula: new FormControl('', Validators.required),
      nomeReitor: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      email: new FormControl(''),
      endereco: new FormGroup({
        rua: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        complemento: new FormControl(),
      }),
      turmas: new FormControl({})
    });
  }

  routeSubscription() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.routeSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  routeUnsubscribe() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    this.routeSub.destroy();
  }

  save() {
    console.log(this.escolaForm.value);
    this.escolaService.saveEscola(this.escolaForm.value).then(res => {
      this.apiResponseService.success(res);
      if (this.id) {

      }
    }, (error) => {
      this.apiResponseService.danger(error);
    });
  }

}
