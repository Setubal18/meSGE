import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ApiResponseService } from 'src/app/shared/services/api-response.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { TurmaService } from '../../../shared/services/turma.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormIncrementalTurmasComponent } from 'src/app/shared/components/form-incremental-turmas/form-incremental-turmas.component';
import { ITurma } from '../../../shared/interfaces/turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss'],
})
export class TurmaComponent implements OnInit, OnDestroy {
  @ViewChild(FormIncrementalTurmasComponent) FormIncrementalTurmasComponent: FormIncrementalTurmasComponent;

  public codTurma: string;
  public routeSub: any;
  public turmaForm: FormGroup;
  public turmasForm = new FormControl([]);
  public turma: ITurma;
  constructor(
    private turmaService: TurmaService,
    private apiResponseService: ApiResponseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.routeSubscription();
  }

  ngOnInit() {
    this.snapshot();
    this.getTurma();
    this.initForm();
  }
  ngOnDestroy(): void {
    this.routeUnsubscribe();
  }

  initForm() {
    this.turmaForm = new FormGroup({
      maximo_alunos: new FormControl(this.turma?.maximo_alunos || ''),
      codTurma: new FormControl(this.turma?.codTurma || ''),
      responsavel: new FormControl(this.turma?.responsavel || ''),
      curso: new FormControl(this.turma?.curso || []),
    });
  }

  async getTurma() {
    this.turma = await this.turmaService.getTurma(this.codTurma);
    this.initForm();
  }

  snapshot() {
    this.codTurma = this.activatedRoute.snapshot.params?.codTurma || '';
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
    if (this.codTurma) {
      this.turmaService.updateTurma(this.turmaForm.value).then(res => {
        this.getTurma();
      });
    }
    else {
      this.turmaService.saveTurmas(this.turmasForm.value).then(res => {
        this.turmasForm.reset();
        this.FormIncrementalTurmasComponent.resetArray();
      }, (error) => {
        this.apiResponseService.danger(error);
      });
    }
  }


}
