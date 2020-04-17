import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
