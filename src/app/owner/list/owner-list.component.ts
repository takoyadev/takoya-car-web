import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../owner.service";
import {Owner} from "../owner";

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  displayedColumns: string[] = ['lastName', 'firstName'];
  dataSource: Owner[] = [];

  constructor(private _ownerService: OwnerService) { }

  ngOnInit(): void {
    this._ownerService.findAll().subscribe(result => {
      console.log(result);
      this.dataSource = result;
    });
  }

}
