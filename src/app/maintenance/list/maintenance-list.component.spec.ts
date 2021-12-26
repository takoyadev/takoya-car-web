import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceListComponent } from './maintenance-list.component';

describe('ListComponent', () => {
  let component: MaintenanceListComponent;
  let fixture: ComponentFixture<MaintenanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
