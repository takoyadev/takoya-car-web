import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "../app-routing.module";
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
  ],
  exports: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
  ]
})
export class CoreModule { }
