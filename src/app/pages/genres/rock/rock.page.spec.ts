import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RockPage } from './rock.page';

describe('RockPage', () => {
  let component: RockPage;
  let fixture: ComponentFixture<RockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
