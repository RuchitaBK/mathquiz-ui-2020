import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';

import {HttpClient} from '@angular/common/http'

@Injectable()
export class GameUserService{

    constructor(private httpclient:HttpClient){}
    
    getalldetails():Observable<any>{
        
      return this.httpclient.get("http://localhost:8991/alldetails");
    }
}