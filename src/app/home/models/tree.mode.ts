
export class RoleTree {
    public data =[
      {
      title   : 'root1',
      key     : '1001',
      children: [
        {
          title   : 'child1',
          key     : '10001',
          children: [
            {
              title   : 'child1.1',
              key     : '100011',
              children: []
            },
            {
              title   : 'child1.2',
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
          title : 'child2',
          key   : '10002',
          isLeaf: true
        }
      ]
    },
    {
      title   : 'root2',
      key     : '1002',
      children: [
        {
          title   : 'child2.1',
          key     : '10021',
          children: []
        },
        {
          title     : 'child1.2',
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
    title: 'root3',
    key  : '1003'
    }
  ]
    constructor(){
        
    }

   
}