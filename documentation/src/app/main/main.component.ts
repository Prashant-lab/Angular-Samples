import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public users = [];
  public user  =  { 
  };

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.users = this._usersService.getUsers();
  }

  getFullName(user){
    return user.firstname + " " + user.lastname;
  }

  getImage(user) {
	
    if(user.image){
      return user.image;
    }
    else{
      var z;
      
      if(user.gender=='M')
        z = '../../assets/images/download2.png';
      if(user.gender=='F')
        z = '../../assets/images/download.png';
    }	
    return z;
  }

  calAge(user) {

    if(!user.dob){
      return 'NA';
    }
  
    var d = new Date(user.dob);
    var td = d.getTime();
    
    var a = new Date();
    var ta = a.getTime();
      
      var ms = ta-td;
    
    var yr1=(((((ms/1000)/60)/60)/24)/365);
    var yr = Math.trunc(yr1)
  
      return yr;
    
  }

  popup(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  
    var choose = document.getElementById("choose");
    var file = document.getElementById("ig");
  
    choose.onclick = function(){
      file.click();
    }
  
    var cross = document.getElementById("close");
  
    cross.onclick = function(){
      modal.style.display = "none";
    }
  }

  getAlert(){
    document.getElementById("alert").innerHTML = "'Please choose an image'";
    var x = document.getElementById("alert");
    x.style.display = "block";
  }
  
  onscroll = function(){
    var x = document.getElementById("btn");
    x.style.position = "sticky";
    x.style.top = "0px";
  }
  
  onkeydown = function(e) {
      // ESCAPE key pressed
      if (e.keyCode == 27) {
          var modal = document.getElementById("myModal");
      modal.style.display = "none";
      }
  }
  

  
  clickCross(index){
          this.users.splice(index,1) ;
        
  }
  

}
