import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import {RandomnoService} from './services/randomno.service';
import {GameUserService} from './services/GameUser.service';

import { UserRegistrationService } from './services/user-registration.service';

import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { GameInfoComponent } from './component/game-info/game-info.component';
import { GameRuleComponent } from './component/game-rule/game-rule.component';
@NgModule({
  declarations: [
    AppComponent,
 
    RegistrationComponent,
 
    LoginComponent,
 
    GameInfoComponent,
 
    GameRuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    

  ],
  providers: [RandomnoService,GameUserService,UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
