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
  entryComponents:[RoleControlComponent]
})
export class CommonGridComponent implements OnInit,Itable {
  //modal
  tplModal: NzModalRef;
  tpl:TemplateRef<any>;
  @ViewChild('template') ref :TemplateRef<any>;

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

  ngAfterViewInit(){
    //console.dir(this)
    console.log(this.viewContainerRef)
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>):void{
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: true,
      nzOnOk: () => console.log('Click ok')
    });
  }

  createModal(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: RoleControlComponent,
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
    console.log(this.tpl)
    this.createModal();
   // this.tplModal(this.tplTitle,tplContent,tplFooter)
  }


}
