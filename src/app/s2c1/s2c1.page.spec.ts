import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S2c1Page } from './s2c1.page';

describe('S2c1Page', () => {
  let component: S2c1Page;
  let fixture: ComponentFixture<S2c1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2c1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S2c1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
