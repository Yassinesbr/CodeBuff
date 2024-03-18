import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'http://localhost:5000/users';
  userUpdated = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  updateUser(user: any) {
    return this.http.put(`${this.usersUrl}/${user.id}`, user).pipe(
      tap(() => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userUpdated.emit('infos updated successfully');
      })
    );
  }
}
