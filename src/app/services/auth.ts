import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/register`,
      user
    );
  }
  login(user: any): Observable<any> {
  return this.http.post(
    `${this.baseUrl}/login`,
    user
  );
}

}