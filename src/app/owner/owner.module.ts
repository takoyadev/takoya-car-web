import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './list/owner-list.component';
import {OwnerRoutingModule} from "./owner-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    OwnerListComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class OwnerModule { }
