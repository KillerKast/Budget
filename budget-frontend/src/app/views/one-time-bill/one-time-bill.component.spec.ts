import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBillsComponent } from './one-time-bill.component';

describe('MonthlyBillsComponent', () => {
  let component: MonthlyBillsComponent;
  let fixture: ComponentFixture<MonthlyBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
