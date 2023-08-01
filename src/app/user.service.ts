import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { environment } from 'src/app/envirorment/environment'; // Import the environment

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl; // Use the apiUrl from the environment

  constructor(private http: HttpClient) {}

  saveUser(user: User) {
    debugger
    return this.http.post(this.apiUrl+"User", user);
  }

  getUser() {
    debugger
    return this.http.get(this.apiUrl+"User");
  }
}
