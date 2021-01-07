import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ExpensiveComponent,
    ExpensivelistComponent,
    IncomeComponent,
    IncomelistComponent,
    NewcatagoryComponent,
    NewcatagorylistComponent,
    ReportComponent,
    ReportlistComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
