import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    :host ::ng-deep .ant-menu-submenu .ant-menu-submenu{
      margin-left: 12px;
    }
    :host ::ng-deep nz-layout{
      height:100%;
      background-image: url(/assets/images/bg/sky2.jpg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    :host ::ng-deep nz-content{
      padding: 20px;
    }
    :host ::ng-deep .logo{
      width:200px;
      height:60px;
      background-color:#454545;
      color:#fff;
      font-size:26px;
      line-height:60px;
      text-align:center;
    }
  `]
})
export class HomeComponent implements OnInit {

  show:boolean = true;
  accountName:string;
  menuData = [
    {
      title:"一级",
      url:"",
      icon:"anticon-user",
      children:[
        {
          title:"二级",
          url:"",
          icon:"anticon-setting",
          children:[
            {
              "title":"三级",
              "url":"/home"
            }
          ]
        }
      ]
    },{
      title:"进度管理",
      url:"",          
      icon:"anticon-bars",      
      children:[
        {
          "title":"模型展示",
          "url":"/home"
        }
      ]
    },{
      title:"进度管理",
      url:"",
      icon:"anticon-dot-chart",       
      children:[
        {
          "title":"模型展示",
          "url":"/home"
        }
      ]
    },{
      title:"Demo",
      url:"/home/demo"
    }
  ]  
  constructor(private router:Router) { }

  ngOnInit() {
    this.accountName = localStorage.getItem('Name');
  }

  logout(){
    this.router.navigate(['/login'])
  }
}

