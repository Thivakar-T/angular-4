import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatagorylistComponent } from './newcatagorylist.component';

describe('NewcatagorylistComponent', () => {
  let component: NewcatagorylistComponent;
  let fixture: ComponentFixture<NewcatagorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcatagorylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatagorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
