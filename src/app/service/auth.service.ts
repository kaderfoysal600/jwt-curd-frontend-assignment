import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/user';
  GetAll() {
    return this.http.get(this.apiUrl);
  }
  GetByCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code);
  }

  proceedRegistration(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata);
  }

  updateUser(code: any, inputdata: any) {
    return this.http.put(this.apiUrl, +'/' + code, inputdata);
  }
}
