import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnerListComponent} from "./list/owner-list.component";

const routes: Routes = [
  { path: '', component: OwnerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
