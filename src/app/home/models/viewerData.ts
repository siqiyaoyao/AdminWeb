export class viewerData {
    public models = [
        {
            title   : '标段五',
            key     : 'model5',
            children: [
            {
              
              title   : '1联',
              key     : '11',
              url     : '../assets/models/5/1联_nwd/3d.svf',
              checked : false, 
              viewerModel :null,            
            },
            {
                title   : '2联',
                key     : '12',
                url     : '../assets/models/5/2联_nwd/3d.svf',
                checked : false,
                viewerModel :null,
            },
            {
                title   : '3联',
                key     : '13',
                url     : '../assets/models/5/3联_nwd/3d.svf',
                checked : false,
                viewerModel :null,
            },
            {
                title   : '4联',
                key     : '14',
                url     : '../assets/models/5/4联_nwd/3d.svf',
                checked : false,
                viewerModel :null,
            },
            {
                title   : '5联',
                key     : '15',
                url     : '../assets/models/5/5联_nwd/3d.svf',
                checked : false,
                viewerModel :null,
            },
            {
                title   : '6联',
                key     : '16',
                url     : '../assets/models/5/5联_nwd/3d.svf',
                checked : false,
                viewerModel :null,
            },
            {
                title   : '7联',
                key     : '17',
                url     : '../assets/models/5/6联_nwd/3d.svf',
                checked : false,
                viewerModel :null,
            },
            {
                title   : '8联',
                key     : '18',
                url     : '../assets/models/5/8联_nwd/3d.svf',
                checked : false,
                viewerModel :null,
            },
        ]
        }
    ]
    public panels = [
        {
          active     : true,
          disabled   : false,
          name       : 'This is panel header 1',
          childPannel: [
            {
              active  : false,
              disabled: true,
              name    : 'This is panel header 1-1'
            }
          ]
        },
        {
          active  : false,
          disabled: true,
          name    : 'This is panel header 2'
        },
        {
          active  : false,
          disabled: false,
          name    : 'This is panel header 3'
        }
      ];
}