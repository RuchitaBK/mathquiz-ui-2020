import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http'
import { reject } from 'q';
import {HttpClient} from '@angular/common/http'
export class Multiplication{
  constructor(
    public value_1:number,
    public value_2:number,
    public ans:number
  ) {}
}
@Injectable()
export class RandomnoService{

    constructor(private httpclient:HttpClient){}
    
    getrandomno():Observable<any>{
        
      return this.httpclient.get("http://localhost:8991/randomlist");
    }
    multiplicationoperation(mul)
    {
      return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.httpclient.post("http://localhost:8991/mul", mul, { headers: headers })
        .subscribe(res => {
          console.log(res)
         
          resolve(JSON.parse(JSON.stringify(res)).data);
        }, (err) => {
          reject(err);
        });
      });
    
   }
   
  
 }

  
