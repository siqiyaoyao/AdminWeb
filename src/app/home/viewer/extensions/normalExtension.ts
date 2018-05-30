import { OnInit, Injectable } from '@angular/core';
declare var Autodesk : any;
@Injectable()
export class normalExtension {
   public viewer:any
    constructor(viewer, options) {
        this.viewer = viewer;
        console.log(viewer);
       
    }

    public  load(){
        console.log("load normalExt");
        this.viewer.addEventListener(
            Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, //多模型聚合后的选择事件
            this.onSelectionChanged)
        return true
    } 
    onSelectionChanged(){
        //var currSelection = this.viewer.getSelection();// 获得选中的模型数组
        console.log("change");
    }

    public  unload(){
        console.log("unload normalExt");
        return true
    }

    public static register(){
        console.log("XXXXXXXXXXXXXXXXXXXX");
       
    }
    
}
Autodesk.Viewing.theExtensionManager.registerExtension(
    "normalExtension",
    normalExtension)

