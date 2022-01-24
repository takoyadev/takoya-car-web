import { Component, OnInit } from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";

@Component({
  selector: 'app-car-grid',
  templateUrl: './car-grid.component.html',
  styleUrls: ['./car-grid.component.scss']
})
export class CarGridComponent implements OnInit {

  cars: Car[] = [];

  constructor(private _carsService: CarService) { }

  ngOnInit(): void {
    this._carsService.findAll().subscribe(result => {
      this.cars = result;
    });
  }

}
