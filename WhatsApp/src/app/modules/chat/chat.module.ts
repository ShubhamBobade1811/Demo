import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AshaComponent } from './asha/asha.component';
import { MithileshComponent } from './mithilesh/mithilesh.component';
import { NayeemComponent } from './nayeem/nayeem.component';
import { NikhilComponent } from './nikhil/nikhil.component';
import { PratikComponent } from './pratik/pratik.component';




@NgModule({
  declarations: [
    AshaComponent,
    MithileshComponent,
    NayeemComponent,
    NikhilComponent,
    PratikComponent,

  ],
  imports: [
    CommonModule
  ],

  exports :[
    AshaComponent,
    MithileshComponent,
    NayeemComponent,
    NikhilComponent,
    PratikComponent
]
})
export class ChatModule { }
