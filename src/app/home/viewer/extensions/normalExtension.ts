import { OnInit, Injectable } from '@angular/core';
declare var Autodesk: any;
@Injectable()
export class normalExtension {
   public viewer: any;
   app: any;
   onSlectionBind: any;
    constructor(viewer, options) {
        this.viewer = viewer;
        console.log(viewer);

    }

    public  load() {
        console.log('load normalExt');
        console.log(this.viewer);
        const app = this.viewer;
        this.onSlectionBind = this.onSelectionChanged.bind(this);
        this.viewer.addEventListener(
            Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, // 多模型聚合后的选择事件
            this.onSlectionBind);
        return true;
    }
    onSelectionChanged() {
        const currSelection = this.viewer.getAggregateSelection(); // 获得选中的模型数组
        const viewport = this.viewer.navigation.getScreenViewport();
        const model = currSelection[0].model;
        let fragIdCode;

        const dbId = currSelection[0].selection[0];
        // 获取模型树
        const it = this.viewer.model.getData().instanceTree;
        // 遍历此对象含有的fragment id
        it.enumNodeFragments(dbId, (fragId) => {
                console.log('fragId: ' + fragId);
                fragIdCode = fragId;
                console.log('fragId: ' + fragIdCode);
            },
            false);




        const fragId = currSelection;
        console.log(viewport);
        console.log(this.viewer.getState());
        console.log( currSelection);
        console.log( currSelection[0].selection[0]);
        const Render = this.viewer.impl.getFragmentProxy(
            model,
            fragIdCode);
        console.log(Render);
        Render.getAnimTransform();
        console.log(model);

    }

    public  unload() {
        console.log('unload normalExt');
        return true;
    }

    public static register() {
        console.log('XXXXXXXXXXXXXXXXXXXX');

    }

}
Autodesk.Viewing.theExtensionManager.registerExtension(
    'normalExtension',
    normalExtension);

