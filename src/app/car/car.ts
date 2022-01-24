import {Owner} from "../owner/owner";
import {Maintenance} from "../maintenance/maintenance";
import {Issue} from "../issue/issue";

export class Car {

  id?: Number;
  licensePlate?: String;
  brand?: String;
  model?: String;
  status?: String;
  owner?: Owner;
  maintenances?: Maintenance[];
  issues?: Issue[];
  picture?: String;

  constructor(id?: Number, licensePlate?: String, brand?: String, model?: String, status?: String, owner?: Owner) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.brand = brand;
    this.model = model;
    this.status = status;
    this.owner = owner;
  }

}
