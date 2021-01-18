import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensiveComponent } from './expensive/expensive.component';
import { ExpensivelistComponent } from './expensivelist/expensivelist.component';
import { IncomeComponent } from './income/income.component';
import { IncomelistComponent } from './incomelist/incomelist.component';
import { NewcatagoryComponent } from './newcatagory/newcatagory.component';
import { NewcatagorylistComponent } from './newcatagorylist/newcatagorylist.component';
import { ReportComponent } from './report/report.component';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'DashboardComponent', component: DashboardComponent },
  { path: 'ExpensiveComponent', component: ExpensiveComponent },
  { path: 'ExpensiveComponent/:id', component: ExpensiveComponent },
  { path: 'ExpensivelistComponent', component: ExpensivelistComponent },
  { path: 'IncomeComponent', component: IncomeComponent },
  { path: 'IncomelistComponent', component: IncomelistComponent },
  { path: 'NewcatagoryComponent', component: NewcatagoryComponent },
  { path: 'NewcatagorylistComponent', component: NewcatagorylistComponent },
  { path: 'ReportComponent', component: ReportComponent },
  { path: 'ReportlistComponent', component: ReportlistComponent },

  { path: 'ExpensiveComponent/:id', component: ExpensiveComponent },
  { path: 'ExpensivelistComponent/:id', component: ExpensivelistComponent },
  { path: 'IncomeComponent/:id', component: IncomeComponent },
  { path: 'IncomelistComponent/:id', component: IncomelistComponent },
  { path: 'NewcatagoryComponent/:id', component: NewcatagoryComponent },
  { path: 'NewcatagorylistComponent/:id', component: NewcatagorylistComponent },
  { path: 'ReportComponent/:id', component: ReportComponent },
  { path: 'ReportlistComponent/:id', component: ReportlistComponent },
  
  { path: 'EmptyComponent', component: EmptyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
