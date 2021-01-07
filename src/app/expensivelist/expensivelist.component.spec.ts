import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensivelistComponent } from './expensivelist.component';

describe('ExpensivelistComponent', () => {
  let component: ExpensivelistComponent;
  let fixture: ComponentFixture<ExpensivelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensivelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensivelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
