import { RestService } from './../../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.less']
})
export class GetdataComponent implements OnInit {
  data:any;
  url:String="http://192.168.1.44:9999/japi/qrcode/10000031/item/list";

  constructor(private rest:RestService) { }

  ngOnInit() {
    this.getDataFromRest();
  }

  getDataFromRest(){
    this.rest.getData$(this.url)
    .subscribe(
      res =>{
        console.log(res.data);
        this.data = res.data;
      },
      err=>{
        console.log(err)
      }
    )
  }

}

