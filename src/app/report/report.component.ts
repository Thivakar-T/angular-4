import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportobj: any = {};
  id : any;
  constructor(
    private CatagoryService : ReportService,
    private router : Router,
    private route : ActivatedRoute
  ) { } 
   ngOnInit(): void {
  }

}
