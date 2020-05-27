import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KpopPage } from './kpop.page';

describe('KpopPage', () => {
  let component: KpopPage;
  let fixture: ComponentFixture<KpopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KpopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
