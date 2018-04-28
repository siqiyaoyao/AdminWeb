import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn:boolean = false; //登录状态
  redirectUrl:string;// 记录登录前想要去的页面

  constructor(
    private rest:RestService
  ) { }

  login(url,data){

    return this.rest.loginCheck$(url,data)
            .do(
              res =>{
              if(res.Success){ // 通过服务器返回结果来确定登录状态
                this.isLoggedIn = true;
                this._setBasicSession(res.Token);
              }else{
                this.isLoggedIn =false;
              }
              },                         
          )
            .do(res =>{ //保证将token存入session后再请求
              if(res.Success){ // 通过服务器返回结果来确定登录状态             
                this._handleAuth(res.Token);  
              }           
            })
    // return Observable
    //   .of(true) //登录结果
    //   .delay(1000) // 模拟登录时间
    //   .do(val =>{
    //     this.isLoggedIn = true;
    //   })

  }

  private _handleAuth(responds){ // 登录成功后需要处理的信息放在这里进行统一处理
    responds = JSON.parse(responds);
   
    this.rest.getAccountInfo$(responds.accountId)
        .subscribe(val =>{
          this._setAccountInfo(val.Vals);
        })
    
  }

  private _setBasicSession(authResults){ //储存token里的信息到session.记得登出的时候相应的要清空
    localStorage.setItem('token',authResults);
    localStorage.setItem('accuntName',authResults.accountName);
    localStorage.setItem('accountId',authResults.accountId);
    localStorage.setItem('roles',authResults.roles);
    localStorage.setItem('isAdmin',authResults.isAdmin);
  }

  private _setAccountInfo(acResults){
    localStorage.setItem('AccountPwd',acResults.AccountPwd);
    localStorage.setItem('DeptId',acResults.DeptId);
    localStorage.setItem('Name',acResults.Name);

  }

  logout():void{
    this.isLoggedIn = false;
    //auth
    localStorage.removeItem('token');
    localStorage.removeItem('accountName');
    localStorage.removeItem('accountId');
    localStorage.removeItem('roles');
    localStorage.removeItem('isAdmin');
    //accountInfo

  }
}
