import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EscolaService } from '../../../shared/services/escola.service';
import { ApiResponseService } from '../../../shared/services/api-response.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormIncrementalTurmasComponent } from '../../../shared/components/form-incremental-turmas/form-incremental-turmas.component';
import { IEscola } from '../../../shared/interfaces/escola';
import { LoaderService } from 'src/app/shared/services/loader.service';
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
  public escola: IEscola;
  public loading = false;
  constructor(
    private escolaService: EscolaService,
    private apiResponseService: ApiResponseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loader: LoaderService


  ) {
    this.routeSubscription();
  }

  ngOnInit() {
    this.snapshot();
    this.getEscola();
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
      id: new FormControl(this.escola?.id || null),
      nomeEscola: new FormControl(this.escola?.nomeEscola || '', Validators.required),
      matricula: new FormControl(this.escola?.matricula || '', Validators.required),
      nomeReitor: new FormControl(this.escola?.nomeReitor || '', Validators.required),
      tel: new FormControl(this.escola?.tel || '', Validators.required),
      email: new FormControl(this.escola?.email || '', Validators.email),
      endereco: new FormGroup({
        rua: new FormControl(this.escola?.endereco?.rua || '', Validators.required),
        bairro: new FormControl(this.escola?.endereco?.bairro || '', Validators.required),
        numero: new FormControl(this.escola?.endereco?.numero || '', Validators.required),
        cidade: new FormControl(this.escola?.endereco?.cidade || 'Palmas', Validators.required),
        complemento: new FormControl(this.escola?.endereco?.complemento || null),
      }),
      turmas: new FormControl([])
    });
  }

  async getEscola() {
    this.loading = true;
    this.loader.showHideAutoLoader();
    this.escola = await this.escolaService.getEscola(this.id);
    this.initform();
    this.loading = false;

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
    this.escolaService.saveEscola(this.escolaForm.value).then(res => {
      this.apiResponseService.success(res);
      if (!this.id) {
        this.escolaForm.reset();
        this.FormIncrementalTurmasComponent.resetArray();
      }
    }, (error) => {
      this.apiResponseService.danger(error);
    });
  }

}
