import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../income.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incomelist',
  templateUrl: './incomelist.component.html',
  styleUrls: ['./incomelist.component.css']
})
export class IncomelistComponent implements OnInit {
  incomeArr: any = [];
  id : any;
  constructor(
    private IncomeService : IncomeService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.IncomeService.getAllStudents().subscribe(res => {
      this.incomeArr = res;
    }, err => {
      console.log(err);
    });
  }
  get(id:any) {
    this.id = id;
    this.deleteOneProfile();

  }
  deleteOneProfile() {
    this.id;
   
    this.IncomeService.removeOneData(this.id).subscribe(res => {
    
      this.router.navigateByUrl('/empty', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/IncomelistComponent']), 0);

    })
  }

}
