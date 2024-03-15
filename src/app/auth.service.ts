import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => localStorage.setItem('isLoggedIn', 'true'))
    );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
  }
}
