import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';




registerLocaleData(zh);
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.less']
})
export class CommonTableComponent implements OnInit {
  @Output() addForm:EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickTest:EventEmitter<any> = new EventEmitter<any>();
  @Input() tableTitles;
  @Input() tableData;
  @Input() pageSize;
  @Input() keyItem;

  constructor(

    
  ) {
  }
  listOfSelection = [
    {
      text    : '全选',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text    : '选择单数项',
      onSelect: () => {
        this.tableData.forEach((data, index) => data.checked = index % 2 !== 0);
        this.refreshStatus();
      }
    },
    {
      text    : '选择偶数项',
      onSelect: () => {
        this.tableData.forEach((data, index) => data.checked = index % 2 === 0);
        this.refreshStatus();
      }
    }
  ];
  allChecked = false;
 // dataSet: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
  indeterminate = false;

  refreshStatus(): void {
    const allChecked = this.tableData.every(value => value.checked === true);
    const allUnChecked = this.tableData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.tableData.forEach(data => data.checked = value);
    this.refreshStatus();
    this.add();
  }
  data = {
    name:"11",
  }
  ngOnInit(): void {

 
  }
  add():void{
    let objtr = document.createElement('td');
    objtr.innerHTML = `
    <button nz-button nzType="primary" (click)="addForm.emit(value)">查看</button>
    `
    document.getElementById("1").appendChild(objtr);
  }
 
  // onClickTest(id):void{
  //   console.log('bingo')
    
  // }

  

  

}
 