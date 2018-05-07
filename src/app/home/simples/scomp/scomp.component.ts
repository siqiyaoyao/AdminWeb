
import { S2Service } from './../../../services/test/s2.service';
import { Component, OnInit } from '@angular/core';
import { SMSServiceProvider } from '../../../services/test/SMSServiceProvider';


// class AzureSMSService extends S1Service {

//   printMessage(): void {
//     console.log('Print Azure Message');
//   }

//   sendMessage(): string {
//     return 'Send Azure Message';
//   }
// }
@Component({
  selector: 'app-scomp',
  templateUrl: './scomp.component.html',
  styleUrls: ['./scomp.component.less'],
  // v1
  // providers:[
  //   {provide:S1Service,useClass:S1Service},
  //   {provide:S2Service,useClass:S2Service}
    
  // ]
  providers:[
    S2Service,
    SMSServiceProvider,
   // {provide:Isendable,useClass:S1Service}, v2
    
  ]
})
export class ScompComponent implements OnInit {
 // v1
 // private s2Service:S2Service;
  title = 'scomp works!'
  // v1
  // constructor() {
  //   this.s2Service = new S2Service(new AzureSMSService('11'))
  //  }

   constructor(private s2Service:S2Service) {
   }


  ngOnInit() {
    this.title = this.s2Service.showMessage();
  }

}
