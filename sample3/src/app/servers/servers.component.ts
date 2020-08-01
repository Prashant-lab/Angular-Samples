import { Component, OnInit } from '@angular/core';
import {ServersService} from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private servers :{id:number,name:string,status:string}[] = [];

  constructor(private serversService:ServersService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
     this.servers = this.serversService.getServers();
  }

  onReloadPage(){
    //this.router.navigate(['servers'],{relativeTo: this.route});
    //above text will throw error
    //now navigate accepts relative path in accordance to the current route path.by default relative path is
    //root route path. i.e = localhost:4200.
  }

}
