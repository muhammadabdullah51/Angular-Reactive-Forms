import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'reactive-form';
  signupForm:FormGroup;
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string=""; 
  confirmPasswordFocused = false;

  constructor(private formbuilder:FormBuilder){
    this.signupForm=formbuilder.group({
      // fname: new FormControl(),
      fname: ['',Validators.required,Validators.pattern('[a-zA-Z ]*')],
      lname:['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      passwordname:['',Validators.required,Validators.pattern('/^[a-zA-Z0-9_-]*$/')],
      confirmpassword:['',Validators.required],
    });
  }

  postfun(signupForm:any){
   console.log(signupForm.value);
  //  console.log(signupForm.controls);
  }
  trimFormValues() {
    Object.keys(this.signupForm.value).forEach(key => {
      const control = this.signupForm.get(key);
      if (control && control.value) {
        control.setValue(control.value.replace(/^\s+|\s+$/g, ''));
      }
    });
  }
}
