import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailDialogComponent } from './car-add-dialog.component';

describe('AddDialogComponent', () => {
  let component: CarDetailDialogComponent;
  let fixture: ComponentFixture<CarDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
