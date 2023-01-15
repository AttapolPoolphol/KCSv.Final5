import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S1c1Page } from './s1c1.page';

describe('S1c1Page', () => {
  let component: S1c1Page;
  let fixture: ComponentFixture<S1c1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1c1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S1c1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
