import { RestService } from './services/rest.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { GuardService } from './services/guard.service';
//import { PrototypeComponent } from './prototype/prototype.component';



@NgModule({
  declarations: [
    AppComponent,
    //PrototypeComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    LoginModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    GuardService,
    AuthService,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
