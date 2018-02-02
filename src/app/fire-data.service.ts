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
  //NOTE: An observable is an array of data that can change.
  getData(): Observable<Fire[]> {
    return this.http.get<Fire[]>(this.fireDataUrl);
  }

  //NOTE: This is the area of the application that we could put an update function (if we were using a 'live')

  //NOTE: This is another CRUD function, this allows the applciation to delete the selected line from the table when the 'remove' button is clicked.
  deleteFire(fire: Fire): Observable<Fire> {
    return this.http.delete<Fire>(`${this.fireDataUrl}/${fire.id}`, httpOptions);
  }
}
