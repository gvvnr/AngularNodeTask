import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;




  constructor(private fb: FormBuilder, private searchData: SearchService) {
    this.createForm();
  }

  ngOnInit() {
/*    this.registrationForm = this.fb.group({
      name: ['', Validators.required ],

    });*/

  }

  onSubmit(data) {
    console.warn(data);
    this.searchData.RegistrationFormInsertData(data).subscribe(res =>{
      console.log(res);
    });
  }


  createForm() {
    this.registrationForm = this.fb.group({
      name: [''],
      emailId: [''],
      password: ['']
    });
  }


}
