import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, user);
  }

  getAllUsers(): Observable<any[]> {

  const token = localStorage.getItem('token');

  return this.http.get<any[]>(
    `${this.baseUrl}/users`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

getAllProjects(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/projects`);
}

}