import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Users } from 'src/app/model/Users';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  // users: object[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  createUser(model: any) {
    return this.http.post(environment.baseAPI + 'register', model);
  }
}
