import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatagoryComponent } from './newcatagory.component';

describe('NewcatagoryComponent', () => {
  let component: NewcatagoryComponent;
  let fixture: ComponentFixture<NewcatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcatagoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
