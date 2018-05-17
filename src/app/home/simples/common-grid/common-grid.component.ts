import { CommonFormComponent } from './../common-form/common-form.component';
import { TableSevicesService } from './../../services/table-sevices.service';
import { Component, OnInit,TemplateRef,AfterViewInit,ViewChild,ViewContainerRef, } from '@angular/core';
import { Itable } from '../../interface/itable.service';
import { Table2SevicesService } from '../../services/table2-sevices.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { Imodal } from '../../interface/Imodal';
import { RoleControlComponent } from '../../pages/role-control/role-control.component';

interface FormItemOption {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: any;
}


@Component({
  selector: 'app-common-grid',
  templateUrl: './common-grid.component.html',
  styleUrls: ['./common-grid.component.less'],
  providers:[
    //S2Service,
    //SMSServiceProvider,
    //{provide:Itable,useClass:TableSevicesService}, 
    //{provide:Itable,useClass:Table2SevicesService}, 
   
    {provide:Itable,useClass:CommonGridComponent},
    
    
  ],
  entryComponents:[RoleControlComponent,CommonFormComponent]
})
export class CommonGridComponent implements OnInit,Itable {
  //modal
  tplModal: NzModalRef;
  tpl:TemplateRef<any>;
  @ViewChild('template') ref :TemplateRef<any>;

  // table
  dataSet1 =['key','name','age','address'
  ]

  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park',
      checked:false
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park',
      checked:false

    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
      checked:false
    }
  ];



  // search
  configSearch =[
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      temp:[]
    },
    {
      type: 'input',
      label: 'ID',
      name: 'key',
      placeholder: 'Enter your ID',
      temp:[]
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: [
        {
        value: 'zhejiang',
        label: 'Zhejiang',
        }, 
        {
        value: 'jiangsu',
        label: 'Jiangsu',
        }],
      placeholder: 'Select an option',
      temp:[]
    },
    {
      type: 'input',
      label: '测试',
      name: 'name1',
      placeholder: 'Enter your name',
      temp:[]
    },
    {
      type: 'date',
      label: '日期选择',
      name: 'date',
    //  placeholder: 'Enter your name',
      temp:[]
    },
    {
      type: 'input',
      label: 'ID',
      name: 'key1',
      placeholder: 'Enter your ID',
      temp:[]
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food1',
      options: [
        {
        value: 'zhejiang',
        label: 'Zhejiang',
        }, 
        {
        value: 'jiangsu',
        label: 'Jiangsu',
        }],
      placeholder: 'Select an option',
      temp:[]
    },
  ]
  //form
  config: FormItemOption[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'input',
      label: 'ID',
      name: 'key',
      placeholder: 'Enter your ID'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: [
        {
        value: 'zhejiang',
        label: 'Zhejiang',
        }, 
        {
        value: 'jiangsu',
        label: 'Jiangsu',
        }],
      placeholder: 'Select an option'
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    }
  ];

  constructor(
    private modalService:NzModalService,
    //private ref1:TemplateRef<any>,
    public viewContainerRef:ViewContainerRef
  ) { }

  ngOnInit() {
   // console.log(this.ref)
  }



  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>):void{
    this.tplModal = this.modalService.create({    
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: null,
      nzMaskClosable: false,
      nzClosable: true,
    });
    console.log(tplContent)
  }

  createModal(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: CommonFormComponent,
      nzClosable: false,
      nzOnOk: () => new Promise((resolve) => window.setTimeout(resolve, 1000))
    });
  }

  destroyTplModal(): void {
   // this.tplModalButtonLoading = true;
    window.setTimeout(() => {
    //  this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

 

  click(id){
    console.log(id);
    console.log('self'+id);
   
    this.createModal();
   // this.tplModal(this.tplTitle,tplContent,tplFooter)
  }
  // 编辑框
  formSubmitted(value:any){
    console.log(value);
  }

  // 搜索框
  search(value){
    console.log(value)
  }

}
