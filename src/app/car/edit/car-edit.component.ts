import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Car} from "../car";
import {Owner} from "../../owner/owner";
import {OwnerService} from "../../owner/owner.service";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent implements OnInit {

  owners: Owner[] = [];
  selectedOwners: Owner[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Car,
    private _ownerService: OwnerService,
  ) {}

  ngOnInit(): void {
    this._ownerService.findAll().subscribe(result => {
      this.owners = result;
      this.selectedOwners = this.owners;
    });
  }

  onKey(filter: string) {
    this.selectedOwners = this.search(filter);
  }

  search(filter: string) {
    return this.owners.filter(owner => owner?.firstName?.startsWith(filter) || owner?.lastName?.startsWith(filter));
  }

}
