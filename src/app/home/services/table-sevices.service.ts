import { Injectable } from '@angular/core';
import { Itable } from '../interface/itable.service';

@Injectable()
export class TableSevicesService implements Itable {

  // constructor() { }
  click(id){
    console.log(id);
    console.log('Click tableServices'+id);
  }

  download(){
    
  }
}
