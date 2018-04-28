import { Component, OnInit } from '@angular/core';
declare var G6 :any
@Component({
  selector: 'app-flow-resize',
  templateUrl: './flow-resize.component.html',
  styleUrls: ['./flow-resize.component.less']
})
export class FlowResizeComponent implements OnInit {

  constructor() { }
  //数据源
  data = {
    "nodes": [
      {
        "id":"d62q1519",
        "shape":"table",
        "title":"Division",
        "type":"B",
        "x":255,
        "y":116,
        "fields":[{       
        "name": "DivisionName",        
        "type": 'success',
        "key": '1'
        },{
        "name": "DivisionName2",        
        "type": 'success',
        "key": '2'
        }
        ]     
      },
      {
        "id":"d62d1519",
        "shape":"table",
        "title":"Customer",
        "type":"C",
        "x":770,
        "y":168,
        "fields":[{       
        "name": "c1",        
        "type": 'success',
        "key": '1'
        },{
        "name": "c2",        
        "type": 'success',
        "key": '2'
        }
        ]     
      },
      {
        "id":"d62d1569",
        "shape":"table",
        "title":"Em11",
        "type":"B",
        "x":424,
        "y":389,
        "fields":[{       
        "name": "DivisionName",        
        "type": 'success',
        "key": '1'
        },{
        "name": "DivisionName2",        
        "type": 'success',
        "key": '2'
        }
        ]     
      },
    ],
    "edges": [
      {      
        "id": "d6cb23c5",
        "relation":"service",
        "shape":"arrow",
        "source":"d62d1569",
        "sourceAnchor":2,
        "target":"d62d1519",
        "controlPoints":[
          {
            "x":568,
            "y":371
          },
          {
            "x":769,
            "y":372
          },
          {
            "x":770,
            "y":213
          },

        ]

      },
      {      
        "id": "8102ce90",
        "relation":"contain",
        "shape":"arrow",
        "source":"d62q1519",
        "sourceAnchor":2,
        "target":"d62d1569",
        "controlPoints":[
          {
            "x":255,
            "y":161
          },
          {
            "x":255,
            "y":309
          },
          {
            "x":424,
            "y":309
          },
          {
            "x":424,
            "y":333
          },

        ]

      },
      {      
        "id": "627177d9",       
        "shape":"arrow",
        "source":"d62d1569",
        "sourceAnchor":3,
        "targetAnchor":1,
        "target":"d62d1519",
        "controlPoints":[
          {
            "x":279,
            "y":391
          },
          {
            "x":235,
            "y":391
          },
          {
            "x":235,
            "y":371
          },
          {
            "x":279,
            "y":371
          },

        ]

      },
    ]
  }
  ngOnInit() {
    
    const Util = G6.Util;
    G6.registerNode('table', {
    draw(cfg, group){
      const x = cfg.x;
      const y = cfg.y;
      const model = cfg.model;
      const fields = model.fields;
      const backRect = group.addShape('rect', {
        attrs: {
          stroke: 'blue',
          fill: cfg.color
        }
      });
      const nameGroup = group.addGroup();
      const typeGroup = group.addGroup();
      const keyGroup = group.addGroup();
      const lineHeight = 20;
      const marginRight = 10;
      const padding = 6;
      const l = fields.length;
      let fontHeight;
      let anchorPoints = [];
      let title;
      let titleBox;
      let nameBox;
      let typeBox;
      let keyBox;
      let width;
      let height;
      let splitLine;

      title = group.addShape('text', {
        attrs: {
          x: x,
          y: y,
          text: model.title,
          fill: '#333',
          textBaseline: 'top',
          textAlign: 'center'
        }
      });

      splitLine = group.addShape('line', {
        attrs: {
          stroke: '#fff'
        }
      });

      Util.each(fields, (field, i)=>{
        nameGroup.addShape('text', {
          attrs:{
            x: x,
            y: y + 20 * i,
            text: field.name,
            fill: '#333',
            textBaseline: 'top'
          }
        });
        typeGroup.addShape('text', {
          attrs:{
            x: x,
            y: y + 20 * i,
            text: field.type,
            fill: '#333',
            textBaseline: 'top'
          }
        });
        keyGroup.addShape('text', {
          attrs:{
            x: x,
            y: y + 20 * i,
            text: field.key,
            fill: '#333',
            textBaseline: 'top'
          }
        });
      });
      titleBox = title.getBBox();
      nameBox = nameGroup.getBBox();
      typeBox = typeGroup.getBBox();
      keyBox = keyGroup.getBBox();
      width = nameBox.width + typeBox.width + keyBox.width + 3 * marginRight + 2*padding;
      height = Math.max(nameBox.height, typeBox.height, keyBox.height) + 4 * padding + titleBox.height;
      fontHeight = nameGroup.get('children')[0].getBBox().height;

      title.translate(0, -height/2 + padding);
      nameGroup.translate(-width/2 + padding, -height/2 + titleBox.height + 3 * padding);
      typeGroup.translate(-width/2 + nameBox.width + marginRight + padding, -height/2 + titleBox.height + 3 * padding);
      keyGroup.translate(-width/2 + nameBox.width + typeBox.width + 2 * marginRight + padding, -height/2 + titleBox.height + 3 * padding);
      splitLine.attr({
        x1: cfg.x - width/2,
        y1: cfg.y - height/2 + 2 * padding + titleBox.height,
        x2: cfg.x + width/2,
        y2: cfg.y - height/2 + 2 * padding + titleBox.height
      });
      backRect.attr({
        x: x-width/2,
        y: y-height/2,
        width: width,
        height: height,
        stroke: 'blue',
        fill: cfg.color
      });
      Util.each(fields, (field, i)=>{
        const r = ( titleBox.height + i*(nameBox.height + lineHeight - fontHeight)/l + fontHeight/2 + 3 * padding)/height;
        anchorPoints.push([0, r]);
        anchorPoints.push([1, r]);
      });
      group.set('anchorPoints', anchorPoints);
      return backRect;
    },
    getAnchorPoints(cfg, group){
      const anchorPoints = group.get('anchorPoints');
      anchorPoints.unshift([0.5, 0]);   // 上中
      anchorPoints.push([0.5, 1]);      // 下中
      return anchorPoints;
    }
  });
  const net = new G6.Net({
    id: 'mountNode',            // 容器ID
    height: window.innerHeight,         // 画布高
    fitView: 'autoZoom', // 自动缩放
    grid:null
  });
  net.source(this.data.nodes, this.data.edges);
  net.node().color('type', val=>{
    if(val === "B"){
      return G6.Global.colors[0];
    }
    if(val === "C"){
      return G6.Global.colors[1];
    }
  });
  net.edge().label('relation');

  net.tooltip({
    title: '标题', // @type {String} 标题
    split: '=>',  // @type {String} 分割符号
    dx: 10,       // @type {Number} 水平偏移
    dy: 10        // @type {Number} 竖直偏移
  });
  net.node().tooltip('title');


  net.render();

  net.on('itemclick', ev => {
    alert("击中" + ev.item.get('model').title + "!");
  });
  //this.netClass = net;

  }

}
