import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static:false}) formRef : NgForm;
  defaultValue = 'teacher';
  answer = '';
  genders = ['male','female'];

  submit = false;

  user = {
    username:'',
    email:'',
    secretAnswer:'',
    question:'',
    gender:'',
  }
  suggestUserName(){
    const suggestedName = 'superUser';
    // this.formRef.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })

    this.formRef.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    //console.log(this.formRef) //we can refer to our object which is created by angular .
    this.submit = true; 
    this.user.username = this.formRef.value.userData.username;
    this.user.email = this.formRef.value.userData.email;
    this.user.secretAnswer = this.formRef.value.secret;
    this.user.question = this.formRef.value. questionAnswer;
    this.user.gender = this.formRef.value.gender;

    // this.formRef.reset({
    //     userData:{
    //       username:'',
    //       email:''
    //     },
    //     secret:'pet',
    //     questionAnswer:'',
    //     gender:'male'
    //   });
    this.formRef.reset()//this will not only reset the values of form but also reset 
    //the state(ng-untouced,ng-pristine,ng-invalid) of the form.
  }
}
