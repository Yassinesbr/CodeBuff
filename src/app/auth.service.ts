import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'http://localhost:5000/users';
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .get<any>(`${this.usersUrl}?userName=${username}&password=${password}`)
      .pipe(
        map((users) => {
          const user = users[0];
          if (user) {
            localStorage.setItem('isLoggedIn', 'true');
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
  }
}
