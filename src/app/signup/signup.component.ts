import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from './signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: any = {};
  id: any;
  submitted = false;
  registerForm?:NgForm;

  constructor(
    private _SignupService: SignupService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
  }
  submit(){
    this.submitted = true;
    console.log(this.signup);
    this._SignupService.addUser(this.signup).subscribe(response => {
    console.log(response);
    this.signup = {};
    this.router.navigate(['/login'])
    }, error => {
    console.log(error);
    
    })
    }
}
