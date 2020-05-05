import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://3i66fqamaa.execute-api.us-east-1.amazonaws.com/dev'

  getPhotos() {
    return this.http.get(`${this.apiUri}/photo`);
  }

  getPhotoById(id: string) {
    return this.http.put(`${this.apiUri}/singlephoto`, { value: id });
  }

  postPhoto(data: any) {
    return this.http.post(`${this.apiUri}/photo`, data);
  }
}
