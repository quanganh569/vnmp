import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTuanComponent } from './cb-tuan.component';

describe('CbTuanComponent', () => {
  let component: CbTuanComponent;
  let fixture: ComponentFixture<CbTuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbTuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbTuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
