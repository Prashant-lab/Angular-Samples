import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewUser = false;
  serverCreationStatus = 'no server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['TestServer', 'Testserver2'];
  constructor() {
    setTimeout(() =>{
      this.allowNewUser = true;
    } , 3000)
   }

   serverCreation(){
     this.serverCreated = true;
     this.servers.push(this.serverName);
     return this.serverCreationStatus = 'server was created! Name is'+ this.serverName;
   }

   onUpdateServerName(event: Event){
     console.log(event);
     this.serverName = (<HTMLInputElement>event.target).value;
   }

  ngOnInit() {
  }

}
