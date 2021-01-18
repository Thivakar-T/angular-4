import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeService } from '../income.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomeobj: any = {};
  id: any;
  submitted = false;
  registerForm?:NgForm;

  constructor(
    private IncomeService: IncomeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.getOneProfile();
    }
    this.incomeobj.categery='';

  }
  getOneProfile() {
    this.id;
    this.IncomeService.getOneData(this.id).subscribe(res => {
    console.log(res);
    this.incomeobj = res;
  })
  }
  submit() {
    this.submitted = true;

    if (this.id) {
      this.IncomeService.editOneData(this.id, this.incomeobj).subscribe(res => {
        this.router.navigateByUrl('/IncomelistComponent');
      })
    }
  else{
    this.IncomeService.add(this.incomeobj).subscribe(res => {
    this.router.navigateByUrl('/IncomelistComponent');
   
     }, err => {
      console.log(err);
    });
  }
}

}
