import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertasComponent } from '../components/alertas/alertas/alertas.component';
import {  ERR_CONECTION, ERR_SERVER, ERR_CLIENT, CODE_NO_CONECTION, CODE_ERR_SERVER,  CODE_ERR_CLIENT } from 'src/app/shared/var.const';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ResponseCodeInterceptor implements HttpInterceptor {

  constructor(public dialog: MatDialog) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === CODE_NO_CONECTION) {
          this.dialog.open(AlertasComponent, { data: ERR_CONECTION });
        }

        if (e.status === CODE_ERR_SERVER) {
          this.dialog.open(AlertasComponent, {
            data: `${ERR_SERVER}${e.error.mensaje}`
          });
        }

        if (e.status === CODE_ERR_CLIENT) {
          this.dialog.open(AlertasComponent, {
            data: `${ERR_CLIENT}${e.error.mensaje}`
          });
        }

        return throwError(e);
      })
    );
  }
}
