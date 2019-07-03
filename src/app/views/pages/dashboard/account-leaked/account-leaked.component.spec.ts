import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLeakedComponent } from './account-leaked.component';

describe('AccountLeakedComponent', () => {
  let component: AccountLeakedComponent;
  let fixture: ComponentFixture<AccountLeakedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLeakedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLeakedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
