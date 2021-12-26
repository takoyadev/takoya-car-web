import {RouterModule, Routes} from "@angular/router";
import {CarListComponent} from "./list/car-list.component";
import {NgModule} from "@angular/core";
import {CarEditComponent} from "./edit/car-edit.component";


const routes: Routes = [
  { path: 'list', component: CarListComponent },
  { path: 'edit', component: CarEditComponent },
  { path: '', component: CarListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {}
