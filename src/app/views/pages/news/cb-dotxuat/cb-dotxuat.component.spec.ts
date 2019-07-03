import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbDotxuatComponent } from './cb-dotxuat.component';

describe('CbDotxuatComponent', () => {
  let component: CbDotxuatComponent;
  let fixture: ComponentFixture<CbDotxuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbDotxuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbDotxuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
