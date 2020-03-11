import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private httpclient:HttpClient) { }
  message:any;

  public doRegistration(user){
    return this.httpclient.post("http://localhost:8991/createnew",user,{responseType:'text' as 'json'});
  }


  
  postRequest(data, url) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.httpclient.post("http://localhost:8991/createnew", data, { headers: headers })
    .subscribe(res => {
      console.log(res)
     
      resolve(JSON.parse(JSON.stringify(res)).data);
    }, (err) => {
      reject(err);
    });
  });
}

}

/*
return new Promise((resolve, reject) => {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.httpclient.post("http://localhost:8991/createnew", data, { headers: headers })
      .subscribe(res => {this.message=res

        // console.log(res.json())
        //resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });
  */
