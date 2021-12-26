import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MatTableModule} from "@angular/material/table";
import {CarModule} from "./car/car.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {AppRoutingModule} from "./app-routing.module";
import {MaintenanceModule} from "./maintenance/maintenance.module";
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {OwnerModule} from "./owner/owner.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CarModule,
    MaintenanceModule,
    OwnerModule,
    AuthModule.forRoot({
      domain: 'lively-sea-5096.eu.auth0.com',
      clientId: '9jgGDULrYxt97IB8Aj7gUt1bq7gO3Ueq',
      audience: 'https://takoya/login/car',
      scope: 'read:current_user read:cars write:cars read:maintenance write:maintenance read:owner write:owner',
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://takoya-car-back.herokuapp.com/*',
            tokenOptions: {
              audience: 'https://takoya/login/car',
              scope: 'read:cars,write:cars,read:maintenance,write:maintenance,read:owner,write:owner'
            }
          }
        ]
      }
    }),
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'legacy'}},
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true},
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
