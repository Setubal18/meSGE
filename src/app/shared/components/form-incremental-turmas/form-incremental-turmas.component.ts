import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import cursos from '../../utils/cursos';
@Component({
  selector: 'form-incremental-turmas',
  templateUrl: './form-incremental-turmas.component.html',
  styleUrls: ['./form-incremental-turmas.component.scss'],
})
export class FormIncrementalTurmasComponent implements OnInit {
  public turmasForm: FormGroup;
  @Output() eventSendTurmas: EventEmitter<any> = new EventEmitter<any>();
  @Input() receiveTurmas = [];
  public cursos = cursos;
  constructor() { }

  ngOnInit() {
    this.initForm();
    this.persistirForm();
  }

  initForm() {
    this.turmasForm = new FormGroup({
      turmas: new FormArray([this.turmaForm])
    });
  }

  get turmaForm() {
    return new FormGroup({
      maximo_alunos: new FormControl(''),
      codTurma: new FormControl(''),
      responsavel: new FormControl(''),
      curso: new FormControl([]),
    });
  }

  get listaTurmas() {
    return this.turmasForm.controls.turmas as FormArray;
  }

  persistirForm() {
    if (this.receiveTurmas && this.receiveTurmas.length !== 0) {
      this.listaTurmas.removeAt(0);
      this.receiveTurmas.forEach(type => {
        const formReste = new FormGroup({
          maximo_alunos: new FormControl(),
          codTurma: new FormControl(),
          responsavel: new FormControl(),
          curso: new FormControl(),
        });
        formReste.setValue(type);
        this.listaTurmas.push(formReste);
      });
    }
    else {
      this.turmasForm.reset();
      this.listaTurmas.reset();
    }
  }

  addTurma() {
    this.listaTurmas.push(this.turmaForm);
  }

  removeTurma(index: number) {
    this.listaTurmas.removeAt(index);
    this.eventSendTurmas.emit(this.listaTurmas.value);
  }

  resetArray() {
    let i = 0;
    while (this.listaTurmas.length !== 0) {
      this.listaTurmas.removeAt(i);
      i++;
    }
    this.addTurma();
  }

  sendTurmas() {
    console.log(this.listaTurmas.value);
    this.eventSendTurmas.emit(this.listaTurmas.value);
  }




}
