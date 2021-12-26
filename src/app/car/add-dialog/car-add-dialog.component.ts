import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Car} from "../car";

@Component({
  selector: 'app-car-add-dialog',
  templateUrl: './car-add-dialog.component.html',
  styleUrls: ['./car-add-dialog.component.scss']
})
export class CarAddDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CarAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
