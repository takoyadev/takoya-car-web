import {Owner} from "../owner/owner";

export class Car {

  id?: Number;
  licensePlate?: String;
  brand?: String;
  model?: String;
  status?: String;
  owner?: Owner;

  constructor(id?: Number, licensePlate?: String, brand?: String, model?: String, status?: String, owner?: Owner) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.brand = brand;
    this.model = model;
    this.status = status;
    this.owner = owner;
  }

}
