import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensiveService } from '../expensive.service';

@Component({
  selector: 'app-expensivelist',
  templateUrl: './expensivelist.component.html',
  styleUrls: ['./expensivelist.component.css']
})
export class ExpensivelistComponent implements OnInit {
  expenseArr: any = [];
  id : any;
  constructor(
    private ExpensiveService : ExpensiveService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ExpensiveService.getAllStudents().subscribe(res => {
      this.expenseArr = res;
      console.log(this.expenseArr);
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
   
    this.ExpensiveService.removeOneData(this.id).subscribe(res => {
    
      this.router.navigateByUrl('/empty', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/ExpensivelistComponent']), 0);

    })
  }

}
