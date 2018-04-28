import { CheckData } from './../../comps/interfaces/check-data';
import { CheckboxComponent } from './../../comps/checkbox/checkbox.component';
import { CheckBoxDirective } from './../../comps/directives/check-box.directive';
import { RoleTree } from './../../models/tree.mode';
import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';
@Component({
  selector: 'app-role-control',
  templateUrl: './role-control.component.html',
  styleUrls: ['./role-control.component.less'],
  entryComponents:[CheckboxComponent],
})
export class RoleControlComponent implements OnInit {
  //@Input() checkBoxes:CkItem[];
  @ViewChild(CheckBoxDirective) cbHost:CheckBoxDirective;
  
  searchValue;
  nodes;
 
  constructor(
    private roleTree:RoleTree,
    private componentFactoryResolver:ComponentFactoryResolver,
    
  ) { }

  ngOnInit() {
   // console.log(this.roleTree.data)
    let mapData = Observable.from(this.roleTree.data).map(x=>{
      //console.log(x.title)
      return new NzTreeNode(x);   
    })
    .toArray()
    .subscribe(val =>{
      this.nodes = val;     
    })   

    console.log(this.nodes);

  }
  //----------树控制----------
  mouseAction(name: string, e: any): void {
    
    if(name =="click" ){
      console.log(e.node);    
      this._clickNodes(e);
    }
    if(name =="check" && !e.node.isChecked){
      this._checkNodes(e);
    }
    
  }
  private _clickNodes(e){
   // console.log("bingo");
    this._loadComponent(e);
  }

  private _checkNodes(e){
   // console.log("check");
    this.cbHost.viewContainerRef.clear();
  }
  

  //----------动态组件控制----------
  _loadComponent(e){
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(CheckboxComponent);
    let viewContainerRef = this.cbHost.viewContainerRef;
    viewContainerRef.clear();
    
    let componentRef = viewContainerRef.createComponent(componentFactory);
    let inputs:CheckData ={
      title:e.node.title,
      checkOptionsOne:[{
        label: '权限1',
        value: '1', 
        checked: true
       },
       {
        label: '权限2',
        value: '1', 
        checked: true
    },
   ] 
    };
    
    (<CheckboxComponent>componentRef.instance).data = inputs;

  }
}
