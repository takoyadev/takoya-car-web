import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CarAddDialogComponent} from "../add-dialog/car-add-dialog.component";
import {CarDetailDialogComponent} from "../detail-dialog/car-detail-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CarEditDialogComponent} from "../edit-dialog/car-edit-dialog.component";
import {CarService} from "../car.service";
import {Car} from "../car";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  displayedColumns: string[] = ['licensePlate', 'owner', 'brand', 'model', 'status'];
  dataSource: Car[] = [];

  constructor(public _dialog: MatDialog, private _snackBar: MatSnackBar, private _carsService: CarService) {}

  ngOnInit(): void {
        this._carsService.findAll().subscribe(result => {
            this.dataSource = result;
        });
    }

  openAddDialog(): void {
    const car: Car = {};
    const dialogRef = this._dialog.open(CarAddDialogComponent, {
      width: '600px',
      data: car,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.createCar(result);
      }
    });
  }

  openDetailDialog(car:Car): void {
    const dialogRef = this._dialog.open(CarDetailDialogComponent, {
      width: '600px',
      data: car,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.openEditDialog(result);
      }
    });
  }

  openEditDialog(car:Car): void {
    const dialogRef = this._dialog.open(CarEditDialogComponent, {
      width: '600px',
      data: car,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.updateCar(result);
      } else {
        this.openDetailDialog(car);
      }
    })
  }

  createCar(car:Car): void {
    this._carsService.save(car).subscribe(result => {
      if (result != undefined) {
        this._snackBar.openFromComponent(CarSuccessAddSnack, {
          duration: 5000,
        });
        this.dataSource.push(result);
      }
    });
  }

  updateCar(car:Car): void {
    this._carsService.save(car).subscribe(result => {
      if (result != undefined) {
        this._snackBar.openFromComponent(CarSuccessEditSnack, {
          duration: 5000,
        });
      }
    })
  }

}

@Component({
  selector: 'app-car-success-add-snack',
  template: '<span class="app-car-success-add-snack">Car created with success! <mat-icon color="green">check</mat-icon></span>',
})
export class CarSuccessAddSnack {}

@Component({
  selector: 'app-car-success-edit-snack',
  template: '<span class="app-car-success-edit-snack">Car updated with success! <mat-icon color="green">check</mat-icon></span>',
})
export class CarSuccessEditSnack {}
