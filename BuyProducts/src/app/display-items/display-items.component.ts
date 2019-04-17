import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.sass']
})
export class DisplayItemsComponent implements OnInit {
 @Input() ItemDetails: string [];
 totalItems =new Array();
 contains=false;
  @Input() details: string[];

  constructor() {
  }

  ngOnInit() {
   this.details=this.ItemDetails;
      if(this.details[0]){
        alert(this.details[0])
      }
      else {
        this.contains=true;
      }
  }
   contain(){
     this.contains=true;
   }

}
