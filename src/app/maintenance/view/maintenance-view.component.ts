import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Maintenance} from "../maintenance";

@Component({
  selector: 'app-maintenance-view',
  templateUrl: './maintenance-view.component.html',
  styleUrls: ['./maintenance-view.component.scss']
})
export class MaintenanceViewComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Maintenance
  ) {}
}
