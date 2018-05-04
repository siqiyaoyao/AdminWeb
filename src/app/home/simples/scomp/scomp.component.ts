import { S1Service } from './../../../services/test/s1.service';
import { S2Service } from './../../../services/test/s2.service';
import { Component, OnInit } from '@angular/core';


class AzureSMSService extends S1Service {

  printMessage(): void {
    console.log('Print Azure Message');
  }

  sendMessage(): string {
    return 'Send Azure Message';
  }
}
@Component({
  selector: 'app-scomp',
  templateUrl: './scomp.component.html',
  styleUrls: ['./scomp.component.less']
})
export class ScompComponent implements OnInit {
  private s2Service:S2Service;
  title = 'scomp works!'
  constructor() {
    this.s2Service = new S2Service(new AzureSMSService('11'))
   }

  ngOnInit() {
    this.title = this.s2Service.showMessage();
  }

}
