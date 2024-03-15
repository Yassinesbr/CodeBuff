import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymProgramService {
  private gymProgramUrl = 'http://localhost:5000/gymPrograms';
  constructor(private http: HttpClient) {}

  getGymPrograms(): Observable<any> {
    return this.http.get(this.gymProgramUrl);
  }
}
