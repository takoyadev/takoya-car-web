import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Maintenance} from "../maintenance";

@Component({
  selector: 'app-maintenance-detail-dialog',
  templateUrl: './maintenance-detail-dialog.component.html',
  styleUrls: ['./maintenance-detail-dialog.component.scss'],
})
export class MaintenanceDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MaintenanceDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Maintenance,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
