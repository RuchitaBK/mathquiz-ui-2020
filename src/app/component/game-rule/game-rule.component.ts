import { Component, OnInit } from '@angular/core';
import { GameUserService } from 'src/app/services/GameUser.service';
import {GameUser} from '../../classes/GameUser';

@Component({
  selector: 'app-game-rule',
  templateUrl: './game-rule.component.html',
  styleUrls: ['./game-rule.component.css']
})
export class GameRuleComponent implements OnInit {

  gameuserlist:GameUser[];
  constructor(private gameser:GameUserService) { }

  ngOnInit(): void {
    this.gameser.getalldetails().subscribe(
     
      data=>
      {
          this.gameuserlist=data;
      }
    );
  }

}
