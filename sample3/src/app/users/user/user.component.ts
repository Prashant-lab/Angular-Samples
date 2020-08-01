import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit ,OnDestroy{

  user:{id:number,name:string};
  paramsSubscription: Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']//it is good for first initialization because instance of 
      //component created once by angular for the first time render. 
    }

    this.paramsSubscription = this.route.params
    .subscribe(
      (parms:Params) => {
        this.user.id = parms['id'];
        this.user.name = parms['name'];
      }
    );
    //it is fired whenever new data is passed by parms or whenever parameter changes.
  }

  ngOnDestroy(){
    //angular automaticaly unsubscribe this observable for us because it is a inbuilt observable 'params'.
    //It is good to know how to unsubscribe this observable.
    //if we create our own observable then we need to clean our observable or we can say we can do unsubscribe. 
    this.paramsSubscription.unsubscribe();
  }

}
