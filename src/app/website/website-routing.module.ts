import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'persona',
        loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule),
      },
      {
        path: 'empleado',
        loadChildren: () => import('./empleado/empleado.module').then(m => m.EmpleadoModule),
      },
      {
        path: 'servicio',
        loadChildren: () => import('./servicio/servicio.module').then(m => m.ServicioModule),
      },
      {
        path: 'cita',
        loadChildren: () => import('./cita/cita.module').then(m => m.CitaModule),
      },
      {
        path: 'venta',
        loadChildren: () => import('./venta/venta.module').then(m => m.VentaModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
