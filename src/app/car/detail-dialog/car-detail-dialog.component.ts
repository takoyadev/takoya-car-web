import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Car} from "../car";

@Component({
  selector: 'app-car-detail-dialog',
  templateUrl: './car-detail-dialog.component.html',
  styleUrls: ['./car-detail-dialog.component.scss']
})
export class CarDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CarDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
