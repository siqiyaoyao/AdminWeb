import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-dynamic',
    template: `<button nz-button nzType="default">Default</button>`,
    styles:[]
})

export class DynamicComponent implements OnInit{
    
    constructor(){}
    
    ngOnInit(){

    }
}