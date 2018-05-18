import { Itree } from './../../interface/Itree';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoleTree } from '../../models/tree.mode';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';
import { NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: 'app-common-tree',
  templateUrl: './common-tree.component.html',
  styleUrls: ['./common-tree.component.less']
})
export class CommonTreeComponent implements OnInit {
  @Output() searchValue;
  @Output() nodes;
  @Input() config:Array<Itree> 
  @Input() isCheckBox
 
  @Output() mouseActionClick:EventEmitter<any> = new EventEmitter<any>(); 
  @Output() mouseActionExpand:EventEmitter<any> = new EventEmitter<any>(); 
  @Output() mouseActionCheck:EventEmitter<any> = new EventEmitter<any>(); 
  @Output() mouseActionDblclick:EventEmitter<any> = new EventEmitter<any>(); 
  @Output() mouseActionSearch:EventEmitter<any> = new EventEmitter<any>(); 


  constructor(
    private roleTree:RoleTree
  ) { }

  ngOnInit() {
    //this.isCheckBox=true;
    
    if(this.config){
      let mapData = Observable.from(this.config).map(x=>{
          //console.log(x.title)
          return new NzTreeNode(x);   
        })
        .toArray()
        .subscribe(val =>{
          this.nodes = val;     
        })
    }
  }

  //----------树控制----------
  mouseAction(name: string, e: any): void {
    
    if(name =="click" ){
      
      this.mouseActionClick.emit(e);
     
    }
    if(name =="check"){
      this.mouseActionCheck.emit(e);
    }
    if(name =="expand"){
      this.mouseActionExpand.emit(e);
    }
    if(name =="dblclick"){
      this.mouseActionDblclick.emit(e);
    }
    if(name =="search"){
      this.mouseActionSearch.emit(e);
    }
    
  }
  private _clickNodes(e){
   // console.log("bingo");
    
  }

  private _checkNodes(e){
   // console.log("check");
  
  }
  
}
