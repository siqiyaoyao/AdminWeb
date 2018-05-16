
import { FormSelectComponent } from './../comps/form-select/form-select.component';
import { FormButtonComponent } from './../comps/form-button/form-button.component';
import { FormGroup } from '@angular/forms';
import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { FormInputComponent } from '../comps/form-input/form-input.component';
import { DateInputComponent } from '../comps/date-input/date-input.component';

//建立映射
const components ={
  button:FormButtonComponent,
  input:FormInputComponent,
  select:FormSelectComponent,
  date:DateInputComponent
}

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  config;

  @Input()
  group:FormGroup;

  component:any;

  constructor(
    private resolver:ComponentFactoryResolver,//创建组件工厂
    private container:ViewContainerRef //创建视图容器
  ) { }

  ngOnInit(){
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;

  }

}
