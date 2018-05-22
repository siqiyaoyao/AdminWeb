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

    main.viewer.initialize();
      main.viewer.load('../assets/models/1/3d.svf');
      

    });
  }

}
