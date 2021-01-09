import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  ebrain = false;
  title = 'app';
  constructor(private router:Router, private route:ActivatedRoute) {

  }
  ngOnInit() {
  this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
        if(event.url=="/DashboardComponent"){
          this.ebrain = true;
        }else if (event.url=="/NewcatagoryComponent"){
          this.ebrain = true;
        }
        else if (event.url=="/NewcatagorylistComponent"){
          this.ebrain = true;
        }
        else if (event.url=="/ExpensiveComponent"){
          this.ebrain = true;
        }
        else if (event.url=="/ExpensivelistComponent"){
          this.ebrain = true;
        }
        else if (event.url=="/IncomeComponent"){
          this.ebrain = true;
        }
        else if (event.url=="/IncomelistComponent"){
          this.ebrain = true;
        }
        else if (event.url=="/ReportComponent"){
          this.ebrain = true;
        }
        else if (event.url=="/ReportlistComponent"){
          this.ebrain = true;
        }
        else{
          this.ebrain = false;
        }
      }
    });
}
}
