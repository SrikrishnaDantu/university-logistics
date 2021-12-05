import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api-services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userData:any;
  public confpassword:any;
  public selectedLevel: any;
  public passtext:any;

  constructor(private router: Router, private authService: AuthService) {
    this.userData = {};
    this.selectedLevel = null;
    this.confpassword = "";
    this.passtext="";
  }

  public access = [
    // { id: 'none', name: 'User role'},
    { id: 'admin', name: 'Administrator'},
    { id: 'student', name: 'Student' }
  ];

  ngOnInit(): void {
  }

  register() {
    var base = this;
    this.userData.useraccess = this.selectedLevel.id;
    this.authService.register(this.userData).subscribe((data: any) => {
      sessionStorage.setItem('authToken', data.token);
      console.log(data);
      alert("registered successfully!!!");
      this.authService.sendRegisterEvent();
    }, (error: any) => {
      // E11000
      debugger;
      var val = error.error.message.includes('E11000');
      if (val) {
        alert('Already username/email exits. Please enter valid details');
      } 
    });
  }

  checkPassword() {
    if(this.confpassword===this.userData.password){
      this.passtext="Password Matched!";
    }
    else{
      this.passtext="Passwords Do Not Match! Re-Enter.";
    }
  }

  changeToLogin() {
   this.authService.sendRegisterEvent();
  } 

}
