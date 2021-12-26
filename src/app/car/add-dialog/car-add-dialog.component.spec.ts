import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddDialogComponent } from './car-add-dialog.component';

describe('AddDialogComponent', () => {
  let component: CarAddDialogComponent;
  let fixture: ComponentFixture<CarAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
