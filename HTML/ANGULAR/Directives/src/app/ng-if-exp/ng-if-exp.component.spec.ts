import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfExpComponent } from './ng-if-exp.component';

describe('NgIfExpComponent', () => {
  let component: NgIfExpComponent;
  let fixture: ComponentFixture<NgIfExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
