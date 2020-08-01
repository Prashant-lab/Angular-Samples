import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];

  gameStarted(eventData:number){
    this.data.push(eventData);
  }

  //i did it little diffrent. i used *ngIf to check the data is even or odd.
  //or we can create two arrays of oddnumber and evennumber and fetch data from there.
}
