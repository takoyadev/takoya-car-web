import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Maintenance} from "./maintenance";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MaintenanceService {

  private readonly url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://takoya-car-back.herokuapp.com/maintenances';
  }

  public findAll(): Observable<Maintenance[]> {
    return this._http.get<Maintenance[]>(this.url);
  }

  public save(item: Maintenance) {
    return this._http.post<Maintenance>(this.url, item);
  }

}
