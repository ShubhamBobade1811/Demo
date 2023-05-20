import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShubhamComponent } from './shubham/shubham.component';
import { ShreyaComponent } from './shreya/shreya.component';



@NgModule({
  declarations: [
    ShubhamComponent,
    ShreyaComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    ShubhamComponent,
    ShreyaComponent
  ]
})
export class CallsModule { }
