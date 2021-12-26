import {RouterModule, Routes} from "@angular/router";
import {MaintenanceListComponent} from "./list/maintenance-list.component";
import {NgModule} from "@angular/core";
import {MaintenanceEditComponent} from "./edit/maintenance-edit.component";


const routes: Routes = [
  { path: 'list', component: MaintenanceListComponent },
  { path: 'edit', component: MaintenanceEditComponent },
  { path: '', component: MaintenanceListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule {}
