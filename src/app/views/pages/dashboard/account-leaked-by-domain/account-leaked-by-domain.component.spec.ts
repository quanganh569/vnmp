import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLeakedByDomainComponent } from './account-leaked-by-domain.component';

describe('AccountLeakedByDomainComponent', () => {
  let component: AccountLeakedByDomainComponent;
  let fixture: ComponentFixture<AccountLeakedByDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLeakedByDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLeakedByDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
