import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';// 操作数据流
import { Observable } from 'rxjs/Observable';// 数据流
import 'rxjs/add/observable/throw';
import { Irest } from './interface/irest';

@Injectable()
export class RestService {

  oriUrl:string = "http://192.168.1.33:8088/"
  
    constructor(
      private http:HttpClient,
    ) { }
  
    //登录验证
    loginCheck$(url,data){
      return this.http
        .post(url,data,
          {headers:new HttpHeaders().set('Content-type', 'application/json;charset=UTF-8')}
        )
        .pipe(
          catchError((error) => this._handleError(error))
        )
    }
    //获取储存在token内的验证用户的信息
    private get _authHeader():string{
      return localStorage.getItem('token');
    }
    
    //获取用户基本信息
    getAccountInfo$(id){
      let curUrl = this.oriUrl+"mapi/account/"+id;
      return this.http
        .get(curUrl,{headers:new HttpHeaders().set('auth',this._authHeader)})
        .pipe(
          catchError((error) => this._handleError(error))
        )   
    }
  
    getData$(url){
      return this.http
        .get(url)
        .pipe(
          catchError((error) => this._handleError(error))
        )
    } //基础GET: 将接收到的数据以流的形式返回
  
  
    
    private _handleError(err: HttpErrorResponse | any): Observable<any> {
      const errorMsg = err.message || 'Error: Unable to complete request.';
      if (err.message && err.message.indexOf('No JWT present') > -1) {
        console.log("没有权限则返回登录页")
      }
      return Observable.throw(errorMsg);
    }

    //test
    getComman$(req:Irest){
      return this.http
      .get(req.url,{headers:new HttpHeaders().set('auth',this._authHeader),params:req.params})
      .pipe(
        catchError((error) => this._handleError(error))
      )
    }

    postComman$(req:Irest){
      return this.http
      .post(req.url,req.body,{headers:new HttpHeaders().set('auth',this._authHeader),params:req.params},)
      .pipe(
        catchError((error) => this._handleError(error))
      )
    }

}
