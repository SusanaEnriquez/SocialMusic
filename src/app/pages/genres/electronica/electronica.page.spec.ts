import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectronicaPage } from './electronica.page';

describe('ElectronicaPage', () => {
  let component: ElectronicaPage;
  let fixture: ComponentFixture<ElectronicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectronicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
