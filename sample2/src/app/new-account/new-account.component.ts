import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LoggingService} from '../logging.service'
import { AccountService } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {

 // @Output() accountAdded = new EventEmitter<{name:string,status:string}>();

  constructor(private loggingService:LoggingService,
              private accountService:AccountService) {
                this.accountService.statusUpdated.subscribe(
                  (status:string)=>alert('new status: '+status)
                )
               }

  ngOnInit() {
  }

  onCreateAccount(accountName:string,accountStatus:string){
    //this.accountAdded.emit({name:accountName, status:accountStatus});
    //this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
    //  const service = new LoggingService();
    // service.logStatusChange(accountStatus); this works fine but this is not the way of using services.
    //we made a Instance of logging service but we can do it in better way that angular provide us. 
    //console.log('A server status changed , new status: ' + accountStatus);
  }

}
