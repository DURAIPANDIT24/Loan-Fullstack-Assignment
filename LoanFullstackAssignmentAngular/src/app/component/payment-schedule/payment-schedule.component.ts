import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';
import { PaymentSchedule } from 'src/app/models/paymentSchedule';
import { MatDialog } from '@angular/material/dialog';
import { LoanPayPopupComponent } from '../loan-pay-popup/loan-pay-popup.component';
import { Loan } from 'src/app/models/loan';
@Component({
  selector: 'app-payment-schedule',
  templateUrl: './payment-schedule.component.html',
  styleUrls: ['./payment-schedule.component.css']
})
export class PaymentScheduleComponent implements OnInit {
  payments: PaymentSchedule[];
  loanid: string;
  spin: boolean;
  loans: Loan[] | any;

  constructor(private activatedRoute: ActivatedRoute, private loanService: LoanService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.spin = true;

    this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.loanid = params['loanId'];
        this.loanService.getPaymentSchedule(this.loanid).subscribe((data: any) => {
          this.spin = false;
          this.payments = data.sort(this.compare);
        })
        this.loanService.getLoanDetails(this.loanid).subscribe((data: any) => {
          this.loans = data;

          console.log("loan", this.loans);
        })
      });
  }

  getClass(paymentStatus: string) {
    var classList = '';
    if (paymentStatus == 'PROJECTED') {
      classList = 'badge badge-primary';
    } else if (paymentStatus == 'AWAITINGPAYMENT') {
      classList = 'badge badge-warning';
    } else if (paymentStatus == 'PAID') {
      classList = 'badge badge-success';
    }
    return classList;
  }

  changePaymentStatus(event: any, paymentId: any) {
    let popup = this.dialog.open(LoanPayPopupComponent);
    popup.afterClosed().subscribe(data => {
      if (data === true) {
        this.loanService.updatePaymentStatus(paymentId).subscribe(() => {
          this.ngOnInit();
        });
      }
      else {
        return data;
      }
    })
  }

  compare(a: any, b: any) {
    var a_part = a.paymentDate.split("-");
    var dateObject1 = new Date(+a_part[2], a_part[1] - 1, +a_part[1]);
    var b_part = b.paymentDate.split("-");
    var dateObject2 = new Date(+b_part[2], b_part[1] - 1, +b_part[1]);
    if (dateObject1.valueOf() < dateObject2.valueOf()) {
      return -1;
    }
    if (dateObject1.valueOf() > dateObject2.valueOf()) {
      return 1;
    }
    return 0;
  }



}
