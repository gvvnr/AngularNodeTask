import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  data: any;

  constructor(private router: Router, private auth: LoginService) { }

  ngOnInit() {
    console.log(this.data,'ddddddd');
  }
  viewOrders() {
    this.router.navigate(['/itemDetails']);
  }

  logOut() {
    this.data=localStorage.getItem('currentUser');
    console.log(this.data,'ddddddd');
    this.auth.logout();
    //alert('logging out');
    this.router.navigate(['/login']);
  }

}
