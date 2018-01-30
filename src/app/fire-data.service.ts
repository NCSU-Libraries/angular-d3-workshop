import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { Fire } from './data.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FireDataService {
  private fireDataUrl = 'api/fires'; // URL to in-memory fires data

  constructor(private http: HttpClient) { }

  getData(): Observable<Fire[]> {
    return this.http.get<Fire[]>(this.fireDataUrl);
  }

  deleteFire(fire: Fire): Observable<Fire> {
    return this.http.delete<Fire>(`${this.fireDataUrl}/${fire.id}`, httpOptions);
  }
}
