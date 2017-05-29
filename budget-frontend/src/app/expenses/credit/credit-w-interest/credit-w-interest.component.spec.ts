import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditWInterestComponent } from './credit-w-interest.component';

describe('CreditWInterestComponent', () => {
  let component: CreditWInterestComponent;
  let fixture: ComponentFixture<CreditWInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditWInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditWInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
