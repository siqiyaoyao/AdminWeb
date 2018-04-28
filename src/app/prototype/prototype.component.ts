import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.less']
})
export class PrototypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var map = new AMap.Map('container', {
      center: [117.000923, 36.675807],
      zoom: 6
    });
    map.plugin(["AMap.ToolBar"], function () {
      map.addControl(new AMap.ToolBar());
    });
    map.setMapStyle('amap://styles/darkblue');

    const data = [
      { genre: 'A', sold: 245 },
      { genre: 'B', sold: 115 },
      { genre: 'C', sold: 120 },
      { genre: 'D', sold: 320 },
      { genre: 'E', sold: 150 },
      { genre: 'F', sold: 180 }
    ]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
    // Step 1: 创建 Chart 对象
    const chart = new G2.Chart({
      container: 'mountNode', // 指定图表容器 ID
      width: 400, // 指定图表宽度
      height: 250, // 指定图表高度
      padding: [20, 20, 60, 30],
      background: {
        fill: '#000000', // 图表背景色
        fillOpacity: '0.65', // 图表背景透明度
        radius: '10' // 图表圆角大小 
      }
    });
    // 载入数据源
    chart.source(data);
    //x y 置换
    chart.coord().transpose();
    // 创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval().position('genre*sold').color('genre')
    // 渲染图表
    chart.render();

    //饼图
    const { DataView } = DataSet;
    const data2 = [
      { item: 'A', count: 40 },
      { item: 'B', count: 21 },
      { item: 'C', count: 17 },
      { item: 'D', count: 13 },
      { item: 'E', count: 9 }
    ];
    const dv = new DataView();
    dv.source(data2).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    const chart2 = new G2.Chart({
      container: 'mountNode2',
      //forceFit: true,
      height: 300,
      width: 400,
      animate: false,
      padding: [10, 10, 40, 30],
      background: {
        fill: '#000000', // 图表背景色
        fillOpacity: '0.65', // 图表背景透明度
        radius: '10' // 图表圆角大小 
      }
    });
    chart2.source(dv, {
      percent: {
        formatter: val => {
          val = (val * 100) + '%';
          return val;
        }
      }
    });
    chart2.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    });
    chart2.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    // 辅助文本
    chart2.guide().html({
      position: ['50%', '50%'],
      html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
      alignX: 'middle',
      alignY: 'middle'
    });
    const interval = chart2.intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + val;
        }
      })
      .tooltip('item*percent', (item, percent) => {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });
    chart2.render();
    interval.setSelected(dv.rows[0]);
  }
}


