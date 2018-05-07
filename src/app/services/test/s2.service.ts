import { Isendable } from './../interface/isendable';
// v1
//import { S1Service } from './s1.service';
import { Injectable } from '@angular/core';

@Injectable()
export class S2Service {
  // v1
  // private s1Service:S1Service
  constructor(private smsService:Isendable) {
      // v1
      // this.s1Service = s1Service;
   }

   showMessage():string{
     return this.smsService.sendMessage();
   }

}
