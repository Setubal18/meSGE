import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolaComponent } from './escola.component';

describe('EscolaComponent', () => {
  let component: EscolaComponent;
  let fixture: ComponentFixture<EscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
