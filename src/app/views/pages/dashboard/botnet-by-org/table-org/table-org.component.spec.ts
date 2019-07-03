import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrgComponent } from './table-org.component';

describe('TableOrgComponent', () => {
  let component: TableOrgComponent;
  let fixture: ComponentFixture<TableOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
