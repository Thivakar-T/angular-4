import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: any = {};
  id: any;
  constructor(
    private _SignupService: SignupService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
  }
  submit(){
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
