import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { car, createCar } from '../interfaces/interface.component';

const AUTH_TOKEN = 'mock-token';

@Injectable({
  providedIn: 'root',
})
export class RestCallsService {
  AUTH_TOKEN = 'mock-token';
  constructor(private _http: HttpClient) {}

  getCars(): Observable<car[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`,
    });
    return this._http.get<car[]>('http://localhost:3000/cars', {
      headers: headers,
    });
  }

  getCar(id: string): Observable<car> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`,
    });
    return this._http.get<car>('http://localhost:3000/cars/' + id, {
      headers: headers,
    });
  }

  setCar(car: createCar): Observable<createCar> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`,
    });
    return this._http.post<createCar>('http://localhost:3000/cars/', car, {
      headers: headers,
    });
  }
}
