import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-loan-apply-popup',
  templateUrl: './loan-apply-popup.component.html',
  styleUrls: ['./loan-apply-popup.component.css']
})
export class LoanApplyPopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LoanApplyPopupComponent>) { }
  ngOnInit() {
  }
  cancel(){
    this.dialogRef.close(true);
  }

}
