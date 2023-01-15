import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S3c2Page } from './s3c2.page';

describe('S3c2Page', () => {
  let component: S3c2Page;
  let fixture: ComponentFixture<S3c2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3c2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S3c2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
