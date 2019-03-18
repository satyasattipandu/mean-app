import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = "http://localhost:5000/patients";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

 /*getPatients(): Observable<any> {
    // TODO: Make request to API to get patients
  }*/

  /*getPatient(id): Observable<any> {
    // TODO: Make request to API to get patient by id
  }*/

  /*addPatient(patient): Observable<any> {
    return this.http.post<any>(endpoint, JSON.stringify(patient), httpOptions).pipe(
      tap((patient) => console.log(`added patient w id ${patient.id}`)),
      catchError(this.handleError<any>('addPatient'))
    );
  }*/
/*
  updatePatient(id, patient): Observable<any> {
    // TODO: Make request to API to update patient by id
  }*/

  /*deletePatient(id): Observable<any> {
    // TODO: Make request to API to delete patient by id
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
