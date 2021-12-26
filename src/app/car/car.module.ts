import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarListComponent, CarSuccessAddSnack, CarSuccessEditSnack} from './list/car-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CarEditComponent} from './edit/car-edit.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {CarRoutingModule} from "./car-routing.module";
import {CarAddDialogComponent} from './add-dialog/car-add-dialog.component';
import {CarDetailDialogComponent} from "./detail-dialog/car-detail-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarViewComponent} from "./view/car-view.component";
import {CarEditDialogComponent} from "./edit-dialog/car-edit-dialog.component";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    CarListComponent,
    CarEditComponent,
    CarViewComponent,
    CarAddDialogComponent,
    CarDetailDialogComponent,
    CarEditDialogComponent,
    CarSuccessAddSnack,
    CarSuccessEditSnack,
  ],
  exports: [
    CarListComponent,
    CarDetailDialogComponent,
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
    CarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CarModule { }
