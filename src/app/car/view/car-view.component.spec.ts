import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarViewComponent } from './car-edit.component';

describe('EditComponent', () => {
  let component: CarViewComponent;
  let fixture: ComponentFixture<CarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
