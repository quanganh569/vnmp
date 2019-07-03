import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotnetByLocationComponent } from './botnet-by-location.component';

describe('BotnetByLocationComponent', () => {
  let component: BotnetByLocationComponent;
  let fixture: ComponentFixture<BotnetByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotnetByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotnetByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
