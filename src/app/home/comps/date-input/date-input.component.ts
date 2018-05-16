import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.less']
})
export class DateInputComponent implements OnInit {
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
  config:any;
  group:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
