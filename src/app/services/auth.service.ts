import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private token: string;
  // TODO: inject service hostname.
  constructor(private http: Http) {
    this.token = localStorage.getItem('token');
  }
  login(username: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:8080/login', JSON.stringify({email: username, password: password})).map((resp: Response) => {
      let respJson = resp.json();
      let token = respJson && respJson.token;
      if(token) {
        this.token = token;
        localStorage.setItem('token', this.token);
        return true;
      }
      return false;
    });
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
  }
}

// import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class AuthService {
//   constructor(private http: Http) {}

//   login(username: string, password: string): Observable<boolean> {
//     return this.http.post(`${environment.api}/login`, JSON.stringify({email: username, password: password})).map((resp: Response) => {
//       let respJson = resp.json();
//       let token = respJson && respJson.token;

//       if(token) {
//         localStorage.setItem('token', token);
//         return true;
//       }

//       return false;
//     });
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//   }
// }
