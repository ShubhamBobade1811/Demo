import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  names:string[] = ['shubham', 'aarav', 'shreya', 'vipra'];
  userChoice!:string;

  getColor(){
    return "{'color' : 'red'}"
  }
}
