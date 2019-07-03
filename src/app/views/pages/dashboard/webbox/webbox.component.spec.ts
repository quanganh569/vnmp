import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebboxComponent } from './webbox.component';

describe('WebboxComponent', () => {
  let component: WebboxComponent;
  let fixture: ComponentFixture<WebboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
