import { myAnnounceData } from './models/myAnnounceData';
import { RoleTree } from './models/tree.mode';
import { Flow } from './models/flow.mode';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CommonFormComponent } from './simples/common-form/common-form.component';
import { FormInputComponent } from './comps/form-input/form-input.component';
import { FormSelectComponent } from './comps/form-select/form-select.component';
import { FormButtonComponent } from './comps/form-button/form-button.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { CommonSearchComponent } from './simples/common-search/common-search.component';
import { DateInputComponent } from './comps/date-input/date-input.component';
import { MyAnnounceComponent } from './pages/my-announce/my-announce.component';






//import { GetdataComponent } from './simples/getdata/getdata.component';
//import { DemoComponent } from './pages/demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
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
    DynamicFieldDirective,
    ScompComponent,
    CommonGridComponent,
    CommonTableComponent,
    CommonFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    DynamicFieldDirective,
    CommonSearchComponent,
    DateInputComponent,
    MyAnnounceComponent,
 

    //GetdataComponent,
    //DemoComponent,
    
    
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    DateInputComponent
  ],
  providers:[
    RestService,
   // RoleTree,
   Flow,
   RoleTree,
   //测试数据
   myAnnounceData
  ]
})
export class HomeModule { }

