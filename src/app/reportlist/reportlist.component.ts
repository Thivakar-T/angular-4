import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.css']
})
export class ReportlistComponent implements OnInit {
  reportArr: any = [];
  id : any;
  constructor(
    private CatagoryService : ReportService,
    private router : Router,
    private route : ActivatedRoute
  ) { }
  ngOnInit(): void {
  }

}
