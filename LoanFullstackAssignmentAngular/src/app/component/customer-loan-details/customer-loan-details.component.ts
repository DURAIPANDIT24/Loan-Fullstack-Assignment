import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models/loan';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { LoanService } from 'src/app/service/loan.service';
@Component({
  selector: 'app-customer-loan-details',
  templateUrl: './customer-loan-details.component.html',
  styleUrls: ['./customer-loan-details.component.css']
})
export class CustomerLoanDetailsComponent implements OnInit {
  loans:Loan[];
  customerId:string;
  constructor(private router: Router ,private loanService:LoanService,private authService:HardcodedAuthenticationService) {

   }

  ngOnInit(): void {
    this.customerId=this.authService.getCustomerId();
    this.loanService.getLoanList(this.customerId).subscribe((data:any) =>{
      this.loans =data.sort(this.compare);
      });
  }
  navigatePaymentSchedule(loanId:string){
    this.router.navigate([`./payment-schedule`],{ queryParams: { loanId: loanId } });
  }

  compare( a:any, b:any ) {
    var a_part =a.startDate.split("-");
    var dateObject1 = new Date(+a_part[2], a_part[1] - 1, +a_part[1]);
    var b_part =b.startDate.split("-");
    var dateObject2 = new Date(+b_part[2], b_part[1] - 1, +b_part[1]);
    if (dateObject1.valueOf() < dateObject2.valueOf() ){
      return -1;
    }
    if ( dateObject1.valueOf() > dateObject2.valueOf() ){
      return 1;
    }
    return 0;
  }

}
