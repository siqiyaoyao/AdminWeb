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
        { path: 'scomp', component: ScompComponent }
      ],
    },
      
    { path: 'demo', component: DemoComponent },
  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
