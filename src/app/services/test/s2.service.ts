import { S1Service } from './s1.service';
import { Injectable } from '@angular/core';

@Injectable()
export class S2Service {
  // private s1Service:S1Service
  constructor(private s1Service:S1Service) {
      // this.s1Service = s1Service;
   }

   showMessage():string{
     return this.s1Service.sendMessage();
   }

}
