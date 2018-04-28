import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[CheckBox-host]'
})
export class CheckBoxDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
