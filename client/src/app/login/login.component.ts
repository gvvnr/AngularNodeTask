import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {LoginService} from './login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private loginAuthenticate: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: [''],
      password: ['']
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit(loginDetails) {
    console.log(loginDetails.value.emailId);
    this.loginAuthenticate.authenticateLoginData(loginDetails.value).subscribe(res => {
      console.log('authenitication :', res);
      localStorage.setItem('currentUser', res);
      console.log('IIII');
      console.log(localStorage.getItem('currentUser'));

/*      this.router.navigate(' search');*/
      this.router.navigate(['/search']);
      console.log('LOGGED In');

    });
  }

}
