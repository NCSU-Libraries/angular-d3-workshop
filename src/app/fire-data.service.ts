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
    return this.http.delete<Fire>(`${this.fireDataUrl}/${fire.id}`, httpOptions)
      .pipe(
        catchError(this.handleError<Fire>('deleteFire'))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return;
  };
}
}
