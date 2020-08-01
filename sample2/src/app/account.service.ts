import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class AccountService{
    accounts = [
        {
          name:'master Account',
          status:'active'
        },
        {
          name:'Test Account',
          status:'active'
        },
        {
          name:'Hidden Account',
          status:'active'
        }
      ];

constructor(private loggingService:LoggingService){}

statusUpdated = new EventEmitter<string>();

addAccount(name:string,status:string){
    this.accounts.push({name:name, status:status});
    this.loggingService.logStatusChange(status)
}
updateStatus(id:number, newStatus:string){
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
}

}