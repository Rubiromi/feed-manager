import { Injectable } from '@angular/core';
import { Http, Request, Response, ConnectionBackend, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpInterceptor extends Http {
  constructor(
    backend: ConnectionBackend, 
    defaultOptions: RequestOptions,
    private router: Router
  ) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.get(url, this.addHeaders(options)));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.post(url, body, this.addHeaders(options)));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, body, this.addHeaders(options)));
  }

  addHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    if(options == null) {
      options = new RequestOptions();
    }

    if(options.headers == null) {
      options.headers = new Headers();
    }

    options.headers.append('Content-Type', 'application/json');

    let token = localStorage.getItem('token');

    if(token) {
      options.headers.append('Authorization', 'Bearer ' + token);
    }

    return options;
  }

  intercept(o: Observable<Response>): Observable<Response> {
    return o.catch((err, source) => {
      if(err.status == 401) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return Observable.empty();
      }

      return Observable.throw(err);
    });
  }
}
