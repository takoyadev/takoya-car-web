import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaintenanceListComponent} from "./maintenance/list/maintenance-list.component";
import {HomeComponent} from "./core/home/home.component";
import {OwnerListComponent} from "./owner/list/owner-list.component";
import {CarGridComponent} from "./car/grid/car-grid.component";

const routes: Routes = [
  // { path: 'cars', component: CarListComponent },
  { path: 'cars', component: CarGridComponent },
  { path: 'maintenances', component: MaintenanceListComponent },
  { path: 'owners', component: OwnerListComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
