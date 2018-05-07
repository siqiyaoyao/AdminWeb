import { RoleTree } from './models/tree.mode';
import { Flow } from './models/flow.mode';

import { FormsModule } from '@angular/forms';
import { RestService } from './../services/rest.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar.component';
import { DemoComponent } from './pages/demo/demo.component';
import { GetdataComponent } from './simples/getdata/getdata.component';
import { FlowChartComponent } from './simples/flow-chart/flow-chart.component';
import { FlowResizeComponent } from './simples/flow-resize/flow-resize.component';
import { ProgressLinesComponent } from './comps/progress-lines/progress-lines.component';
import { RoleControlComponent } from './pages/role-control/role-control.component';
import { CheckboxComponent } from './comps/checkbox/checkbox.component';
import { CheckBoxDirective } from './comps/directives/check-box.directive';
import { ScompComponent } from './simples/scomp/scomp.component';
import { CommonGridComponent } from './simples/common-grid/common-grid.component';
import { CommonTableComponent } from './simples/common-table/common-table.component';





//import { GetdataComponent } from './simples/getdata/getdata.component';
//import { DemoComponent } from './pages/demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  declarations: [
    HomeComponent,
    SidebarComponent,
    DemoComponent,
    GetdataComponent,
    FlowChartComponent,
    FlowResizeComponent,
    ProgressLinesComponent,
    RoleControlComponent,
    CheckboxComponent,
    CheckBoxDirective,
    ScompComponent,
    CommonGridComponent,
    CommonTableComponent,

   
   
    
    
    //GetdataComponent,
    //DemoComponent,
    
    
  ],
  providers:[
    RestService,
   // RoleTree,
   Flow,
   RoleTree
  ]
})
export class HomeModule { }

