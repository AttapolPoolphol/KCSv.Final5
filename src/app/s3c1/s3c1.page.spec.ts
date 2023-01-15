import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S3c1Page } from './s3c1.page';

describe('S3c1Page', () => {
  let component: S3c1Page;
  let fixture: ComponentFixture<S3c1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3c1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S3c1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
