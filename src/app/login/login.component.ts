import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signup: any = {};
  signupArr: any = [];
  id: any;
  constructor(
    private _LoginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUser()
    
    }
    login() {
    
    console.log(this.signupArr)
    
    let val = this.signupArr.find((id: any) => id.username == this.signup.username && id.password == this.signup.password);
    console.log(val);
    if (val) {
    this.router.navigate(['/DashboardComponent'])
    } else {
    alert("Username or Password is incorrect")
    }
    }
    getUser() {
    this. _LoginService.getUser().subscribe(response => {
    console.log(response);
    this.signupArr = response;
    }, error => {
    console.log(error);
    })
    }
    
    }