import { Injectable } from '@angular/core';

@Injectable()
export class S1Service {

  constructor(private testString:string) { }

  printMessage():void{
    console.log('Print Message');
  }

  sendMessage():string{
    return 'Send Message';
  }
}
