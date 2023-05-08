import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getEmployee() {
    return this.http.get(`${this.baseUrl}/employee`);
  }

  getDetailEmployee(id: string) {
    return this.http.get(`${this.baseUrl}/employee/${id}`);
  }

  updateEmployee(body: {}) {
    return this.http.put(`${this.baseUrl}/employee`, body);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.baseUrl}/employee/${id}`);
  }

  insertEmployee(body: {}) {
    return this.http.post(`${this.baseUrl}/employee`, body);
  }
}
