import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  data = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      sex    : 'Male',
      address: 'New York No. 1 Lake Park',
    }, {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      sex    : 'Female',      
      address: 'London No. 1 Lake Park',
    }, {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      sex    : 'Male',      
      address: 'Sidney No. 1 Lake Park',
    }
  ];

  ontest(){
    this.http.post('http://192.168.1.26:8088/mapi/login',
    {"accountName": "admin",
    "accountPwd": "nbsg!@#"}).subscribe(data=>{console.log(data)})
  }

  getListData(date: Date): Array<{type: string, content: string}> {
    let listData;
    switch (date.getDate()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event........' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  getMonthData(date: Date): number|null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  onClickTest(){
    
  }
}

