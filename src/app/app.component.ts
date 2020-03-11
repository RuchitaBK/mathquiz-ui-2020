import { Component } from '@angular/core';
import {RandomnoService} from './services/randomno.service';
import {Randomnos} from './classes/randomnos'
import { GameUserService } from './services/GameUser.service';
import { GameUser } from './classes/GameUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gameuserservice:GameUserService){}

  title = 'mathquiz-ui';

  //randomnolist:Randomnos[];
  gameuserlist:GameUser[];
  ngOnInit()
  {
    // this.randomnoservice.getrandomno().subscribe(
     
    //   data=>
    //   {
    //       this.randomnolist=data;
    //   }
    // );

    this.gameuserservice.getalldetails().subscribe(
     
      data=>
      {
          this.gameuserlist=data;
      }
    );
  }
}
