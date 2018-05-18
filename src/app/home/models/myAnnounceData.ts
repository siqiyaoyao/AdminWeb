export class myAnnounceData {
    public config =[
        {
            type: 'input',
            label: '标题',
            name: 'title',
            placeholder: '请输入标题',
            temp:[]
        },
        {
            type: 'select',
            label: '类型',
            name: 'type',
            options: [
              {
              value: 'a1',
              label: '会议通告',
              }, 
              {
              value: 'a2',
              label: '奖惩通告',
              }],
            placeholder: '选择类型',
            temp:[]
          },
    ]

    public tableTitle = [
        {key:'title',
         value:'标题'  
        },
        {key:'type',
        value:'类型' },
        {key:'state',
        value:'状态' },
        {key:'checkState',
        value:'查阅状态' },
        {key:'updateTime',
        value:'更新时间' }

    ]

    public tableData = [
        {
            title    : '1',
            type   : '会议通知',
            state    : '发布',
            checkState: '已读',
            updateTime: '2018-05-17 11:07:34',
            checked:false
          },
          {
            title    : '2',
            type   : '会议通知',
            state    : '发布',
            checkState: '已读',
            updateTime: '2018-05-17 11:07:34',
            checked:false
      
          },
          {
            title    : '3',
            type   : '会议通知',
            state    : '发布',
            checkState: '已读',
            updateTime: '2018-05-17 11:07:34',
            checked:false
          }
    ]
    public modal =[
        {
            type: 'button',
            label: '提交',
            name: 'submit'
        }
    ]
    
    constructor(){
       
    }
}