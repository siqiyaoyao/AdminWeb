import { Iprintable } from './../interface/iprintable';
import { Injectable } from '@angular/core';
import { Isendable } from '../interface/isendable';

@Injectable()
export class S1Service implements Iprintable, Isendable {
  // v1
  //constructor(private testString:string) { }
  
  printMessage():void{
    console.log('Print Message');
  }

  sendMessage():string{
    return 'Send Message';
  }
}
