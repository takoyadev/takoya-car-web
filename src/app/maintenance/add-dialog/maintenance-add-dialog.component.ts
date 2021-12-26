import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Maintenance} from "../maintenance";

@Component({
  selector: 'app-maintenance-add-dialog',
  templateUrl: './maintenance-add-dialog.component.html',
  styleUrls: ['./maintenance-add-dialog.component.scss'],
})
export class MaintenanceAddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MaintenanceAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Maintenance,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
