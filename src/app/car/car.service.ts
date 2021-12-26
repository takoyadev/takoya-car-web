import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "./car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://takoya-car-back.herokuapp.com/cars';
  }

  public findAll(): Observable<Car[]> {
    return this._http.get<Car[]>(this.url);
  }

  public save(item: Car) {
    return this._http.post<Car>(this.url, item);
  }

}
