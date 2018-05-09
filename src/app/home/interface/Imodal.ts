import { TemplateRef } from '@angular/core';


export abstract class Imodal {

 
    abstract createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>);

    abstract download?();
  
   
  }
  