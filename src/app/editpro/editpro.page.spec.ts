import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditproPage } from './editpro.page';

describe('EditproPage', () => {
  let component: EditproPage;
  let fixture: ComponentFixture<EditproPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
