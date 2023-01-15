import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S2c2Page } from './s2c2.page';

describe('S2c2Page', () => {
  let component: S2c2Page;
  let fixture: ComponentFixture<S2c2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2c2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S2c2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
