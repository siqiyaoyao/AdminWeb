import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { myAnnounceData } from './../../models/myAnnounceData';
import { Itree } from './../../interface/Itree';
import { RoleTree } from './../../models/tree.mode';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {
  treeConfig:Array<Itree>;
  isVisible = false;//
  constructor(
    private RoleTree:RoleTree,
    private  myAnnounceData:myAnnounceData, 
    private modalService:NzModalService, 
  ) { }

  ngOnInit() {
    this.treeConfig = this.RoleTree.data;
  }

  // tree
  click(e: any){
    //console.log(e.node);
    this.tableData =  [
      {
          title    : e.node.title +"信息1",
          type   : '会议通知',
          state    : '发布',
          checkState: '已读',
          updateTime: '2018-05-17 11:07:34',
          checked:false
        },
        {
          title    : e.node.title +"信息2",
          type   : '会议通知',
          state    : '发布',
          checkState: '已读',
          updateTime: '2018-05-17 11:07:34',
          checked:false
    
        },
       
  ];
    //this.tableTitles =null;
    
  }
  expand(e){
   // console.log(e.node);
    this.tableData = this.myAnnounceData.tableData;
    this.tableTitles = this.myAnnounceData.tableTitle;
    
  }

  // search
  configSearch = this.myAnnounceData.config;
  buttionOption ={
    add:false,
    delete:false,
    renew:true
  }
  search(value){
    console.log(value)
  }

  // table
  tableTitles = this.myAnnounceData.tableTitle;
  tableData = this.myAnnounceData.tableData;
  keyItem ='title'

  // modal
  modalConfig = this.myAnnounceData.modal;
  tplModal: NzModalRef; 

  createTplModal(data,tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>):void{
   
    this.tplModal = this.modalService.create({    
      nzTitle: tplTitle,
      nzContent:data,
      nzFooter: null,
      nzMaskClosable: false,
      nzClosable: true,
    });
    console.log(data)
  }

  formSubmitted(value:any){
    console.log(value);
  }

  showModal(e): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}