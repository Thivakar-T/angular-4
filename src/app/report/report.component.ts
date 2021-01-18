import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  date: any = {};
  incomeArr: any = []
  expenseArr: any = []
  incomeArray: any = []
  expenseArray: any = []
  // reportArr :any =[]
  total = 0;
  totall = 0;
  totalll = 0;
  alt=-1;
  isProfit=false;
  // cashinhand :any;
  constructor(private ResultService: ReportService,
  private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  this.getincome()
  this.getExpense()
  this.cash()
  }
  
  getincome() {
  
  this.ResultService.getAll().subscribe(response => {
  console.log(response)
  this.incomeArr = response;
  this.submit()
  
  this.sum()
  // this.push();
  }, error => {
  console.log(error);
  })
  }
  getExpense() {
  this.ResultService.getAllexpense().subscribe(response => {
  console.log(response)
  this.expenseArr = response;
  
  this.sumb()
  // this.push();
  }, error => {
  console.log(error);
  })
  }
  submit(){
    // incomeArr: any = []
    // expenseArr: any = []
    this.incomeArray = []
    this.expenseArray = []
  
  // alert()
  console.log(this.incomeArr)
  console.log(this.expenseArr)
  
  for (let i = 0; i < this.expenseArr.length; i++) {
  if (this.expenseArr[i].date >= this.date.fromDate && this.expenseArr[i].date <= this.date.toDate) {
  this.expenseArray.push(this.expenseArr[i])
  console.log(this.expenseArray)
  }
  }
  for (let i = 0; i < this.incomeArr.length; i++) {
  if (this.incomeArr[i].date >= this.date.fromDate && this.incomeArr[i].date <= this.date.toDate) {
  this.incomeArray.push(this.incomeArr[i])
  console.log(this.incomeArray)
  
  
  }
  }
  this.sum()
  this.sumb()
  this.cash()
  
  }
  
  sum() {
    this.total=0
  for (let i = 0; i < this.incomeArray.length; i++) {
  this.total = Number(this.incomeArray[i].amount + this.total);
  
  this.cash();
  
  }
  console.log(this.total)
  }
  sumb() {
    this.totall=0;

  for (let i = 0; i < this.expenseArray.length; i++) {
  this.totall =this.expenseArray[i].amount + this.totall;
  this.cash();
  }
  console.log(this.totall)
  }
  reset(){
    this.incomeArray = []
    this.expenseArray = []
    this.totall=0;
    this.total=0;
    this.totalll=0

  }

  
  cash() {
  this.totalll = this.total - this.totall ;
    if(this.totalll>0){
      this.totalll
      this.isProfit=true;
    }
    else{
      this.totalll=(this.totalll*this.alt)
    }
  console.log(this.totall);
  }
    
  }
  