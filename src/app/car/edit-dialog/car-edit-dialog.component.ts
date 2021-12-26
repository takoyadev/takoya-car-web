import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Car} from "../car";

@Component({
  selector: 'app-car-edit-dialog',
  templateUrl: './car-edit-dialog.component.html',
  styleUrls: ['./car-edit-dialog.component.scss']
})
export class CarEditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CarEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
