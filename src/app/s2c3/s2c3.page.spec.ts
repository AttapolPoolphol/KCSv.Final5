import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S2c3Page } from './s2c3.page';

describe('S2c3Page', () => {
  let component: S2c3Page;
  let fixture: ComponentFixture<S2c3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2c3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S2c3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
