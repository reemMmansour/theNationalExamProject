import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Users } from 'src/app/model/Users';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  // create User (register)
  createUser(model: any): Observable<any> {
    return this.http.post(`${environment.baseAPI}register`, model);
  }
  // LogIn User
  loginUser(model: any): Observable<any> {
    return this.http.post(`${environment.baseAPI}login`, model);
  }
  //auth/login
  //get all specislization
  getSpecialization() {
    return this.http.get(
      `${environment.baseAPI}college/all`
    );
  }
}
