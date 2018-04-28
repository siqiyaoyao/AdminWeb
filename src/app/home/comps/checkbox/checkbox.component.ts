import { CheckData } from './../interfaces/check-data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {
  @Input() data: CheckData;
  constructor() {
    
   }

  

  allChecked = false;
  indeterminate = true;
  // checkOptionsOne = [
  //   { label: 'Apple', value: 'Apple', checked: true },
  //   { label: 'Pear', value: 'Pear', checked: false },
  //   { label: 'Orange', value: 'Orange', checked: false }
  // ];

  checkOptionsOne;
  ngOnInit() {
    this. checkOptionsOne = this.data.checkOptionsOne
  }

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne.forEach(item => item.checked = true);
    } else {
      this.checkOptionsOne.forEach(item => item.checked = false);
    }
  }

  updateSingleChecked(): void {
    if (this.checkOptionsOne.every(item => item.checked === false)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

}
