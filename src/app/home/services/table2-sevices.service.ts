import { Injectable } from '@angular/core';
import { Itable } from '../interface/itable.service';

@Injectable()
export class Table2SevicesService implements Itable {

  constructor() { }
  click(id){
    console.log('T2222222 tableServices'+id);
    
  }

  download(){
    if(0){

    }
  }
}
