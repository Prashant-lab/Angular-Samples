import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UsersService} from '../users.service';
import { CountService } from '../count-service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

 // @Input() users : string[];
 //@Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService:UsersService,
              private countService: CountService) { }

  ngOnInit() {
  }

  onSetToInactive(id:number){
    //this.userSetToInactive.emit(id);
    this.usersService.onSetToInactive(id);
    this.countService.activeToInactiveCount++;
  }

}
