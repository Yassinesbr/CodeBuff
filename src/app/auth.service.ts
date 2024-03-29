import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'http://localhost:5000/users';
  private user: any;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .get<any>(`${this.usersUrl}?userName=${username}&password=${password}`)
      .pipe(
        map((users) => {
          const user = users[0];
          if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.user = user;
            return true;
          }
          return false;
        })
      );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('currentUser');
    this.user = null;
  }

  getCurrentUser() {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    }
    return this.user;
  }
}
