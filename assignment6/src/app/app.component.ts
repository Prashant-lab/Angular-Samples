import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('f',{ static:false}) formref: NgForm;

  submit = false;

  user = {
    email : '',
    subscribe:'',
    pass:'',
  }
  
  

  onSubmit(){
    this.submit = true;
    this.user.email = this.formref.value.email;
    this.user.subscribe = this.formref.value.subscription;
    this.user.pass = this.formref.value.passward;
    // console.log(this.formref)
    // console.log(this.formref.value.email);
    // console.log(this.formref.value.subscription);
    // console.log(this.formref.value.passward);

  }
}
