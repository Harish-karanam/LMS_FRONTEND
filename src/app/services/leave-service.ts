import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {

  private leaveUrl = 'http://localhost:8080/api/leaves';
  private balanceUrl = 'http://localhost:8080/api/leave-balances';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  applyLeave(data: any) {
    return this.http.post(
      this.leaveUrl,
      data,
      this.getHeaders()
    );
  }

  getMyLeaves(userId: number) {
    return this.http.get(
      `${this.leaveUrl}/user/${userId}`,
      this.getHeaders()
    );
  }

  getLeaveBalance() {
  return this.http.get<any[]>(
    this.balanceUrl,
    this.getHeaders()
  );
}
getAllLeaveRequests() {
  return this.http.get<any[]>(
    this.leaveUrl,
    this.getHeaders()
  );
}

hrApproveLeave(leaveId: number) {
  return this.http.put(
    `${this.leaveUrl}/${leaveId}/hr-approve`,
    {},
    this.getHeaders()
  );
}

managerApproveLeave(id: number) {
  return this.http.put(
    `${this.leaveUrl}/${id}/manager-approve`,
    {},
    this.getHeaders()
  );
}
}