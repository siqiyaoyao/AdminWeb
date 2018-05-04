import { Irest } from './../../../services/interface/irest';
import { HttpParams } from '@angular/common/http';
import { RestService } from './../../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.less']
})
export class GetdataComponent implements OnInit {
  data:any;
  url:string="http://192.168.1.33:8088/mapi/employee/paging";

  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getDataFromRest();
  }

  getDataFromRest(){
    // this.rest.getData$(this.url)
    // .subscribe(
    //   res =>{
    //     console.log(res.data);
    //     this.data = res.data;
    //   },
    //   err=>{
    //     console.log(err)
    //   }
    // )
  
    let req:Irest ={
      url:this.url,
      body:{
        "pageNo": 1,
				"pageSize": 1
      }

    }
    this.rest.postComman$(req)
    .subscribe(
      res =>{
        console.log(res);
        this.data = res;
      },
      err=>{
        console.log(err)
      }
    )
  }

}

