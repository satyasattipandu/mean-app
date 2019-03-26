import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Patient } from './../model/patient';

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
  baseUrl: string = 'http://localhost:5000';
  events: Patient[] = [];
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPatients(): Observable<any> {
    // TODO: Make request to API to get patients
    return this.http.get(`${this.baseUrl}/getAll`).pipe(
      map(response => <Patient[]>response),
      catchError(this.handleError));
  }

  getPatient(id): Observable<any> {
    // TODO: Make request to API to get patient by id
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      map(response => <Patient[]>response),
      catchError(this.handleError));
  }

  addPatient(patient): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, patient).pipe(
      map(response => <Patient[]>response),
      catchError(this.handleError));
  }

  updatePatient(id, patient): Observable<any> {
    // TODO: Make request to API to update patient by id
    return this.http.put(`${this.baseUrl}/update/${id}`, patient).pipe(
      map(response => <Patient[]>response),
      catchError(this.handleError));
  }

  deletePatient(id): Observable<any> {
    // TODO: Make request to API to delete patient by id
    return this.http.delete(`${this.baseUrl}/delete/${id}`).pipe(
      map(response => <Patient[]>response),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}
