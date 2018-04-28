export class Flow {
    public data= {
      "nodes": [
        {
          "id": "1",
          "name": "流程一",
          "count": 222190,
          "x": 200,
          "y": 160,
          "status": 'success',
          "percent":10
        },
        {
          "id": "2",
          "name": "流程二",
          "count": 2221902,
          "x": 200,
          "y": 260,
          "status": 'success',
          "percent":20,
  
  
        },
        {
          "id": "3",
          "name": "流程三",
          "count": 221231,
          "x": 200,
          "y": 360,
          "status": 'fail',
          "percent":30,
        },
        {
          "id": "4",
          "name": "流程4",
          "count": 222190,
          "x": 200,
          "y": 460,
          "status": 'success',
          "percent":40
        },
        {
          "id": "5",
          "name": "流程5",
          "count": 2221902,
          "x": -340,
          "y": 460,
          "status": 'success',
          "percent":50
        },
        {
          "id": "6",
          "name": "流程6",
          "count": 221231,
          "x": -160,
          "y": 460,
          "status": 'fail',
          "percent":60
        },
        {
          "id": "7",
          "name": "流程7",
          "count": 222190,
          "x": 20,
          "y": 460,
          "status": 'success',
          "percent":70
        },
        {
          "id": "8",
          "name": "流程8",
          "count": 2221902,
          "x": -250,
          "y": 560,
          "status": 'success',
          "percent":80,
        },
        {
          "id": "9",
          "name": "流程9",
          "count": 221231,
          "x": -70,
          "y": 560,
          "status": 'fail',
          "percent":90,
        },
        {
          "id": "10",
          "name": "流程10",
          "count": 222190,
          "x": 380,
          "y": 460,
          "status": 'success',
          "percent":100
        },
        {
          "id": "11",
          "name": "流程11",
          "count": 2221902,
          "x": 200,
          "y": 560,
          "status": 'success',
          "percent":100
        },
        {
          "id": "12",
          "name": "流程12",
          "count": 221231,
          "x": 380,
          "y": 560,
          "status": 'fail',
          "percent":100
        },
        {
          "id": "13",
          "name": "流程13",
          "count": 222190,
          "x": 560,
          "y": 560,
          "status": 'success',
          "percent":100
        },
        {
          "id": "14",
          "name": "流程14",
          "count": 2221902,
          "x": 740,
          "y": 560,
          "status": 'success',
          "percent":100
        },
        {
          "id": "19",
          "name": "流程19",
          "count": 221231,
          "x": 655,
          "y": 670,
          "status": 'fail',
          "percent":100
        }
      ],
      "edges": [
        {
          "source": "1",
          "target": "2",
          "id": "e1",
          "precent": 100,
        },
        {
          "source": "2",
          "target": "3",
          "id": "e2",
          "precent": 80
        },
        {
          "source": "3",
          "target": "4",
          "label":"重要流程",
          "id": "e3",
          "precent": 80
        },
        {
          "source": "4",
          "target": "11",
          "id": "e4",
          "precent": 80
        },
        {
          "source": "10",
          "target": "12",
          "id": "e5",
          "precent": 80
        },
        {
          "source": "13",
          "target": "19",
          "id": "e6",
          "precent": 80,
          "controlPoints":[
            {
              "x":560,
              "y":585
            },
            {
              "x":560,
              "y":608
            },
            {
              "x":655,
              "y":608
            },
            {
              "x":655,
              "y":644
            },
          ]
        },
        {
          "source": "14",
          "target": "19",
          "id": "e7",
          "precent": 80,
          "controlPoints":[
            {
              "x":740,
              "y":585
            },
            {
              "x":740,
              "y":608
            },
            {
              "x":655,
              "y":608
            },
            {
              "x":655,
              "y":644
            },
          ]        
        },
        {
          "source": "5",
          "target": "8",
          "id": "e8",
          "precent": 80,
          "type":1,
          "controlPoints":[
            {
              "x":-340,
              "y":460
            },
            {
              "x":-340,
              "y":500
            },
            {
              "x":-160,
              "y":500
            },
           
          ]        
        },
  
  
  
      ]
    }
    constructor(){
       
    }
}