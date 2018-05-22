import { Component, OnInit, ViewChild } from '@angular/core';
declare var Autodesk : any;
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.less']
})
export class ViewerComponent implements OnInit {
  private viewer:any ;
  @ViewChild('viewerContainer') viewerContainer: any; 
  constructor() { }

  ngOnInit() {

    var options = { env: 'Local' };
    var main = this;
    main.viewer = new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer.nativeElement,{});
  
    Autodesk.Viewing.Initializer(options, function () {
    //   main.viewer.start();
    //   main.viewer.tearDown();
    //     //再次初始化Viewr
    //   main.viewer.setUp(main.viewer.config);
    //   console.log(main.inerpath);
    //  // main.viewer.load(main.inerpath);
    main.viewer.initialize();
      main.viewer.load('../assets/models/1/3d.svf');
      

    });
  }

}
