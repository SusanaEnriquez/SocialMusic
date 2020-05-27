import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BandaPage } from './banda.page';

describe('BandaPage', () => {
  let component: BandaPage;
  let fixture: ComponentFixture<BandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
