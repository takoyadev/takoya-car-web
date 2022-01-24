import {Car} from "../car/car";
import {Maintenance} from "../maintenance/maintenance";

export class Issue {

  id?: Number;
  date?: Date;
  title?: String;
  description?: String;
  status?: String;
  car?: Car;
  maintenances?: Maintenance[];

}
