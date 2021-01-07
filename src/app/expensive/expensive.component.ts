import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensiveService } from '../expensive.service';

@Component({
  selector: 'app-expensive',
  templateUrl: './expensive.component.html',
  styleUrls: ['./expensive.component.css']
})
export class ExpensiveComponent implements OnInit {
  expenseobj: any = {};
  id: any;
  constructor(
    private ExpensiveService: ExpensiveService,
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
    this.ExpensiveService.getOneData(this.id).subscribe(res => {
    console.log(res);
    this.expenseobj = res;
  })
  }
  submit() {
    
    if (this.id) {
      this.ExpensiveService.editOneData(this.id, this.expenseobj).subscribe(res => {
        this.router.navigateByUrl('/ExpensivelistComponent');
      })
    }
  else{
    this.ExpensiveService.addStudent(this.expenseobj).subscribe(res => {
    this.router.navigateByUrl('/ExpensivelistComponent');
   
     }, err => {
      console.log(err);
    });
  }
}

}
