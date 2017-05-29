import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsYearlyComponent } from './bills-yearly.component';

describe('BillsYearlyComponent', () => {
  let component: BillsYearlyComponent;
  let fixture: ComponentFixture<BillsYearlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsYearlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
