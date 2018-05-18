import { CommonTreeComponent } from './simples/common-tree/common-tree.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { MyAnnounceComponent } from './pages/my-announce/my-announce.component';
import { CommonFormComponent } from './simples/common-form/common-form.component';
import { CommonGridComponent } from './simples/common-grid/common-grid.component';
import { CommonTableComponent } from './simples/common-table/common-table.component';
import { ScompComponent } from './simples/scomp/scomp.component';
import { RoleControlComponent } from './pages/role-control/role-control.component';
import { FlowResizeComponent } from './simples/flow-resize/flow-resize.component';
import { FlowChartComponent } from './simples/flow-chart/flow-chart.component';
import { GuardService } from './../services/guard.service';
import { GetdataComponent } from './simples/getdata/getdata.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar.component';
import { DemoComponent } from './pages/demo/demo.component';


const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    //canActivate:[GuardService],
    children: [{
      path:'',
      //canActivateChild:[GuardService],
      children:[
        { path: 'test', component: GetdataComponent },
        { path: 'flowchart', component: FlowChartComponent },
        { path: 'flow', component: FlowResizeComponent },
        { path: 'role', component: RoleControlComponent },
        { path: 'scomp', component: ScompComponent },
        { path: 'table', component: CommonTableComponent },
        { path: 'grid', component: CommonGridComponent },
        { path: 'form', component: CommonFormComponent },
        { path: 'tree', component: CommonTreeComponent },
      ],
    },
    { path: 'oa',
    children:[
      { path: 'myAnnounce', component: MyAnnounceComponent },
    ]},
    { path: 'system',
    children:[
      { path: 'user', component: UserManageComponent },
    ]},
      
    { path: 'demo', component: DemoComponent },
  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
