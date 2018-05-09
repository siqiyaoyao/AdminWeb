import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { Injectable, TemplateRef } from '@angular/core';
import { Imodal } from '../interface/Imodal';


@Injectable()
export class ModalServicesService implements Imodal{
   //modal
   tplModal: NzModalRef;
   constructor(
    private modalService:NzModalService,
  ) { }
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>){

  }

}
