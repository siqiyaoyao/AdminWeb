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
              if(res.flag ==1){ // 通过服务器返回结果来确定登录状态
                this.isLoggedIn = true;
                this._setBasicSession(res);
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
  

  }

  private _handleAuth(responds){ // 登录成功后需要处理的信息放在这里进行统一处理
    responds = JSON.parse(responds);
   
    this.rest.getAccountInfo$(responds.accountId)
        .subscribe(val =>{
          //this._setAccountInfo(val.Vals);
          console.log(val.Vals)
        })
    
  }

  private _setBasicSession(authResults){ //储存token里的信息到session.记得登出的时候相应的要清空
    localStorage.setItem('token',authResults.token);
    localStorage.setItem('name',authResults.user.name);
    localStorage.setItem('account',authResults.user.account);
    localStorage.setItem('avatar',authResults.user.avatar);
    localStorage.setItem('deptId',authResults.user.deptId);
    localStorage.setItem('deptName',authResults.user.deptName);
    localStorage.setItem('id',authResults.user.id);
    localStorage.setItem('roleList',authResults.user.roleList);
    localStorage.setItem('roleNames',authResults.user.roleNames);
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
    localStorage.removeItem('name');
    localStorage.removeItem('accountId');
    localStorage.removeItem('account');
    localStorage.removeItem('avatar');
    localStorage.removeItem('deptId');
    localStorage.removeItem('deptName');
    localStorage.removeItem('id');
    localStorage.removeItem('roleList');
    localStorage.removeItem('roleNames');
    console.log(localStorage)

  }
}
