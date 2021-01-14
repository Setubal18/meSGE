import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolasComponent } from './escolas.component';

describe('EscolasComponent', () => {
  let component: EscolasComponent;
  let fixture: ComponentFixture<EscolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
