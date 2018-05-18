import { Itree } from './../interface/Itree';

export class RoleTree {
    public data:Array<Itree> =[
      {
      title   : '总公司',
      key     : '1001',
      children: [
        {
          title   : '行政部',
          key     : '10001',
          children: [
            {
              title   : '小组1',
              key     : '100011',
              children: []
            },
            {
              title   : '小组2',
              key     : '100012',
              checked : true,
              children: [
                {
                  title : 'grandchild1.2.1',
                  key   : '1000121',
                  isLeaf: true
                }
              ]
            }
          ]
        },
        {
          title : '总经办',
          key   : '10002',
          isLeaf: true
        }
      ]
    },
    {
      title   : '市场部',
      key     : '1002',
      children: [
        {
          title   : '市场1',
          key     : '10021',
          children: []
        },
        {
          title     : '市场2',
          key       : '10022',
          selectable: false,
          children  : [
            {
              title: 'grandchild2.2.1',
              key  : '100221'
            }
          ]
        }
      ]
    },
    {
    title: '技术部',
    key  : '1003'
    }
  ]
    constructor(){
        
    }

   
}