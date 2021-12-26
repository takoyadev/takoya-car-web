import {Car} from "../car/car";

export class Maintenance {

  id?: Number;
  car?: Car;
  date?: Date;
  description?: String;
  title?: String;

  constructor(id?: Number, car?: Car, date?: Date, description?: String, title?: String) {
    this.id = id;
    this.car = car;
    this.date = date;
    this.description = description;
    this.title = title;
  }

}
