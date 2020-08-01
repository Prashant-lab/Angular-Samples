import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server:{id:number, name:string, status:string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversSservice:ServersService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    //or we can
    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit = queryParams['allowEdit'] === '1'? true : false;
      }
    );//this will give us access to any change in parameter after component is instantiated or rendered. 
    this.route.fragment.subscribe();//And unsubscribe done by angular itself
    this.server = this.serversSservice.getServer(1);
    this.serverName = this.server.name;
  }
  onUpdateServer(){
    this.serversSservice.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus});
  }

}
