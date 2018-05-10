import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.less']
})
export class FormSelectComponent implements OnInit {
  config:object;
  group:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
