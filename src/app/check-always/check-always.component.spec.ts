import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAlwaysComponent } from './check-always.component';

describe('CheckAlwaysComponent', () => {
  let component: CheckAlwaysComponent;
  let fixture: ComponentFixture<CheckAlwaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAlwaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAlwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
