import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  constructor(private http: HttpClient) {}
  getSpecialization() {
    return this.http.get(`${environment.baseAPI}college/all`);
  }
  getSlider() {
    return this.http.get(`${environment.baseAPI}slider/all`);

  }
}
