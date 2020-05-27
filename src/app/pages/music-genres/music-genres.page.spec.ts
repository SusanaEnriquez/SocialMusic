import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicGenresPage } from './music-genres.page';

describe('MusicGenresPage', () => {
  let component: MusicGenresPage;
  let fixture: ComponentFixture<MusicGenresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicGenresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicGenresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
