import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
//HTTP Post request to backend Api for login
  login(email: string, password: string): Observable<any> {
    return this.http.post(environment.AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

//HTTP Post request to backend Api for signup
  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(environment.AUTH_API + 'signup', {
      name,
      email,
      password
    }, httpOptions);
  }
}
