import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from './../../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [LayoutComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
