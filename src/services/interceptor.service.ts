import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {


    return next.handle(request).pipe(
      
    );
  }
}
