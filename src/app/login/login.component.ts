import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {  FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  tips = false;
  message ='';
  //loginUrl:string = 'http://192.168.1.33:8088/mapi/login'; // 登录验证地址
  loginUrl:string = 'http://192.168.1.44:9996/japi/login'
  validateForm:FormGroup;



  constructor(
    private fb: FormBuilder,
    private Router:Router,
    public authService:AuthService,
  ) {
  }
  
  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if(this.validateForm.valid){
      //this.Router.navigateByUrl("/home")
      this.isLoading = true;
      this.login();
    }
    
  }

 

  // login(){
  //   this.authService.login().subscribe(()=>{
  //     if(this.authService.isLoggedIn){
  //       let redirect = this.authService.redirectUrl?this.authService.redirectUrl:'/home';
  //       this.Router.navigate([redirect]);
  //     }
  //   })
  // }

  login(){
    let body = JSON.stringify(this.validateForm.value) //从表单里获取数据
    console.log("loging")
    this.authService.login(this.loginUrl,body).subscribe(()=>{ //订阅登录验证服务
      if(this.authService.isLoggedIn){ //登录成功
        this.isLoading = false;
        let redirect = this.authService.redirectUrl?this.authService.redirectUrl:'/home';
        this.Router.navigate([redirect]);
      }else{ // 登录失败提示
        this.tips = true;
        this.message = '用户名或密码错误！';
        this.isLoading = false;
        setTimeout(_ => {
          this.tips = false;
        }, 5000);
        console.log("fail")
      }
    })
  }

  logout(){
    this.authService.logout();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [ null, [ Validators.required ] ], //双向数据绑定并与服务器字段匹配
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
      test:[],
    });
    console.log(this.validateForm);
  }

  _testValue(){
    console.log(this.validateForm.value)
  }

}
