import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _service: DataService, private _route: Router) { }

  Auth: any = false;
  user: any = false;

  setUser(user:any) {
    this.user = user
    localStorage.setItem("admin", JSON.stringify(user));
  }

  getUser() {
    this.user = localStorage.getItem('admin');
    return (this.user) ? JSON.parse(this.user) : false;
  }

  _isLoggedin() {
    return this._service.__post(`/checkAuth`, {})
  }

  setToken(token: string) {
    localStorage.setItem('X-Authentication-token', token);
  }

  getToken() {
    return localStorage.getItem('X-Authentication-token');

  }

  isAuth() {
  return (this.getToken() ? true : false);
  }

  logout() {
    localStorage.clear();
    this.user = false
    this._route.navigateByUrl('/login');
  }

}
