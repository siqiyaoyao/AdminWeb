import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Iform } from '../../interface/Iform';


@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.less']
})
export class CommonFormComponent implements OnInit {

 
  @Input()
  config: any[] = []; // 定义为输入属性，从外部接收任意类型的数据
  @Output() submitted:EventEmitter<any> = new EventEmitter<any>(); // 输出事件

  form: FormGroup; // 必选对象 type 类型， name 控件的name属性

  constructor(
    private fb: FormBuilder,
   // private iform:Iform,
  ) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control(''))); // 动态加入
    return group;
  }
  submitForm(form){

  }

}
