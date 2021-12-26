import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Owner} from "./owner";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private readonly url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://takoya-car-back.herokuapp.com/owners';
  }

  public findAll(): Observable<Owner[]> {
    return this._http.get<Owner[]>(this.url);
  }

  public save(item: Owner) {
    return this._http.post<Owner>(this.url, item);
  }

}
