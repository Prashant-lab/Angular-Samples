import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { CountService } from '../count-service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  //@Input() users : string[];
 // @Output() userSetToActive = new EventEmitter<number>();
  
  constructor(private usersService: UsersService,
              private countService: CountService) { }

  ngOnInit() {
  }

  onSetToActive(id:number){
   // this.userSetToActive.emit(id);
   this.usersService.onSetToActive(id);
   this.countService.inactiveToActiveCount++;
  }

}
