import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Fire } from './fire-data.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FireDataService {
  private fireDataUrl = 'api/fires'; // URL to in-memory fires data

  constructor(private http: HttpClient) { }
  // Observable: an array of data that can change
  getData(): Observable<Fire[]> {
    return this.http.get<Fire[]>(this.fireDataUrl);
  }
  // If we were retrieving data from a 'live' API that we wanted to update - we would have an update function here

  // CRUD - like delete
  deleteFire(fire: Fire): Observable<Fire> {
    return this.http.delete<Fire>(`${this.fireDataUrl}/${fire.id}`, httpOptions);
  }
}
