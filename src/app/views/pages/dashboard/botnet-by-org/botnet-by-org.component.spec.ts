import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotnetByOrgComponent } from './botnet-by-org.component';

describe('BotnetByOrgComponent', () => {
  let component: BotnetByOrgComponent;
  let fixture: ComponentFixture<BotnetByOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotnetByOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotnetByOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
