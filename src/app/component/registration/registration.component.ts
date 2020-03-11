import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserRegistrationService } from '../../services/user-registration.service';

import {Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  User: any = {};
  User1: any = [];
  data: any = {};
  UserId: any = {};
  message:any={};

constructor(private router: Router, private userservice:UserRegistrationService) {
  console.log('User Constructor ran....');
 }
ngOnInit() {

};
/**
 * Add new Student
 */
addUser() {
    this.userservice.postRequest(this.User,'User/User').then((result) => {
      this.data = result;
      this.User = {};
      
     //this.listUser();
    }, (err) => {
    });
}

// listUser() {
//   this.userservice.getRequest('User/Userdata').then((result) => {
//     this.data = result;
//     this.User1 = this.data;
//     console.log( "list:" + JSON.stringify(this.User1));
//   }, (err) => {
//   });
// };

// DeleteById(UserId)
// {
//   console.log(UserId);
//   this.dataService.deleteById(UserId).then((result) => {
//     this.data = result;
//  this.listUser();
//   }, (err) => {
//   });
// };

//  EditUser()
//  {
//   //this.router.navigateByUrl('/Edit');
//    this.dataService.postRequest(this.User,'User/editdata').then((result) => {
//       this.data = result;
//       this.User = {};
//      this.listUser();
//     }, (err) => {
//     });

//  }

 ValidateForm(form:NgForm)
 {
    console.log(form);
   this.message=this.addUser();
   console.log(this.message)
      
    this.router.navigate(['/game']);
 }
}

/*
public registerNow(){
let resp=this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
  }
*/