import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaintenanceListComponent, MaintenanceSuccessAddSnack, MaintenanceSuccessEditSnack} from './list/maintenance-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MaintenanceAddDialogComponent} from "./add-dialog/maintenance-add-dialog.component";
import {MaintenanceEditComponent} from "./edit/maintenance-edit.component";
import {MaintenanceRoutingModule} from "./maintenance-routing.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaintenanceDetailDialogComponent} from "./detail-dialog/maintenance-detail-dialog.component";
import {MaintenanceViewComponent} from "./view/maintenance-view.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MaintenanceEditDialogComponent} from "./edit-dialog/maintenance-edit-dialog.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "@auth0/auth0-angular";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    MaintenanceListComponent,
    MaintenanceEditComponent,
    MaintenanceViewComponent,
    MaintenanceAddDialogComponent,
    MaintenanceDetailDialogComponent,
    MaintenanceEditDialogComponent,
    MaintenanceSuccessAddSnack,
    MaintenanceSuccessEditSnack,
  ],
  exports: [
    MaintenanceListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MaintenanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatPaginatorModule,
  ],
})
export class MaintenanceModule { }
