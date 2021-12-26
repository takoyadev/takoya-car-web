import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Maintenance} from "../maintenance";

@Component({
  selector: 'app-maintenance-edit-dialog',
  templateUrl: './maintenance-edit-dialog.component.html',
  styleUrls: ['./maintenance-edit-dialog.component.scss'],
})
export class MaintenanceEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MaintenanceEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Maintenance,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
