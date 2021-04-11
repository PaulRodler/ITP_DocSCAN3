import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private cookieService: CookieService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.cookieService.get('csrfToken'));
    console.log('in intercept => ' + this.getCookie('csrfToken'));
    req = req.clone({
      //withCredentials: true,
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('docScan_authToken')}`,
        'X-CSRF-Token': `${this.getCookie('csrfToken')}`,
      },
    });
    return next.handle(req);
  }

  getCookie(name: string): string {
    if (!document.cookie) {
      return null;
    }

    const xsrfCookies = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));

    if (xsrfCookies.length === 0) {
      return null;
    }
    return decodeURIComponent(xsrfCookies[0].split('=')[1]);
  }
}