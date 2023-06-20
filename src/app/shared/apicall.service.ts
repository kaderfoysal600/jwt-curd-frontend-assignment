import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(public http: HttpClient) {}
  login(userData: any) {
    return this.http.post('http://localhost:3000/auth/login', userData);
  }

  register(userData: any) {
    return this.http.post('http://localhost:3000/auth/register', userData);
  }

  allUser() {
    return this.http.get('http://localhost:3000/auth/allUser');
  }

  updateUserById(id: string, data: any) {
    return this.http.put('http://localhost:3000/auth/update/' + id, data);
  }

  deleteUserById(id: string) {
    return this.http.delete('http://localhost:3000/auth/delete/' + id);
  }

  gotoDashBoard(token: string | null) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('http://localhost:3000/auth/dashboard', {
      headers: headers,
    });
  }
}
