import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-common-search',
  templateUrl: './common-search.component.html',
  styleUrls: ['./common-search.component.less']
})
export class CommonSearchComponent implements OnInit {
  @Output() searched:EventEmitter<any> = new EventEmitter<any>();  
  @Input() config: any[] = [];
  @Input() buttionOption

  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? (index < 8) : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {
  }

 

  ngOnInit() {
    //this.validateForm = this.fb.group({});
    // for (let i = 0; i < 10; i++) {
    //   this.controlArray.push({ index: i, show: i < 8 });
    //   this.validateForm.addControl(`field${i}`, new FormControl());
    // }
    console.log(this.config)
    this.validateForm = this.fb.group({});
    for (let i = 0; i < this.config.length; i++) {
      this.config[i].temp.push({ index: i, show: i < 8 });
      console.log(this.config[i].temp);
      this.validateForm.addControl(this.config[i].name, new FormControl());
    }
    
    //this.validateForm = this.createGroup();
  }

  createGroup() {
    console.log(this.config)
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control(''))); // 动态加入
    return group;
  }
}
