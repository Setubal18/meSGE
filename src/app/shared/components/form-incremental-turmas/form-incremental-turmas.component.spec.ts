import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormIncrementalTurmasComponent } from './form-incremental-turmas.component';

describe('FormIncrementalTurmasComponent', () => {
  let component: FormIncrementalTurmasComponent;
  let fixture: ComponentFixture<FormIncrementalTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIncrementalTurmasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormIncrementalTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
