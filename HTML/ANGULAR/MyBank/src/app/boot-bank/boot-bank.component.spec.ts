import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootBAnkComponent } from './boot-bank.component';

describe('BootBAnkComponent', () => {
  let component: BootBAnkComponent;
  let fixture: ComponentFixture<BootBAnkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootBAnkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootBAnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
