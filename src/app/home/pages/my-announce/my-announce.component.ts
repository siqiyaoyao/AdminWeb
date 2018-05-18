import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { myAnnounceData } from './../../models/myAnnounceData';
import { Component, OnInit, TemplateRef,  } from '@angular/core';

@Component({
  selector: 'app-my-announce',
  templateUrl: './my-announce.component.html',
  styleUrls: ['./my-announce.component.less'],
})
export class MyAnnounceComponent implements OnInit {
  
  constructor(
    private  myAnnounceData:myAnnounceData,
    private modalService:NzModalService,
  ) { }
  ngOnInit() {
  }
  // 搜索框
  configSearch = this.myAnnounceData.config;
  buttionOption ={
    add:false,
    delete:false,
    renew:true
  }
  search(value){
    console.log(value)
  }

  // 表格
  tableTitles = this.myAnnounceData.tableTitle;
  tableData = this.myAnnounceData.tableData;
  keyItem ='title'
  
  // 表单
  //modal
  modalConfig = this.myAnnounceData.modal;
  tplModal: NzModalRef; 


  test(e){
    console.log(e);
  }
  createTplModal(data,tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>):void{
    this.tplModal = this.modalService.create({    
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: null,
      nzMaskClosable: false,
      nzClosable: true,
    });
    console.log(data)
  }

  formSubmitted(value:any){
    console.log(value);
  }

}
