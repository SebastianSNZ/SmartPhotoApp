import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://3i66fqamaa.execute-api.us-east-1.amazonaws.com/dev';

  loginUser(data: any) {
    return this.http.put(`${this.apiUri}/user`, data);
  }

  createUser(data: any) {
    return this.http.post(`${this.apiUri}/user`, data);
  }

}
