import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topics  = ['angular','react','vue'];
  public userModel = new User('Rob','gugulmaurya08@gmail.com',73824823,'','morning',true);
}
