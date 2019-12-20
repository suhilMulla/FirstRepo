import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBonusComponent } from './emp-bonus.component';

describe('EmpBonusComponent', () => {
  let component: EmpBonusComponent;
  let fixture: ComponentFixture<EmpBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
