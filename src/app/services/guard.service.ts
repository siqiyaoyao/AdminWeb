import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { 
  CanActivate, CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
 } from '@angular/router';


@Injectable()
export class GuardService implements CanActivate,CanActivateChild {
  constructor(
    private router:Router,
    private auth:AuthService
  ) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    console.log("守卫生效");
    let url:string = state.url;
    return this.checkLogin(url);
  };

  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    
    return this.canActivate(route,state);
  }

  checkLogin(url:string):boolean{
    if(this.auth.isLoggedIn) {return true};

    this.auth.redirectUrl = url;  //记录目标页面，登录成功后可以回到该页
    this.router.navigate(['/login']) // 指向登录页

    return false;
  }
 
}
