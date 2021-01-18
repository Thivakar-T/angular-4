import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatagoryService } from '../catagory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newcatagory',
  templateUrl: './newcatagory.component.html',
  styleUrls: ['./newcatagory.component.css']
})
export class NewcatagoryComponent implements OnInit {
  Catagoryobj: any = {};
  id: any;
  submitted = false;
  registerForm?:NgForm;

  constructor(
    private CatagoryService: CatagoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.getOneProfile();
    }
  }
  getOneProfile() {
    this.id;
    this.CatagoryService.getOneData(this.id).subscribe(res => {
    console.log(res);
    this.Catagoryobj = res;
  })
  }
  submit() {
    this.submitted = true;

    if (this.id) {
      this.CatagoryService.editOneData(this.id, this.Catagoryobj).subscribe(res => {
        this.router.navigateByUrl('/NewcatagorylistComponent');
      })
    }
  else{
    this.CatagoryService.addStudent(this.Catagoryobj).subscribe(res => {
    this.router.navigateByUrl('/NewcatagorylistComponent');
   
     }, err => {
      console.log(err);
    });
  }
}

}
