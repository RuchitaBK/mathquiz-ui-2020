import { Component, OnInit } from '@angular/core';
import {GameRuleComponent} from '../game-rule/game-rule.component'
import { RandomnoService, Multiplication } from 'src/app/services/randomno.service';
import {Randomnos} from '../../classes/randomnos'

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  result: any = {};
  //mul: any = {};
  mul: Multiplication = new Multiplication(0,0,1);
  answer:number;
  messagestring:any={};
  test: String;
  test2:String;
  num1:number;
  num2:number;
   arr_names:number[] = new Array(2)  
  messagestring_final:any={};
  randomnolist:Array<any>;
  
  constructor(private randomnoservice:RandomnoService) { }

  ngOnInit(): void {
    this.randomnoservice.getrandomno().subscribe(
     
      data=>
      {
          this.randomnolist=data;
          this.messagestring=data;
          this.test=data;
        
          this.arr_names=data;

         this.num1=this.arr_names[0];
         this.num2=this.arr_names[1];


          //this.test2=this.test.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'*');
          console.log(this.test);
         // this.messagestring_final = data.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'*');
      }
    );
  }

  

  muloperation(): void {

    this.mul.value_1=this.num1;
    this.mul.value_2=this.num2;
    this.mul.ans=this.answer;
    console.log(this.mul)
    this.randomnoservice.multiplicationoperation(this.mul)
       

  };
  
}
