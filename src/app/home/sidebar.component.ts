import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector:'app-sidebar',
  template:`  
    <div *ngFor = "let item of data">
      <li nz-submenu *ngIf="item.children">
        <span title><i class="anticon {{item.icon}}"></i>{{item.title}}</span>
        <ul *ngIf = "item.children">
          <app-sidebar [data] = "item.children"></app-sidebar>
        </ul>      
      </li>
      <li nz-menu-item *ngIf="!item.children" routerLink="{{item.url}}">
        <span title><i class="anticon anticon-user"></i><span class="nav-text">{{item.title}}</span></span>            
      </li>
    </div>
  `,
})

export class SidebarComponent implements OnInit {
    
  @Input()data;

  constructor(){}
    
  ngOnInit(){}
}