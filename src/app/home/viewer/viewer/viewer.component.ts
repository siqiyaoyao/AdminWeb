import { viewerData } from './../../models/viewerData';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import * as THREE from 'three';

declare var Autodesk : any;
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.less']
})
export class ViewerComponent implements OnInit,OnDestroy {
  // viewer 相关数据注册
  private viewer:any;
  private viewerApp:any = null;
  private viewerInitialized  = false;
  private unsubscribe: Subject<boolean> = new Subject();
  private viewerOptions:any = null;
  private loadOptions = {
    placementTransform: new THREE.Matrix4(), 
    globalOffset:{x:0,y:0,z:0},
  };
  


  @ViewChild('viewerContainer') viewerContainer: any; 
  constructor(
    private viewerData:viewerData,
  ) { }

    // components
    // panel
    private ptitles =[
      {title:"模型选择"},
      {title:"模型操作"}
    ]

    // tree
    private treeConfig = this.viewerData.models;
    private checkTree = true;
    expand(){

    }
    click(){
    }
    checkNodes(e){
   
      e.node.origin.checked =!e.node.origin.checked;

      if(e.node.origin.checked){
        //console.log(e.node.origin);
        console.log(e.node.origin.url);
        this.viewerApp.loadModel(e.node.origin.url,this.loadOptions,(model)=>{
          //model.guid = this.guid();
          e.node.origin.viewerModel = model;
          //this.fitModelToView(model);
         // console.log(this.viewerApp.impl)
        });
      }

      if(!e.node.origin.checked){
        console.log( e.node.origin.viewerModel)
        this.viewerApp.impl.unloadModel( e.node.origin.viewerModel)
      }         
    }

    // 获得模型数据
    fitModelToView(model){
      let instanceTree = model.getData().instanceTree;
      console.log(model);
      console.log( model.getData().urn);
      console.log(model.getData());
      if(instanceTree){
        let rootId = instanceTree.getRootId();
        this.viewerApp.fitToView([rootId], model);
      }
    }
  

  ngOnInit() {

    this.initialViewer();
  }

  initialViewer(){
    let options = {env: 'Local'};
    Autodesk.Viewing.Initializer(options, () => {
      this.viewerApp = new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer.nativeElement,this.viewerOptions);
      this.viewerApp.initialize();
      //this.viewerApp.loadExtension();
    })
  }

 
  loadModels(){
    
    this.viewerApp.loadModel('../assets/models/5/1联_nwd/3d.svf',this.loadOptions);
  }
  loadModels2(){
  
    
    this.viewerApp.loadModel('../assets/models/5/2联_nwd/3d.svf',this.loadOptions);
    //this.viewerApp.loadModel('../assets/models/color/0/0.svf',loadOptions);
   //this.viewerApp.getData()
  }
   

  

  ngOnDestroy(){ // 里面页面的后续处理
    //清空拓展控件
    //this.unregisterBasicExtension();

    // 清空viewer
    if(this.viewerApp){
      const viewer = this.viewerApp;
      viewer.tearDown();
      viewer.uninitialize();
    }

    this.viewerApp = null;
    this.viewerInitialized = false;

    this.unsubscribe.next();
    this.unsubscribe.complete();

    // 清空树数据


  }

 
  // private unregisterBasicExtension() {
  //   BasicExtension.unregisterExtension();
  //   this.basicExt = null;
  // }
}
