import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './component/registration/registration.component';
import {LoginComponent} from './component/login/login.component';
import { GameInfoComponent } from './component/game-info/game-info.component';



const routes: Routes = [
  
  { path: 'register' , component: RegistrationComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'game' , component: GameInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
