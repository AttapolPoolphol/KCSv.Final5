import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlipPage } from './slip.page';

describe('SlipPage', () => {
  let component: SlipPage;
  let fixture: ComponentFixture<SlipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
