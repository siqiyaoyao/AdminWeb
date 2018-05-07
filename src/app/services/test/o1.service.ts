import { Injectable } from '@angular/core';
import { Iprintable } from '../interface/iprintable';
import { Isendable } from '../interface/isendable';

@Injectable()
export class O1Service implements Iprintable,Isendable{

  constructor() { }

  printMessage(){
    console.log("Print O1 Message")
  }

  sendMessage():string{
    return'Send O1 Message'
  }
}
