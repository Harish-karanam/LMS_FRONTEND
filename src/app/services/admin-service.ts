import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl =
    'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  private getHeaders() {

    const token =
      localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  // USERS

  getAllUsers() {

    return this.http.get<any[]>(
      `${this.baseUrl}/users`,
      this.getHeaders()
    );
  }

  // PROJECTS

  getAllProjects() {

    return this.http.get<any[]>(
      `${this.baseUrl}/projects`,
      this.getHeaders()
    );
  }

  // DEPARTMENTS

  getAllDepartments() {

    return this.http.get<any[]>(
      `${this.baseUrl}/departments`,
      this.getHeaders()
    );
  }

  // ROLES

  getAllRoles() {

    return this.http.get<any[]>(
      `${this.baseUrl}/roles`,
      this.getHeaders()
    );
  }

  // NOTIFICATIONS
getAllNotifications() {
  return this.http.get<any[]>(
    `${this.baseUrl}/notifications`,
    this.getHeaders()
  );
}

  // AUDIT LOGS

  getAllAuditLogs() {

    return this.http.get<any[]>(
      `${this.baseUrl}/audit-logs`,
      this.getHeaders()
    );
  }
}