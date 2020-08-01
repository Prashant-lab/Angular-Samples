import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import { CountService } from './count-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService,CountService]
})
export class AppComponent implements OnInit {
  // activeUsers:string[];
  // inactiveUsers :string[];

  constructor(private usersService : UsersService,
              private countService: CountService){}

  ngOnInit(){
    // this.activeUsers = this.usersService.activeUsers;
    // this.inactiveUsers = this.usersService.inactiveUsers;

  }

  // onSetToActive(id:number){
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id,1);
  // }

  // onSetToInactive(id:number){
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id,1);
  // }
}
