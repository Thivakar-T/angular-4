import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatagoryService } from '../catagory.service';

@Component({
  selector: 'app-newcatagorylist',
  templateUrl: './newcatagorylist.component.html',
  styleUrls: ['./newcatagorylist.component.css']
})
export class NewcatagorylistComponent implements OnInit {
  CatagoryArr: any = [];
  id : any;
  constructor(
    private CatagoryService : CatagoryService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CatagoryService.getAllStudents().subscribe(res => {
      this.CatagoryArr = res;
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
   
    this.CatagoryService.removeOneData(this.id).subscribe(res => {
    
      this.router.navigateByUrl('/empty', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/NewcatagorylistComponent']), 0);

    })
  }

}
