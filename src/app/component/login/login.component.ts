import { AppRoutingModule } from './../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User: any = {};
  constructor() { }

  ngOnInit(): void {

  }

  ValidateForm(form:NgForm)
{
   console.log(form);
   //this.AuthenticateUser();
}

}
