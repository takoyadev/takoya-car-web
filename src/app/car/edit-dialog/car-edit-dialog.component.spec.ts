import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditDialogComponent } from './car-add-dialog.component';

describe('AddDialogComponent', () => {
  let component: CarEditDialogComponent;
  let fixture: ComponentFixture<CarEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
