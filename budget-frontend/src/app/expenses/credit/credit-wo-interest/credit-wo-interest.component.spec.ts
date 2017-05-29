import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditWoInterestComponent } from './credit-wo-interest.component';

describe('CreditWoInterestComponent', () => {
  let component: CreditWoInterestComponent;
  let fixture: ComponentFixture<CreditWoInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditWoInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditWoInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
