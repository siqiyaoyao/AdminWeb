import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.less']
})
export class FormInputComponent implements OnInit {
  config:any;
  group:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
