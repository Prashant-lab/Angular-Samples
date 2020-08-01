import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('f',{static: false}) signupForm: NgForm

  firstName = "";
  lastName = "";
  email = "";
  dob = "";

  users = [];
  

  constructor(private http:HttpClient){}

  ngOnInit(){
    //this.header.set('Content-Type', 'application/json; charset=utf-8')
    this.ftechPost();
  }


  // onSubmit(postData:{firstname:string,lastname:string,email:string,dob:string}){

  //   this.http.post('https://ng-complete-guide-1ff8c.firebaseio.com/posts.json', postData).subscribe( 
  //     responseData =>{
  //       console.log(responseData);
  //     }
  //   );
  //   console.log(postData);
  //   //this.signupForm.reset()
  // }

  getData(){
    this.ftechPost();
  }

  private ftechPost(){
    this.http.get('http://localhost:8080/home/getUser').subscribe(
      posts =>{
        console.log(posts);
        //this.users = posts;
        //console.log(this.users);

      }
    );
  }
}
