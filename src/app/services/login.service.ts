import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string = 'http://localhost:5000';
  isAuthenticated: boolean = false;
  constructor(private http: HttpClient) { }

  // Sign in Method
  signIn(userDetails) {
    return this.http.post(`${this.baseUrl}/login`,userDetails).pipe(
      map(response => <any[]>response));
  }

   // Sign up  Method
   signUp(signupDetails) {
    return this.http.post(`${this.baseUrl}/signup`,signupDetails).pipe(
      map(response => <any[]>response));
  }

  public setAuthentication(value) {
    this.isAuthenticated = value;
  }
  public getAuthentication() {
		return this.isAuthenticated;
	}


}
