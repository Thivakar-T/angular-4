import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  reportArr: any = [];
  expensearr: any = [];
  arr: any = [];
  total = 0;
  alltotal = 0;
  all = 0;
  private value: any;
  id: any;
  constructor(
    private ReportService: ReportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.ReportService.getAll().subscribe(res => {
      this.reportArr = res;
      for (let j = 0; j < this.reportArr.length; j++) {
        this.alltotal = this.alltotal + this.reportArr[j].amount;
        console.log(this.alltotal);
        this.alll();
      }
      console.log(this.reportArr);
    }, err => {
      console.log(err);
    });
    this.ReportService.getAllexpense().subscribe(res => {
      this.expensearr = res;
      for (let j = 0; j < this.expensearr.length; j++) {
        this.total = this.total + this.expensearr[j].amount;
        // this.all = this.alltotal - this.total;
        console.log(this.total);
        this.alll();
      }
      console.log(this.expensearr);
    }, err => {
      console.log(err);
    });
   
  }
  alll(){
    this.all = this.alltotal - this.total;
  }
}
