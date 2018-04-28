import { Flow } from './../../models/flow.mode';

import { ProgressLinesComponent } from './../../comps/progress-lines/progress-lines.component';
import { Component, OnInit, ViewContainerRef ,ComponentFactoryResolver, ComponentRef, Input ,Injector,ApplicationRef} from '@angular/core';
//import  G6  from '@antv/g6'; 
declare var G6 :any
@Component({
  selector: 'app-flow-chart',
  templateUrl: './flow-chart.component.html',
  entryComponents:[ProgressLinesComponent],
  styleUrls: ['./flow-chart.component.less']
})
export class FlowChartComponent implements OnInit {
  //@Input() ProgressLinesComponent
 // comRef:ComponentRef<ProgressLinesComponent>
  
  comp:any
  
  private netClass:any;
  private graph: any;
  private injector: Injector
  private appRef: ApplicationRef

  constructor(
    private resolver:ComponentFactoryResolver,
    private ViewContainerRef:ViewContainerRef,
    private flow:Flow,
  
  ){}

  loadComp(num){
    const Component =  this.resolver.resolveComponentFactory(ProgressLinesComponent);
    this.comp = this.ViewContainerRef.createComponent(Component);
    console.log(this.comp.instance);
    this.comp.instance.percent = num;
    console.log(this.comp);
  }
  data;


  ngOnInit() {
    this.data = this.flow.data;
    var net;
    const Util = G6.Util;
    //----修改全局标签样式-----
    G6.Global.edgeLabelStyle = {
      fill: '#fff',
      textAlign: 'center',
      textBaseline: 'middle'
    };
    G6.Global.edgeLabelRectStyle = {
      fill: 'rgba(0, 12, 23, 0)'
   };
   //------------------------
   var main = this;
   
    G6.registerNode('customNode', {
      cssSize: true, // 不使用内部 size 作为节点尺寸
      getHtml: function(cfg){
        const model = cfg.model;
        const container = Util.createDOM('<div class="node-container"></div>');
        const title = Util.createDOM(`<div class="node-container-title node-container-${model.status}">
          ${model.name}
        </div>`);
        const progressLine = Util.createDOM(
          
          `<div class="node-container-list">
          </div>
          `
        );
        container.appendChild(title);
        // const list = Util.createDOM(`<div class="node-container-list">
        //   <span>数量：</span>
        //   <span>${model.count}</span>
        // </div>`);
        // const botton = Util.createDOM(`<button class="node-delete">X</button>`);
        // botton.addEventListener('click', function(){
        //   console.log(net.find(model.id));
        //  //this.net.remove(this.net.find(model.id));
        // });
        // container.appendChild(botton);
      
       main.loadComp(model.percent);
       let host = document.createElement("div");
       host.appendChild((main.comp.hostView as any).rootNodes[0]);
       container.appendChild(host);

        // container.appendChild(list);
        return container;
      }
    }, 'html');

    //设置画布
    net = new G6.Net({
      id: 'c1',
     // width: 600,
      height: 1600,
     // height: window.innerHeight,
      fitView: 'tc', // 图形首次渲染的对齐模式
      grid:null
    });
    
   

    net.removeBehaviour(['resizeNode','wheelZoom']);//'dragEdge','dragNode'
    net.source(this.data.nodes, this.data.edges);
    net.node()
       .shape('customNode')
       .style({
         stroke: null // 去除默认边框
       });
    net.edge().shape('arrow');
    net.tooltip({
      title: '标题', // @type {String} 标题
      split: '=>',  // @type {String} 分割符号
      dx: 10,       // @type {Number} 水平偏移
      dy: 10        // @type {Number} 竖直偏移
    });
    net.node().tooltip('name');
    net.edge().label('lable').style(obj=>{
      if(obj.type ==1){ // 修改线条样式
        return {
          lineDash: [4, 4]
        }
      }
    })
    
    
    // 渲染
    net.render();
    //事件
    net.on('itemclick', ev => {
     // alert("击中" + ev.item.get('model').id + "!");
      console.log(ev.item.get('model'));
    });
    this.netClass = net;

 
  }

  private addItems(){
   
    let item = this.netClass.find('22139lzd')
    console.log(item)
    this.netClass.remove(item);
  }
}
