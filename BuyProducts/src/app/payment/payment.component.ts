import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {Router} from "@angular/router";

//, MatDialogRef, MAT_DIALOG_DATA
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
  //payment ="payment successful";


  constructor(private router: Router//private bottomSheetRef: MatBottomSheetRef<PaymentComponent>
  ) { }

  ngOnInit() {
    /*const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });*/
    //this.openDialog()
  }
  /*openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }*/
  redirect(){
    this.router.navigate(['/search']);
  }




}


/*
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: `

  
  <h2 mat-dialog-title>Install Angular</h2>
<mat-dialog-content class="mat-typography">
  <h3>Develop across all platforms</h3>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>Cancel</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Install</button>
</mat-dialog-actions>
  `,
})
export class DialogContentExampleDialog {}
*/
