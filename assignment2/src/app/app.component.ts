import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'prashant';
 /* status = true;
  constructor(){
    if(this.userName)
    this.status = false;

  }
  updateStatus(){
    if(this.userName)
    this.status = false;
    else
    this.status = true;

  }*/

  clearUserName(){
    this.userName = '';
  }
}
