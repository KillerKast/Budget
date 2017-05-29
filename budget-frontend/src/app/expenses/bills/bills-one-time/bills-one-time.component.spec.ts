import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsOneTimeComponent } from './bills-one-time.component';

describe('BillsOneTimeComponent', () => {
  let component: BillsOneTimeComponent;
  let fixture: ComponentFixture<BillsOneTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsOneTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsOneTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
