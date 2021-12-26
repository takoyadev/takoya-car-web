import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MaintenanceAddDialogComponent} from "../add-dialog/maintenance-add-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MaintenanceDetailDialogComponent} from "../detail-dialog/maintenance-detail-dialog.component";
import {MaintenanceEditDialogComponent} from "../edit-dialog/maintenance-edit-dialog.component";
import {Maintenance} from "../maintenance";
import {MaintenanceService} from "../maintenance.service";
import {Car} from "../../car/car";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {

  displayedColumns: string[] = ['date', 'title', 'car', 'owner'];
  dataSource = new MatTableDataSource<Car>();
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public _dialog: MatDialog, private _snackBar: MatSnackBar, private _maintenanceService: MaintenanceService) {}

  ngOnInit(): void {
    this._maintenanceService.findAll().subscribe(data => {
        this.dataSource.data = data;
        // this.dataSource.paginator = this.paginator;
      });
  }

  openAddDialog(): void {
    const maintenance: Maintenance = {};
    const dialogRef = this._dialog.open(MaintenanceAddDialogComponent, {
      width: '600px',
      data: maintenance,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.createMaintenance(result);
      }
    });
  }

  openDetailDialog(maintenance:Maintenance): void {
    const dialogRef = this._dialog.open(MaintenanceDetailDialogComponent, {
      width: '600px',
      data: maintenance,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.openEditDialog(result);
      }
    });
  }

  openEditDialog(maintenance:Maintenance): void {
    const dialogRef = this._dialog.open(MaintenanceEditDialogComponent, {
      width: '600px',
      data: maintenance,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.updateMaintenance(result);
      } else {
        this.openDetailDialog(maintenance);
      }
    })
  }

  createMaintenance(maintenance:Maintenance) {
    this._maintenanceService.save(maintenance).subscribe(result => {
      this._snackBar.openFromComponent(MaintenanceSuccessAddSnack, {
        duration: 5000,
      })
      this.dataSource.data.push(result);
    });
  }

  updateMaintenance(maintenance:Maintenance) {
    this._maintenanceService.save(maintenance).subscribe(result => {
      this._snackBar.openFromComponent(MaintenanceSuccessEditSnack, {
        duration: 5000,
      })
    });
  }

}

@Component({
  selector: 'app-maintenance-success-add-snack',
  template: '<span class="app-maintenance-success-add-snack">Maintenance created with success! <mat-icon color="green">check</mat-icon></span>',
})
export class MaintenanceSuccessAddSnack {}

@Component({
  selector: 'app-maintenance-success-edit-snack',
  template: '<span class="app-maintenance-success-edit-snack">Maintenance updated with success! <mat-icon color="green">check</mat-icon></span>',
})
export class MaintenanceSuccessEditSnack {}
