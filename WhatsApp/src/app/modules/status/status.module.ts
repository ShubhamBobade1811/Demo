import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdityaComponent } from './aditya/aditya.component';
import { AvinashComponent } from './avinash/avinash.component';
import { AnkitComponent } from './ankit/ankit.component';
import { AnkushComponent } from './ankush/ankush.component';
import { ShubhamComponent } from './shubham/shubham.component';



@NgModule({
  declarations: [
    AdityaComponent,
    AvinashComponent,
    AnkitComponent,
    AnkushComponent,
    ShubhamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatusModule { } 
