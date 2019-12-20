import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchExpComponent } from './ng-switch-exp.component';

describe('NgSwitchExpComponent', () => {
  let component: NgSwitchExpComponent;
  let fixture: ComponentFixture<NgSwitchExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
