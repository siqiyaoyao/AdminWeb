import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-lines',
  templateUrl: './progress-lines.component.html',
  styleUrls: ['./progress-lines.component.less']
})
export class ProgressLinesComponent implements OnInit {
  @Input() percent =50;
 // @Output() onTitleChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    //this.percent = 50
  }

  // onTitleClick() {
  //   this.onTitleChange.emit();
  // }
}
