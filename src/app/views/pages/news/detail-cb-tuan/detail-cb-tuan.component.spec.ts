import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCbTuanComponent } from './detail-cb-tuan.component';

describe('DetailCbTuanComponent', () => {
  let component: DetailCbTuanComponent;
  let fixture: ComponentFixture<DetailCbTuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCbTuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCbTuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
