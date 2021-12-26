import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Maintenance} from "../maintenance";
import {CarService} from "../../car/car.service";
import {Car} from "../../car/car";

@Component({
  selector: 'app-maintenance-edit',
  templateUrl: './maintenance-edit.component.html',
  styleUrls: ['./maintenance-edit.component.scss']
})
export class MaintenanceEditComponent implements OnInit {

  cars: Car[] = [];
  selectedCars: Car[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Maintenance,
    private _carService: CarService
  ) {}

  ngOnInit(): void {
    this._carService.findAll().subscribe(result => {
      this.cars = result;
      this.selectedCars = this.cars;
    });
  }

  onKey(filter: string) {
    this.selectedCars = this.search(filter);
  }

  search(filter: string) {
    return this.cars.filter(car => car?.licensePlate?.startsWith(filter));
  }

}
