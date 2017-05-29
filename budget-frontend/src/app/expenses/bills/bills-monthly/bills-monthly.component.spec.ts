import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsMonthlyComponent } from './bills-monthly.component';

describe('BillsMonthlyComponent', () => {
  let component: BillsMonthlyComponent;
  let fixture: ComponentFixture<BillsMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
