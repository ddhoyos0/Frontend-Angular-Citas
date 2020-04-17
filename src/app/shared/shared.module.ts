import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlertasComponent } from './components/alertas/alertas/alertas.component';
import { ResponseCodeInterceptor } from './interceptor/interceptor';



@NgModule({
  declarations: [AlertasComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [AlertasComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ResponseCodeInterceptor, multi: true }
  ]
})
export class SharedModule { }
